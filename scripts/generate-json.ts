import { Status, Code } from '../src/index.ts'

const DIR = 'json'

Deno.mkdirSync(DIR, { recursive: true })
Deno.writeTextFileSync(`${DIR}/Status.json`, JSON.stringify(Status, null, 2))
Deno.writeTextFileSync(`${DIR}/StatusCodes.json`, JSON.stringify(Code, null, 2))
