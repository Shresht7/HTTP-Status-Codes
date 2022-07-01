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
