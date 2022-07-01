//  Library
import { describe, test, expect } from 'vitest'
import {
    isStatus,
    isInformation,
    isSuccess,
    isRedirect,
    isClientError,
    isServerError,
    isError
} from '../src'

describe('Helpers', () => {

    test.each([
        [100, true],
        [102, true],
        [200, true],
        [201, true],
        [300, true],
        [301, true],
        [400, true],
        [404, true],
        [500, true],
        [502, true],
        [678, false],
    ])('isStatus(%d)', (code, bool) => {
        expect(isStatus(code)).toBe(bool)
    })

    test.each([
        [100, true],
        [102, true],
        [200, false],
        [201, false],
        [300, false],
        [301, false],
        [400, false],
        [404, false],
        [500, false],
        [502, false],
        [678, false],
    ])('isInformation(%d)', (code, bool) => {
        expect(isInformation(code)).toBe(bool)
    })

    test.each([
        [100, false],
        [102, false],
        [200, true],
        [201, true],
        [300, false],
        [301, false],
        [400, false],
        [404, false],
        [500, false],
        [502, false],
        [678, false],
    ])('isSuccess(%d)', (code, bool) => {
        expect(isSuccess(code)).toBe(bool)
    })

    test.each([
        [100, false],
        [102, false],
        [200, false],
        [201, false],
        [300, true],
        [301, true],
        [400, false],
        [404, false],
        [500, false],
        [502, false],
        [678, false],
    ])('isRedirect(%d)', (code, bool) => {
        expect(isRedirect(code)).toBe(bool)
    })

    test.each([
        [100, false],
        [102, false],
        [200, false],
        [201, false],
        [300, false],
        [301, false],
        [400, true],
        [404, true],
        [500, false],
        [502, false],
        [678, false],
    ])('isClientError(%d)', (code, bool) => {
        expect(isClientError(code)).toBe(bool)
    })

    test.each([
        [100, false],
        [102, false],
        [200, false],
        [201, false],
        [300, false],
        [301, false],
        [400, false],
        [404, false],
        [500, true],
        [502, true],
        [678, false],
    ])('isServerError(%d)', (code, bool) => {
        expect(isServerError(code)).toBe(bool)
    })

    test.each([
        [100, false],
        [102, false],
        [200, false],
        [201, false],
        [300, false],
        [301, false],
        [400, true],
        [404, true],
        [500, true],
        [502, true],
        [678, false],
    ])('isError(%d)', (code, bool) => {
        expect(isError(code)).toBe(bool)
    })

})
