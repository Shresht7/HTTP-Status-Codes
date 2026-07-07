#!/usr/bin/env pwsh

<#
.SYNOPSIS
    Generates JSON files for http status codes
.DESCRIPTION
    Generates JSON files for http status codes from
    TypeScript source code using Deno's documentation tool.
.EXAMPLE
    ./scripts/generate-json.ps1    
#>

# Create the output directory if it doesn't exist 
$DIR = "json"
New-Item -ItemType Directory -Path $DIR -Force | Out-Null

# Run deno doc and parse the structured JSON output
$docJson = deno doc --json src/index.ts | ConvertFrom-Json

# Initialize ordered dictionaries to hold categorized and flat status code data
$categorized = [ordered]@{}
$flat = [ordered]@{}

# Iterate through the nodes in the documentation JSON to extract enum declarations
# and their members, organizing them into categorized and flat structures
foreach ($fileNode in $docJson.nodes.PSObject.Properties.Value) {
    foreach ($symbol in $fileNode.symbols) {
        foreach ($decl in $symbol.declarations) {
            if ($decl.kind -ne 'enum') { continue }
            $categoryName = $symbol.name
            $members = [ordered]@{}

            foreach ($member in $decl.def.members) {
                $code = "$([int]$member.init.value.number)"
                $name = $member.name
                $desc = if ($member.jsDoc.doc) {
                    ($member.jsDoc.doc -replace "`r`n|`r|`n", ' ') -replace '\s+', ' '
                } else { '' }

                $entry = [ordered]@{ name = $name; description = $desc.Trim() }
                $members[$code] = $entry
                $flat[$code] = $entry
            }

            $categorized[$categoryName] = $members
        }
    }
}

# Write the categorized and flat status code data to JSON files
Set-Content -Path "$DIR/Status.json" -Value ($categorized | ConvertTo-Json -Depth 10)
Set-Content -Path "$DIR/StatusCodes.json" -Value ($flat | ConvertTo-Json -Depth 5)
