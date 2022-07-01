//  Library
import { describe, test, expect } from 'vitest'
import {
    Status,
    Code,
    StatusText,
} from '../src'

/*
 * The test-cases in some of these suites are not here to test the functionality of enums
 * but instead test that these enums exist in the first place and are structured appropriately.
 * In the event of refactors, these test-cases will ensure that everything conforms to the API design.
*/

describe('Status', () => {

    test.each([
        [Status.INFORMATION.CONTINUE, 100],
        [Status.INFORMATION.SWITCHING_PROTOCOLS, 101]
        [Status.SUCCESS.OK, 200],
        [Status.SUCCESS.CREATED, 201],
        [Status.SUCCESS.ACCEPTED, 202],
        [Status.REDIRECT.MOVED_PERMANENTLY, 301],
        [Status.REDIRECT.FOUND, 302],
        [Status.CLIENT_ERROR.BAD_REQUEST, 400],
        [Status.CLIENT_ERROR.NOT_FOUND, 404],
        [Status.SERVER_ERROR.INTERNAL_SERVER_ERROR, 500],
        [Status.SERVER_ERROR.BAD_GATEWAY, 502],
    ])('%s === %d', (code, value) => {
        expect(code).toBe(value)
    })

    test.each([
        [Status.INFORMATION[100], 'CONTINUE'],
        [Status.INFORMATION[101], 'SWITCHING_PROTOCOLS'],
        [Status.SUCCESS[200], 'OK'],
        [Status.SUCCESS[201], 'CREATED'],
        [Status.SUCCESS[202], 'ACCEPTED'],
        [Status.REDIRECT[301], 'MOVED_PERMANENTLY'],
        [Status.REDIRECT[302], 'FOUND'],
        [Status.CLIENT_ERROR[400], 'BAD_REQUEST'],
        [Status.CLIENT_ERROR[404], 'NOT_FOUND'],
        [Status.SERVER_ERROR[500], 'INTERNAL_SERVER_ERROR'],
        [Status.SERVER_ERROR[502], 'BAD_GATEWAY'],
        [Status.SERVER_ERROR[678], undefined],
    ])('%d === %v', (code, value) => {
        expect(code).toBe(value)
    })

})

describe('Code', () => {

    test.each([
        [Code.CONTINUE, 100],
        [Code.SWITCHING_PROTOCOLS, 101]
        [Code.OK, 200],
        [Code.CREATED, 201],
        [Code.ACCEPTED, 202],
        [Code.MOVED_PERMANENTLY, 301],
        [Code.FOUND, 302],
        [Code.BAD_REQUEST, 400],
        [Code.NOT_FOUND, 404],
        [Code.INTERNAL_SERVER_ERROR, 500],
        [Code.BAD_GATEWAY, 502],
    ])('%s === %d', (code, value) => {
        expect(code).toBe(value)
    })

    test.each([
        [Code[100], 'CONTINUE'],
        [Code[101], 'SWITCHING_PROTOCOLS'],
        [Code[200], 'OK'],
        [Code[201], 'CREATED'],
        [Code[202], 'ACCEPTED'],
        [Code[301], 'MOVED_PERMANENTLY'],
        [Code[302], 'FOUND'],
        [Code[400], 'BAD_REQUEST'],
        [Code[404], 'NOT_FOUND'],
        [Code[500], 'INTERNAL_SERVER_ERROR'],
        [Code[502], 'BAD_GATEWAY'],
        [Code[678], undefined],
    ])('%d === %v', (code, value) => {
        expect(code).toBe(value)
    })


})

describe('Status Text', () => {

    test.each([
        [StatusText(Code.CONTINUE), 'Continue'],
        [StatusText(Status.INFORMATION.SWITCHING_PROTOCOLS), 'Switching Protocols'],
        [StatusText(Code.OK), 'Ok'],
        [StatusText(201), 'Created'],
        [StatusText(Status.SUCCESS.ACCEPTED), 'Accepted'],
        [StatusText(Code.MOVED_PERMANENTLY), 'Moved Permanently'],
        [StatusText(Status.REDIRECT.FOUND), 'Found'],
        [StatusText(Code.BAD_REQUEST), 'Bad Request'],
        [StatusText(Status.CLIENT_ERROR.NOT_FOUND), 'Not Found'],
        [StatusText(Code.INTERNAL_SERVER_ERROR), 'Internal Server Error'],
        [StatusText(502), 'Bad Gateway'],
        [StatusText(404, (str) => `[${str}]: Nothing-Here`), '[NOT_FOUND]: Nothing-Here'],
        [StatusText(678), ''],
    ])('%s === %v', (code, value) => {
        expect(code).toBe(value)
    })

})
