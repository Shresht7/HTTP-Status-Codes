//  Library
import { INFORMATION } from './information'
import { SUCCESS } from './success'
import { REDIRECT } from './redirect'
import { CLIENT_ERROR } from './client_error'
import { SERVER_ERROR } from './server_error'

//  Re-exports
export { INFORMATION, SUCCESS, REDIRECT, CLIENT_ERROR, SERVER_ERROR }

/**
 * -----------------
 * HTTP Status Codes
 * -----------------
 * 
 * Hypertext Transfer Protocol (HTTP) response status codes are issued by
 * a server in response to a client's request. The first digit specifies
 * one of the five standard classes of response. The last two digits do not
 * have any specific classifying role.
 * 
 * @see {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
 */
export const Code = {
    ...INFORMATION,
    ...SUCCESS,
    ...REDIRECT,
    ...CLIENT_ERROR,
    ...SERVER_ERROR
}

export type Code = INFORMATION | SUCCESS | REDIRECT | CLIENT_ERROR | SERVER_ERROR

/**
 * -----------------
 * HTTP Status Codes
 * -----------------
 * 
 * Hypertext Transfer Protocol (HTTP) response status codes are issued by
 * a server in response to a client's request. The first digit specifies
 * one of the five standard classes of response. The last two digits do not
 * have any specific classifying role.
 * 
 * @see {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
 */
export const Status = {
    INFORMATION,
    SUCCESS,
    REDIRECT,
    CLIENT_ERROR,
    SERVER_ERROR
}

export default Status

export type Status = typeof Status

//  =======
//  HELPERS
//  =======

/** Default status text formatter. NOT_FOUND --> Not Found */
const defaultStatusTextFormatter = (str: string) => str
    .split(/_/g)    //  Split on underscores
    .map(word => word[0] + word.substring(1).toLowerCase()) //  Capitalize only the first letter of each word
    .join(' ')  //  Join words separated by a single space

/**
 * Pretty prints the status-text associated with the given code
 * @param code Status Code
 * @param formatter (Optional) Callback function to format the status-text. (default: NOT_FOUND --> Not Found)
 * @returns Formatted status text
 */
export const StatusText = (
    code: Code,
    formatter: (str: string) => string = defaultStatusTextFormatter
): string => isStatus(code) ? formatter(Code[code]) : ''

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
