//  Library
import { Status, Code } from '../lib'
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const DIRNAME = 'json'
const STATUS_FILE = join(DIRNAME, 'Status.json')
const CODE_FILE = join(DIRNAME, 'StatusCodes.json')

if (!existsSync(DIRNAME)) {
    mkdirSync(DIRNAME)
}

writeFileSync(STATUS_FILE, JSON.stringify(Status, null, 2), { encoding: 'utf-8' })
writeFileSync(CODE_FILE, JSON.stringify(Code, null, 2), { encoding: 'utf-8' })
