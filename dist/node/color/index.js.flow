/* @flow */
import {
  BaseClient,
  type Response,
} from '../core'

/**
 */
export type Name = string

/**
 */
export type Label = string

/**
 * #rrggbb
 */
export type RGB = string

/**
 */
export type Color = {
  name:  Name,
  label: Label,
  rgb:   RGB
}

/**
 *
 */
export class Client extends BaseClient {

  /**
   */
  list(): Response<Array<Color>> {
    return this.httpClient.get('/colors')
  }
}
