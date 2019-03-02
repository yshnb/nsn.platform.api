/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
} from '../core'

import type {
  Key,
  Member,
  //
  EntryIndex,
  Entry,
} from './types'

/**
 *
 * @class
 */
export class Client extends BaseClient {

  /**
   * List brand entries
   */
  list(size: number = 10, offset: number = 0): Response<PageResult<EntryIndex>> {
    return this.httpClient.get('/brands', {
      params: {
        size,
        offset,
      }
    })
  }

  /**
   * Describe the brand entry
   */
  describe(key: Key): Response<Entry> {
    return this.httpClient.get(`/brands/${key}`)
  }

  /**
   * List designers of the brand
   */
  listDesigners(key: Key): Response<PageResult<Member>> {
    return this.httpClient.get(`brands/${key}/teams/designer/members`)
  }
}

