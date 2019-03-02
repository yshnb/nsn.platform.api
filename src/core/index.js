/* @flow */

import axios from 'axios'

/**
 */
import type {
  Axios,
  AxiosPromise,
  $AxiosXHRConfigBase as AxiosXHRConfigBase,
  $AxiosError as AxiosError,
} from 'axios'

export type ListView<T> = {
  data: Array<T>,
  total: number,
  requestSize?: number,
  size?: number,
  offset?: number,
}

export type Response<T> = AxiosPromise<T>

/**
 */
export type Collection<T> = {
  data: Array<T>,
  total: number,
  requestSize: number,
  offset: number,
}

/**
 */
export type ConstructParams = {
  httpClient?:   Axios | AxiosXHRConfigBase<any, any>,
}

export class AuthenticationError extends Error {
  error: AxiosError<any> 

  name: string

  request: ?(http$ClientRequest<> | XMLHttpRequest)

  constructor(error: AxiosError<any>) {
    super(`Authentication Fault: ${ error.code ? error.code : ''} : ${ error.message } : ${ (error.request:any)._header }`)
    this.error   = error 
    this.request = error.request 

    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else { 
      this.stack = (new Error(this.message)).stack 
    }
  }

  get errorCode(): string {
    return this.error.code ? this.error.code : ''
  }
}

/**
 */
export class BaseClient {

  /**
   */
  httpClient: Axios

  constructor(params: ConstructParams = {}) {
    if(params.httpClient && (params.httpClient instanceof axios)) {
      this.httpClient = params.httpClient
    } else {
      this.httpClient = axios.create(params.httpClient)
    }

    this.httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        // eslint-disable-next-line no-console
        console.log(`ERROR: (res = ${JSON.stringify(error.response)}, status = ${error.response ? error.response.status : ''} )`)
        // eslint-disable-next-line no-console
        console.log(`ERROR: ${ JSON.stringify(error.message) }`)

        if(error.response && (401 == error.response.status)) {
          return Promise.reject(new AuthenticationError(error))
        } else {
          return Promise.reject(error)
        }
      }
    )
  }
}

export type UUID = string

/**
 * typedef Instant
 */
export type Instant = string
