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
