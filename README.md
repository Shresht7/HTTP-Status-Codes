<h1> HTTP Status Codes</h1>

<h3>🚧 Work in Progress 🚧</h3>

<!-- 
## 📦 Import

### Node

```sh
TODO: npm install <package-name>
```

```ts
import { Status, Code } from 'http-status-codes'
```

### Deno

```ts
import { Status, Code } from 'https://.../HTTP-Status-Codes/deno/mod.ts'
```
-->

## 📖 Usage

```ts
import { Status, Code } from 'http-status-code'

Status.INFORMATION.PROCESSING  //  102
Status.SUCCESS.OK              //  200
Status.CLIENT_ERROR[404]       //  NOT_FOUND

Code.BAD_GATEWAY               //  502
Code[200]                      //  OK
```

### `Status`

| Status Type           | Series |
| --------------------- | ------ |
| `Status.INFORMATION`  | `1xx`  |
| `Status.SUCCESS`      | `2xx`  |
| `Status.REDIRECT`     | `3xx`  |
| `Status.CLIENT_ERROR` | `4xx`  |
| `Status.SERVER_ERROR` | `5xx`  |

```ts
Status.INFORMATION.PROCESSING   //  102
Status.SUCCESS.OK               //  200
Status.CLIENT_ERROR[404]        //  NOT_FOUND
```

### `Code`

```ts
Code.SWITCHING_PROTOCOLS        //  101
Code.CREATED                    //  201
Code.BAD_REQUEST                //  400
Code[301]                       //  MOVED_PERMANENTLY
```

### `StatusText`

```ts
import { Status, Code, StatusText } from 'http-status-code'

StatusText(Code.CONTINUE)                           //  Continue
StatusText(Status.INFORMATION.SWITCHING_PROTOCOLS)  //  Switching Protocols
StatusText(404)                                     //  Not Found
```

`StatusText` can be given a custom formatter to customize the output string.

```ts
StatusText(Status.CLIENT_ERROR.NOT_FOUND, (text: string) => {
    return `[${Code[text]} - ${text}]: Nothing to see here!`
})
//  [404 - NOT_FOUND]: Nothing to see here!
```

### `Checks`

`isStatus` | `isInformation` | `isSuccess` | `isRedirect` | `isClientError` | `isServerError` | `isError`

```ts
import {
    Status,
    Code,
    isStatus,
    isInformation,
    isSuccess,
    isClientError,
    isServerError
} from 'http-status-code'

isStatus(Status.REDIRECT.MOVED_PERMANENTLY)             //  true
isStatus(Code.BAD_REQUEST)                              //  true
isStatus(502)                                           //  true
isStatus(987)                                           //  false

isInformation(Status.INFORMATION.SWITCHING_PROTOCOLS)   //  true
isInformation(Code.INTERNAL_SERVER_ERROR)               //  false  

isSuccess(200)                                          //  true
isSuccess(Code.NOT_FOUND)                               //  false

isClientError(404)                                      //  true
isServerError(404)                                      //  false
isError(404)                                            //  true
```

---

## 📑License

> [MIT License](./LICENSE)
