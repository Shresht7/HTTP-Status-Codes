import { assertEquals } from '@std/assert'
import {
  isStatus,
  isInformation,
  isSuccess,
  isRedirect,
  isClientError,
  isServerError,
  isError,
} from '../src/index.ts'

for (const [code, expected] of [
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
] as [number, boolean][]) {
  Deno.test(`isStatus(${code}) === ${expected}`, () => {
    assertEquals(isStatus(code), expected)
  })
}

for (const [code, expected] of [
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
] as [number, boolean][]) {
  Deno.test(`isInformation(${code}) === ${expected}`, () => {
    assertEquals(isInformation(code), expected)
  })
}

for (const [code, expected] of [
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
] as [number, boolean][]) {
  Deno.test(`isSuccess(${code}) === ${expected}`, () => {
    assertEquals(isSuccess(code), expected)
  })
}

for (const [code, expected] of [
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
] as [number, boolean][]) {
  Deno.test(`isRedirect(${code}) === ${expected}`, () => {
    assertEquals(isRedirect(code), expected)
  })
}

for (const [code, expected] of [
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
] as [number, boolean][]) {
  Deno.test(`isClientError(${code}) === ${expected}`, () => {
    assertEquals(isClientError(code), expected)
  })
}

for (const [code, expected] of [
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
] as [number, boolean][]) {
  Deno.test(`isServerError(${code}) === ${expected}`, () => {
    assertEquals(isServerError(code), expected)
  })
}

for (const [code, expected] of [
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
] as [number, boolean][]) {
  Deno.test(`isError(${code}) === ${expected}`, () => {
    assertEquals(isError(code), expected)
  })
}
