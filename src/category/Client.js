/* @flow strict */

import {
  BaseClient,
  type Response,
} from '../core'

import type {
  Key,
  //
  Node,
} from './types'

/**
 *
 */
export class Client extends BaseClient {
  /**
   */
  describe(key: Key): Response<Node> {
    return this.httpClient.get(`/categories/${key}`)
  }
}
