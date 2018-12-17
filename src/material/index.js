/* @flow */
import {
  BaseClient,
  type Response,
  type ListView,
} from '../core'

/**
 */
export type Name = string

/**
 */
export type Label = string

/**
 */
export type Ratio = number;

/**
 */
type BaseEntry = {}

/**
 */
export type Entry = BaseEntry & {
  name:   Name,
  label:  Label,
}

/**
 */
export class Client extends BaseClient {
  
  /**
   */
  list(size: number = 10, offset: number = 0): Response<ListView<Entry>> {
    return this.httpClient.get('/materials', {
      params: {
        size,
        offset,
      }
    })
  }
}
