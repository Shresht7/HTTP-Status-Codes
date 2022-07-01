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
