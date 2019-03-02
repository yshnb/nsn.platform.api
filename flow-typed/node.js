/* @flow */
/**
 * Default node definition w/
 *  - flow version: 0.93.0-
 *
 * This type mapper should be modified if flow-bin version is less than 0.93.0 
 * Otherwise just copy
 */
type FlowHttpClientRequest<SocketT = net$Socket> = http$ClientRequest<SocketT>

type FlowXMLHttpRequest = XMLHttpRequest

