/* @flow strict */

import axios, {
  Axios,
  type $AxiosXHRConfigBase as AxiosXHRConfigBase,
} from 'axios'

import {
  AuthenticationError,
} from './errors'

/**
 */
export type ConstructParams = {
  httpClient?:   Axios | AxiosXHRConfigBase<any, any>,
}

/**
 */
export class BaseClient {

  /**
   */
  httpClient: Axios

  constructor(params: ConstructParams = {}) {
    if(params.httpClient && (params.httpClient instanceof Axios)) {
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

