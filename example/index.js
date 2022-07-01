//  Library
import { Status, Code, isStatus, isError, isInformation, StatusText } from '../HTTPStatusCodes.js'

console.log('Status.INFORMATION.CONTINUE', Status.INFORMATION.CONTINUE)
console.log('Status.INFORMATION[100]', Status.INFORMATION[100])
console.log('Status.INFORMATION[199]', Status.INFORMATION[199])

console.log('StatusCode.ACCEPTED', Code.ACCEPTED)
console.log('StatusCode[200]', Code[200])
console.log('StatusCode[299]', Code[299])

console.log('isStatus(404)', isStatus(404))
console.log('isStatus(499)', isStatus(499))

console.log('isInformation(102)', isInformation(102))
console.log('isInformation(199)', isInformation(199))
console.log('isInformation(200)', isInformation(200))

console.log('isError(404)', isError(404))
console.log('isError(504)', isError(504))
console.log('isError(200)', isError(200))

console.log('StatusText(404)', StatusText(404))
console.log('StatusText(Status.INFORMATION.EARLY_HINTS)', StatusText(Status.INFORMATION.EARLY_HINTS))
console.log('StatusText(StatusCode.BAD_GATEWAY)', StatusText(Code.BAD_GATEWAY))
