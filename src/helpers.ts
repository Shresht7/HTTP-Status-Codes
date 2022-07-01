//  Library
import { Code } from './status'
import { INFORMATION, SUCCESS, REDIRECT, CLIENT_ERROR, SERVER_ERROR } from './status/index'

//  =======
//  HELPERS
//  =======

/** Pretty print status code text */
export const StatusText = (code: Code) => Code[code]
    .split(/_/g)    //  Split on underscores
    .map(word => word[0] + word.substring(1).toLowerCase()) //  Capitalize only the first letter of each word
    .join(' ')  //  Join words separated by a single space

// -----------
// TYPE GUARDS
// -----------

/** Returns a boolean indicating whether the given number is a valid status code */
export const isStatus = (code: number): code is Code => code in Code

/** Type guard to determine if the status code is classified as INFORMATION */
export const isInformation = (code: number): code is INFORMATION => code in INFORMATION

/** Type guard to determine if the status code is classified as SUCCESS */
export const isSuccess = (code: number): code is SUCCESS => code in SUCCESS

/** Type guard to determine if the status code is classified as REDIRECT */
export const isRedirect = (code: number): code is REDIRECT => code in REDIRECT

/** Type guard to determine if the status code is classified as CLIENT_ERROR */
export const isClientError = (code: number): code is CLIENT_ERROR => code in CLIENT_ERROR

/** Type guard to determine if the status code is classified as SERVER_ERROR */
export const isServerError = (code: number): code is SERVER_ERROR => code in SERVER_ERROR

/** Returns a boolean indicating whether the given number is an error status code */
export const isError = (code: number): boolean => isClientError(code) || isServerError(code)
