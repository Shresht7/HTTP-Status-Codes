/** Request was received, understood, and accepted */
export enum SUCCESS {

    /**
     * Standard response for successful HTTP requests.
     * The actual response depends on the actual method used.
     * For GET requests, the response will contain an entity corresponding to the requested resource.
     * For POST requests, the response will contain an entity describing or containing the result of the action.
     */
    OK = 200,

    /** The request has been accepted, and a new resource has been created */
    CREATED = 201,

    /**
     * The request has been accepted, but the processing has not been completed. 
     * The request may or may not be eventually acted upon and may be disallowed when processing.
     */
    ACCEPTED = 202,

    /**
     * The server is a transforming proxy (e.g. a Web Accelerator) that received a `200 OK` from its origin,
     * but is returning a modified version of its response.
     */
    NON_AUTHORITATIVE_INFORMATION = 203,

    /** The server processed the request successfully and is not returning any content */
    NO_CONTENT = 204,

    /**
     * The server successfully processed the request, asks that the client reset its document view,
     * and is not returning any content
     */
    RESET_CONTENT = 205,

    /**
     * The server is delivering only part of the content due to a range header set by the client.
     * The range header is used by HTTP clients to enable resuming of interrupted downloads,
     * or split a download into multiple simultaneous streams.
     */
    PARTIAL_CONTENT = 206,

    /**
     * The message body that follows is by default an XML message and can contain a number of separate response codes,
     * depending on the number of sub-requests
     */
    MULTI_STATUS = 207,

    /**
     * The members of a DAV binding have already been enumerated in a preceding part of the (multi-status) response,
     * and are not being included again
     */
    ALREADY_REPORTED = 208,

    /**
     * The server has fulfilled a request for the resource,
     * and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
     */
    IM_USED = 226
}
