/* @flow */
import {
  BaseClient,
  type Response,
} from '../../core'

/**
 */
export type Label = string

/**
 */
export type Name = string

/**
 */
export type Pattern = {}

type BaseEntry = {}

export type Entry = BaseEntry & {
  label: Label,
  name: Name,
}

/**
 */
export class Client extends BaseClient {
  
  list(size: number = 10, offset: number = 0): Response<Pattern> {
    return this.httpClient.get('/apparel/patterns', {
      params: {
        size,
        offset,
      }
    })
  }
}
