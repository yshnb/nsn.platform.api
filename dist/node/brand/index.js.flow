/* @flow */

import {
  BaseClient,
  type UUID,
  type Response,
  type ListView,
} from '../core'

/**
 */
export type Key = string

/**
 * @typedef {UUID} brand~ID 
 */
export type ID  = UUID 

/**
 */
export type Name = string

/**
 */
export type State = "active" | "deleted"

/**
 */
export type Brand = {
  id: ID,
}

/**
 */
export type BaseEntry = Brand & {}

/**
 */
export type Entry = BaseEntry & {
  name: Name,
  sysname: string,
  state: string,
  registeredAt: string,
  lastModifiedAt: string,
}

/**
 */
export type EntryIndex = BaseEntry & {}

/**
 */
export type Member = {}

/**
 *
 */
export class Client extends BaseClient {

  /**
   * List brand entries
   */
  list(size: number = 10, offset: number = 0): Response<EntryIndex> {
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
  listDesigners(key: Key): Response<ListView<Member>> {
    return this.httpClient.get(`brands/${key}/teams/designer/members`)
  }
}
