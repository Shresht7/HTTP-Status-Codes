//  =================
//  HTTP STATUS CODES
//  =================
/**
 * The request was received and understood, continuing process.
 * It alerts the client to wait for a final response.
 */
export var INFORMATION;
(function (INFORMATION) {
    /**
     * Server received request headers and client should proceed to send the request body (e.g. for POST requests)
     * To have a server check the request headers, a client must send `Expect: 100-continue` as a header in its initial request
     * and receive a `100-Continue` status code in the response from the server before sending the body.
     *
     * If the client receives an error code such as `403 Forbidden` or `405 Method Not Allowed` then it should not send the body.
     *
     * The response `417 Expectation Failed` indicates that the request should be repeated without the `Expect` header.
     */
    INFORMATION[INFORMATION["CONTINUE"] = 100] = "CONTINUE";
    /** The client has asked the server to switch protocols and the server has agreed to do so */
    INFORMATION[INFORMATION["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    /**
     * A WebDAV request may contain many sub-requests that may take a long time to complete.
     * This status code indicates that the server has received and is processing the request, but no response is available yet.
     * This prevents the client from timing out assuming the request was lost.
     */
    INFORMATION[INFORMATION["PROCESSING"] = 102] = "PROCESSING";
    /** Used to return some response headers before the final HTTP message */
    INFORMATION[INFORMATION["EARLY_HINTS"] = 103] = "EARLY_HINTS";
})(INFORMATION || (INFORMATION = {}));
/** Request was received, understood, and accepted */
export var SUCCESS;
(function (SUCCESS) {
    /**
     * Standard response for successful HTTP requests.
     * The actual response depends on the actual method used.
     * For GET requests, the response will contain an entity corresponding to the requested resource.
     * For POST requests, the response will contain an entity describing or containing the result of the action.
     */
    SUCCESS[SUCCESS["OK"] = 200] = "OK";
    /** The request has been accepted, and a new resource has been created */
    SUCCESS[SUCCESS["CREATED"] = 201] = "CREATED";
    /**
     * The request has been accepted, but the processing has not been completed.
     * The request may or may not be eventually acted upon and may be disallowed when processing.
     */
    SUCCESS[SUCCESS["ACCEPTED"] = 202] = "ACCEPTED";
    /**
     * The server is a transforming proxy (e.g. a Web Accelerator) that received a `200 OK` from its origin,
     * but is returning a modified version of its response.
     */
    SUCCESS[SUCCESS["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    /** The server processed the request successfully and is not returning any content */
    SUCCESS[SUCCESS["NO_CONTENT"] = 204] = "NO_CONTENT";
    /**
     * The server successfully processed the request, asks that the client reset its document view,
     * and is not returning any content
     */
    SUCCESS[SUCCESS["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    /**
     * The server is delivering only part of the content due to a range header set by the client.
     * The range header is used by HTTP clients to enable resuming of interrupted downloads,
     * or split a download into multiple simultaneous streams.
     */
    SUCCESS[SUCCESS["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    /**
     * The message body that follows is by default an XML message and can contain a number of separate response codes,
     * depending on the number of sub-requests
     */
    SUCCESS[SUCCESS["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    /**
     * The members of a DAV binding have already been enumerated in a preceding part of the (multi-status) response,
     * and are not being included again
     */
    SUCCESS[SUCCESS["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    /**
     * The server has fulfilled a request for the resource,
     * and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
     */
    SUCCESS[SUCCESS["IM_USED"] = 226] = "IM_USED";
})(SUCCESS || (SUCCESS = {}));
/** Additional action requested from client. Mainly URL Redirection */
export var REDIRECT;
(function (REDIRECT) {
    /**
     * Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation)
     * For example, this could be used to
     *  - present multiple video formats options.
     *  - list files with different filename extensions.
     */
    REDIRECT[REDIRECT["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    /** This and all future request should be redirected to the given URL */
    REDIRECT[REDIRECT["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    /** Tells the client to look at another URL. */
    REDIRECT[REDIRECT["FOUND"] = 302] = "FOUND";
    /**
     * The response to this request can be found under another URL using the GET method.
     * When receiving in response to a POST/PUT/DELETE request, the client should presume the server has received the data
     * and should issue a GET request to the given URL
     */
    REDIRECT[REDIRECT["SEE_OTHER"] = 303] = "SEE_OTHER";
    /**
     * Indicates that the resource has not been modified since the version specified by the request headers `if-Modified-Since` or `if-None-Match`.
     * In such a case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
     */
    REDIRECT[REDIRECT["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    /**
     * The requested resource is only available through a proxy, the address for which is provided in the response.
     * NOTE: for security reasons, many HTTP clients (like Mozilla Firefox and Internet Explorer) do not obey this status code
     */
    REDIRECT[REDIRECT["USE_PROXY"] = 305] = "USE_PROXY";
    /**
     * No longer used. Originally meant - Subsequent requests should used the specified proxy
     */
    REDIRECT[REDIRECT["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
    /**
     * In this case, the request should be repeated with another URI.
     * However, future requests should still use this URI.
     */
    REDIRECT[REDIRECT["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    /** This and all future requests should be directed to the given URI */
    REDIRECT[REDIRECT["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
})(REDIRECT || (REDIRECT = {}));
/** Request cannot be fulfilled due to a client side error */
export var CLIENT_ERROR;
(function (CLIENT_ERROR) {
    /** The server cannot or will not process the request due to an apparent client error (e.g. malformed request syntax, size too large etc) */
    CLIENT_ERROR[CLIENT_ERROR["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    /**
     * Similar to `403 Forbidden`, but specifically for use when authentication is required and has failed or has not yet been provided.
     * The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
     * `401` semantically means **Unauthorized**, the user does not have valid authentication credentials for the target resource.
     */
    CLIENT_ERROR[CLIENT_ERROR["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    /**
     * Not widely used, reserved for future use. The original intention was that this code might be used as part of some form
     * of digital cash or micro-payment scheme. But that has not yet happened.
     */
    CLIENT_ERROR[CLIENT_ERROR["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    /**
     * The request contained valid data and was understood by the server, but the server is refusing action.
     * This may be due to user not having the necessary permissions for a resource or needing an account of some sort,
     * or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed)
     */
    CLIENT_ERROR[CLIENT_ERROR["FORBIDDEN"] = 403] = "FORBIDDEN";
    /**
     * 404 - Not Found
     */
    CLIENT_ERROR[CLIENT_ERROR["NOT_FOUND"] = 404] = "NOT_FOUND";
    /** A request method is not supported for the requested resource. e.g. using a GET request to post form-data that requires a POST request */
    CLIENT_ERROR[CLIENT_ERROR["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    /** The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request */
    CLIENT_ERROR[CLIENT_ERROR["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    /** Client must first authenticate itself with the proxy */
    CLIENT_ERROR[CLIENT_ERROR["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    /** The server timed out waiting for the request */
    CLIENT_ERROR[CLIENT_ERROR["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    /** Indicates that the request could not be processed because of a conflict. e.g. edit conflict between multiple simultaneous updates */
    CLIENT_ERROR[CLIENT_ERROR["CONFLICT"] = 409] = "CONFLICT";
    /**
     * Indicates that request is no longer available and will never be available again
     * This should be used when a resource has been intentionally removed and the resource should be purged.
     * Upon receiving a `410` request, the client should not request this resource again.
     * Clients such as search engines should remove the resource from their indices.
     * Most general use cases do not require a `410` a `404` is enough.
     */
    CLIENT_ERROR[CLIENT_ERROR["GONE"] = 410] = "GONE";
    /** The request did not specify the length of its content, which is required by the requested resource */
    CLIENT_ERROR[CLIENT_ERROR["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    /** The server did not meet one of the preconditions that the requester put on the request header fields */
    CLIENT_ERROR[CLIENT_ERROR["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    /** The request is larger than the server is willing or able to process */
    CLIENT_ERROR[CLIENT_ERROR["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    /** The URI provided was too long for the server to process. Often the result of too much data being encoded in a query-string */
    CLIENT_ERROR[CLIENT_ERROR["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    /** The request entity has a media type that the server does not support */
    CLIENT_ERROR[CLIENT_ERROR["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    /** The client has asked for a portion of the file, but server cannot supply that portion */
    CLIENT_ERROR[CLIENT_ERROR["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    /** The server cannot meet the requirements of the `Expect` request-header field */
    CLIENT_ERROR[CLIENT_ERROR["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    /**
     * This code was an April Fools' joke. Not expected to be implemented by any HTTP server.
     * The RFC specifies this code should be returned by teapots requested to brew coffee.
     */
    CLIENT_ERROR[CLIENT_ERROR["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    /** The request was directed at a server that is not able to produce a response */
    CLIENT_ERROR[CLIENT_ERROR["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    /** The request was well-formed but was unable to be followed doe to semantic errors */
    CLIENT_ERROR[CLIENT_ERROR["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    /** The resource that is being accessed is locked */
    CLIENT_ERROR[CLIENT_ERROR["LOCKED"] = 423] = "LOCKED";
    /** The request failed because it depends on another request that failed */
    CLIENT_ERROR[CLIENT_ERROR["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    /** Indicates that the server is unwilling to risk processing a request that might be replayed */
    CLIENT_ERROR[CLIENT_ERROR["TOO_EARLY"] = 425] = "TOO_EARLY";
    /** The client should switch to a different protocol such as TLS/1.3 given in the header field */
    CLIENT_ERROR[CLIENT_ERROR["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    /** The origin server requires the request to be conditional */
    CLIENT_ERROR[CLIENT_ERROR["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    /** The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes */
    CLIENT_ERROR[CLIENT_ERROR["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    /** The server is unwilling to process the request because headers are too large */
    CLIENT_ERROR[CLIENT_ERROR["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    /** A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource */
    CLIENT_ERROR[CLIENT_ERROR["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
})(CLIENT_ERROR || (CLIENT_ERROR = {}));
/** Request cannot be fulfilled due to a server side error */
export var SERVER_ERROR;
(function (SERVER_ERROR) {
    /** A generic error message, given when an unexpected condition was encountered and no more specific message is suitable */
    SERVER_ERROR[SERVER_ERROR["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    /** This server either does not recognize the request method, or it lacks the ability to fulfill the request. */
    SERVER_ERROR[SERVER_ERROR["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    /** The server was acting as a gateway or proxy and received an invalid response from the upstream server. */
    SERVER_ERROR[SERVER_ERROR["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    /** The server cannot handle the request (because it is overloaded or down for maintenance). Generally this is a temporary state. */
    SERVER_ERROR[SERVER_ERROR["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    /** The server was acting as a gateway or a proxy and dit not receive a timely response from the upstream server */
    SERVER_ERROR[SERVER_ERROR["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    /** The server does not support the HTTP protocol version used in the request */
    SERVER_ERROR[SERVER_ERROR["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    /** Transparent content negotiation for the request results in a circular reference */
    SERVER_ERROR[SERVER_ERROR["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    /** The server is unable to store the representation needed to complete the request */
    SERVER_ERROR[SERVER_ERROR["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    /** The server detected an infinite loop while processing the request (sent instead of `208 Already reported`) */
    SERVER_ERROR[SERVER_ERROR["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    /** Further extensions to the request are required for the server to fulfill it */
    SERVER_ERROR[SERVER_ERROR["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    /**
     * The client needs to authenticate to gain network access
     * Intended for use by intercepting proxies used to control access to the network
     * (e.g. captive portals) used to require agreement to Terms of Service
     * before granting full internet access via a Wi-Fi hotspot.
     */
    SERVER_ERROR[SERVER_ERROR["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(SERVER_ERROR || (SERVER_ERROR = {}));
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
};
export const Status = {
    INFORMATION,
    SUCCESS,
    REDIRECT,
    CLIENT_ERROR,
    SERVER_ERROR
};
// -----------
// TYPE GUARDS
// -----------
/** Returns a boolean indicating whether the given number is a valid status code */
export const isStatus = (code) => code in StatusCode;
/** Type guard to determine if the status code is classified as INFORMATION */
export const isInformation = (code) => code in INFORMATION;
/** Type guard to determine if the status code is classified as SUCCESS */
export const isSuccess = (code) => code in SUCCESS;
/** Type guard to determine if the status code is classified as REDIRECT */
export const isRedirect = (code) => code in REDIRECT;
/** Type guard to determine if the status code is classified as CLIENT_ERROR */
export const isClientError = (code) => code in CLIENT_ERROR;
/** Type guard to determine if the status code is classified as SERVER_ERROR */
export const isServerError = (code) => code in SERVER_ERROR;
/** Returns a boolean indicating whether the given number is an error status code */
export const isError = (code) => isClientError(code) || isServerError(code);
