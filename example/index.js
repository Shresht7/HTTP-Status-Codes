//  Library
import { Status, StatusCode, isStatus, isError, isInformation } from '../HTTPStatusCodes.js'

console.log('Status.INFORMATION.CONTINUE', Status.INFORMATION.CONTINUE)
console.log('Status.INFORMATION[100]', Status.INFORMATION[100])
console.log('Status.INFORMATION[199]', Status.INFORMATION[199])

console.log('StatusCode.ACCEPTED', StatusCode.ACCEPTED)
console.log('StatusCode[200]', StatusCode[200])
console.log('StatusCode[299]', StatusCode[299])

console.log('isStatus(404)', isStatus(404))
console.log('isStatus(499)', isStatus(499))

console.log('isInformation(102)', isInformation(102))
console.log('isInformation(199)', isInformation(199))
console.log('isInformation(200)', isInformation(200))

console.log('isError(404)', isError(404))
console.log('isError(504)', isError(504))
console.log('isError(200)', isError(200))
