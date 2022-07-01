//  Library
import { INFORMATION, SUCCESS, REDIRECT, CLIENT_ERROR, SERVER_ERROR } from './status/'

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
