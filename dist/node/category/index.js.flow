/* @flow */

/**
 */
import {
  BaseClient,
  type Response,
} from '../core'

/**
 */
export type Key = string

/**
 */
export type Label = string

/**
 */
export type Category = {
  key: Key,
  label: Label
}

type BaseEntry = Category;

export type Entry = BaseEntry & {
  parentPath?:  Key,
  subCategories: {[Key]: Category},
}

/**
 */
export type CategoryNode = Category & {
  children?: Array<Category>
}


/**
 *
 */
export class Client extends BaseClient {

  /**
   */
  describe(key: Key): Response<CategoryNode> {
    return this.httpClient.get(`/categories/${key}`)
  }
}
