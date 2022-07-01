//  Library
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

//  Read the index.ts file
let contents = readFileSync(join('src', 'index.ts'), { encoding: 'utf-8' })

//  Replace node imports with deno compatible imports
contents = contents.replace(/import\s*(.*?)\s*from\s*['"]\.\/(.*)['"]/g, "import $1 from '../src/$2.ts'")

//  Write to deno/mod.ts
writeFileSync(join('deno', 'mod.ts'), contents, { encoding: 'utf-8' })
