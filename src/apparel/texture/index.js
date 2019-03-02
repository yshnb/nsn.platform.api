/* @flow strict */

import {
  BaseClient,
  type Response,
} from '../../core'

/**
 */
export type Name = string

/**
 */
export type Label = string

/**
 */
export type Entry = {
  name: Name,
  label: Label,
}

/**
 */
export class Client extends BaseClient {
  list(size: number = 10, offset: number = 0): Response<Entry> {
    return this.httpClient.get('/apparel/textures', {
      params: {
        size,
        offset,
      }
    })
  }
}
