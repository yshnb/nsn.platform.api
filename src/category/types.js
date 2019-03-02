/* @flow strict */

import {
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

/**
 */
type BaseEntry = Category;

/**
 */
export type Entry = BaseEntry & {
  parentPath?:  Key,
  subCategories: {[Key]: Label},
}

/**
 */
export type Node = Category & {
  children?: Array<Category>
}


