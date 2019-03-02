/* @flow strict */
import {
  BaseClient,
  type Response,
  type PageResult,
} from '../core'

import type {
  Id,
  Entry,
  EntryIndex,
} from './types'

/**
 *
 */
export class Client extends BaseClient {
  /**
   */
  list(size: number = 10, offset: number = 0): Response<PageResult<EntryIndex>> {
    return this.httpClient.get('/product/providers', {
      params: {
        size,
        offset,
      }
    })
  }

  describe(id: Id): Response<Entry> {
    return this.httpClient.get(`/product/providers/${ id }`)
  }
}

