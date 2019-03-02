/* @flow */
import {
  BaseClient,
  type Response,
  type ListView,
  type Instant,
} from '../core'

/**
 */
export type ID = string

/**
 */
export type Name = string

/**
 *
 */
type BaseProvider = {
  id:   ID,
  name: Name,
}

export type BaseEntry = BaseProvider

export type Entry = BaseEntry & {
  uniqueName: UniqueName,
  providerType: ProviderType,
  createdAt: Instant,
  updatedAt: Instant,
}

export type EntryIndex = BaseEntry & {
  uniqueName: UniqueName,
  providerType: ProviderType,
  createdAt: Instant,
  updatedAt: Instant,
}

export type ProviderType = "external" | "internal"

export type UniqueName = string

/**
 *
 */
export class Client extends BaseClient {

  /**
   */
  list(size: number = 10, offset: number = 0): Response<ListView<EntryIndex>> {
    return this.httpClient.get('/product/providers', {
      params: {
        size,
        offset,
      }
    })
  }
}

