//  =================
//  HTTP STATUS CODES
//  =================

/**
 * The request was received and understood, continuing process.
 * It alerts the client to wait for a final response.
 */
export enum INFORMATION {

    /**
     * Server received request headers and client should proceed to send the request body (e.g. for POST requests)
     * To have a server check the request headers, a client must send `Expect: 100-continue` as a header in its initial request
     * and receive a `100-Continue` status code in the response from the server before sending the body.
     * 
     * If the client receives an error code such as `403 Forbidden` or `405 Method Not Allowed` then it should not send the body.
     * 
     * The response `417 Expectation Failed` indicates that the request should be repeated without the `Expect` header.
     */
    CONTINUE = 100,

    /** The client has asked the server to switch protocols and the server has agreed to do so */
    SWITCHING_PROTOCOLS = 101,

    /**
     * A WebDAV request may contain many sub-requests that may take a long time to complete.
     * This status code indicates that the server has received and is processing the request, but no response is available yet.
     * This prevents the client from timing out assuming the request was lost.
     */
    PROCESSING = 102,

    /** Used to return some response headers before the final HTTP message */
    EARLY_HINTS = 103
}

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

/** Additional action requested from client. Mainly URL Redirection */
export enum REDIRECT {

    /**
     * Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation)
     * For example, this could be used to
     *  - present multiple video formats options.
     *  - list files with different filename extensions.
     */
    MULTIPLE_CHOICES = 300,

    /** This and all future request should be redirected to the given URL */
    MOVED_PERMANENTLY = 301,

    /** Tells the client to look at another URL. */
    FOUND = 302,

    /**
     * The response to this request can be found under another URL using the GET method.
     * When receiving in response to a POST/PUT/DELETE request, the client should presume the server has received the data
     * and should issue a GET request to the given URL
     */
    SEE_OTHER = 303,

    /**
     * Indicates that the resource has not been modified since the version specified by the request headers `if-Modified-Since` or `if-None-Match`.
     * In such a case, there is no need to retransmit the resource since the client still has a previously-downloaded copy. 
     */
    NOT_MODIFIED = 304,

    /**
     * The requested resource is only available through a proxy, the address for which is provided in the response.
     * NOTE: for security reasons, many HTTP clients (like Mozilla Firefox and Internet Explorer) do not obey this status code
     */
    USE_PROXY = 305,

    /**
     * No longer used. Originally meant - Subsequent requests should used the specified proxy
     */
    SWITCH_PROXY = 306,

    /**
     * In this case, the request should be repeated with another URI.
     * However, future requests should still use this URI.
     */
    TEMPORARY_REDIRECT = 307,

    /** This and all future requests should be directed to the given URI */
    PERMANENT_REDIRECT = 308
}

/** Request cannot be fulfilled due to a client side error */
export enum CLIENT_ERROR {

    /** The server cannot or will not process the request due to an apparent client error (e.g. malformed request syntax, size too large etc) */
    BAD_REQUEST = 400,

    /**
     * Similar to `403 Forbidden`, but specifically for use when authentication is required and has failed or has not yet been provided.
     * The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
     * `401` semantically means **Unauthorized**, the user does not have valid authentication credentials for the target resource.
     */
    UNAUTHORIZED = 401,

    /**
     * Not widely used, reserved for future use. The original intention was that this code might be used as part of some form
     * of digital cash or micro-payment scheme. But that has not yet happened.
     */
    PAYMENT_REQUIRED = 402,

    /**
     * The request contained valid data and was understood by the server, but the server is refusing action.
     * This may be due to user not having the necessary permissions for a resource or needing an account of some sort,
     * or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed)
     */
    FORBIDDEN = 403,

    /**
     * 404 - Not Found
     */
    NOT_FOUND = 404,

    /** A request method is not supported for the requested resource. e.g. using a GET request to post form-data that requires a POST request */
    METHOD_NOT_ALLOWED = 405,

    /** The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request */
    NOT_ACCEPTABLE = 406,

    /** Client must first authenticate itself with the proxy */
    PROXY_AUTHENTICATION_REQUIRED = 407,

    /** The server timed out waiting for the request */
    REQUEST_TIMEOUT = 408,

    /** Indicates that the request could not be processed because of a conflict. e.g. edit conflict between multiple simultaneous updates */
    CONFLICT = 409,

    /**
     * Indicates that request is no longer available and will never be available again
     * This should be used when a resource has been intentionally removed and the resource should be purged.
     * Upon receiving a `410` request, the client should not request this resource again.
     * Clients such as search engines should remove the resource from their indices.
     * Most general use cases do not require a `410` a `404` is enough. 
     */
    GONE = 410,

    /** The request did not specify the length of its content, which is required by the requested resource */
    LENGTH_REQUIRED = 411,

    /** The server did not meet one of the preconditions that the requester put on the request header fields */
    PRECONDITION_FAILED = 412,

    /** The request is larger than the server is willing or able to process */
    PAYLOAD_TOO_LARGE = 413,

    /** The URI provided was too long for the server to process. Often the result of too much data being encoded in a query-string */
    URI_TOO_LONG = 414,

    /** The request entity has a media type that the server does not support */
    UNSUPPORTED_MEDIA_TYPE = 415,

    /** The client has asked for a portion of the file, but server cannot supply that portion */
    RANGE_NOT_SATISFIABLE = 416,

    /** The server cannot meet the requirements of the `Expect` request-header field */
    EXPECTATION_FAILED = 417,

    /**
     * This code was an April Fools' joke. Not expected to be implemented by any HTTP server.
     * The RFC specifies this code should be returned by teapots requested to brew coffee.
     */
    IM_A_TEAPOT = 418,

    /** The request was directed at a server that is not able to produce a response */
    MISDIRECTED_REQUEST = 421,

    /** The request was well-formed but was unable to be followed doe to semantic errors */
    UNPROCESSABLE_ENTITY = 422,

    /** The resource that is being accessed is locked */
    LOCKED = 423,

    /** The request failed because it depends on another request that failed */
    FAILED_DEPENDENCY = 424,

    /** Indicates that the server is unwilling to risk processing a request that might be replayed */
    TOO_EARLY = 425,

    /** The client should switch to a different protocol such as TLS/1.3 given in the header field */
    UPGRADE_REQUIRED = 426,

    /** The origin server requires the request to be conditional */
    PRECONDITION_REQUIRED = 428,

    /** The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes */
    TOO_MANY_REQUESTS = 429,

    /** The server is unwilling to process the request because headers are too large */
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

    /** A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource */
    UNAVAILABLE_FOR_LEGAL_REASONS = 451
}

/** Request cannot be fulfilled due to a server side error */
export enum SERVER_ERROR {

    /** A generic error message, given when an unexpected condition was encountered and no more specific message is suitable */
    INTERNAL_SERVER_ERROR = 500,

    /** This server either does not recognize the request method, or it lacks the ability to fulfill the request. */
    NOT_IMPLEMENTED = 501,

    /** The server was acting as a gateway or proxy and received an invalid response from the upstream server. */
    BAD_GATEWAY = 502,

    /** The server cannot handle the request (because it is overloaded or down for maintenance). Generally this is a temporary state. */
    SERVICE_UNAVAILABLE = 503,

    /** The server was acting as a gateway or a proxy and dit not receive a timely response from the upstream server */
    GATEWAY_TIMEOUT = 504,

    /** The server does not support the HTTP protocol version used in the request */
    HTTP_VERSION_NOT_SUPPORTED = 505,

    /** Transparent content negotiation for the request results in a circular reference */
    VARIANT_ALSO_NEGOTIATES = 506,

    /** The server is unable to store the representation needed to complete the request */
    INSUFFICIENT_STORAGE = 507,

    /** The server detected an infinite loop while processing the request (sent instead of `208 Already reported`) */
    LOOP_DETECTED = 508,

    /** Further extensions to the request are required for the server to fulfill it */
    NOT_EXTENDED = 510,

    /**
     * The client needs to authenticate to gain network access
     * Intended for use by intercepting proxies used to control access to the network
     * (e.g. captive portals) used to require agreement to Terms of Service
     * before granting full internet access via a Wi-Fi hotspot.
     */
    NETWORK_AUTHENTICATION_REQUIRED = 511
}

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
export const StatusCode = {
    ...INFORMATION,
    ...SUCCESS,
    ...REDIRECT,
    ...CLIENT_ERROR,
    ...SERVER_ERROR
}

export const Status = {
    INFORMATION,
    SUCCESS,
    REDIRECT,
    CLIENT_ERROR,
    SERVER_ERROR
}

export type Status = typeof Status
