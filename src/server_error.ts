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
