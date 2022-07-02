//  Library
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'

const SOURCE_FILE = join('src', 'index.ts')
const DEST_FILE = join('deno', 'mod.ts')

//  Read the source file
let contents = readFileSync(SOURCE_FILE, { encoding: 'utf-8' })

//  //  Replace node imports with deno compatible imports
//  // contents = contents.replace(/import\s*(.*?)\s*from\s*['"]\.\/(.*)['"]/g, "import $1 from '../src/$2.ts'")

//  Single-file export
contents = contents
    .replace(/\s*export\s*{ INFORMATION, SUCCESS, REDIRECT, CLIENT_ERROR, SERVER_ERROR }\s*/, '\n')
    .replace(/import\s*(.*?)\s*from\s*['"]\.\/(.*)['"]/g, (_substring, ...args) => {
        return readFileSync(join('src', args[1] + '.ts'), { encoding: 'utf-8' })
    })

//  Create the deno directory if it doesn't exist
if (!existsSync(dirname(DEST_FILE))) {
    mkdirSync(dirname(DEST_FILE))
}

//  Write to dest file
writeFileSync(DEST_FILE, contents, { encoding: 'utf-8' })
