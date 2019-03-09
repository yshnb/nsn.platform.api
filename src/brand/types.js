/* @flow strict */

import {
  type UUID,
} from '../core'

/**
 */
export type Key = string

/**
 * @typedef {UUID} brand~Id 
 */
export type Id  = UUID 

/**
 */
export type Name = string

/**
 */
export type EntryState = "active" | "deleted"

/**
 *
 */
type Base = {
  id: Id,
}

/**
 */
export type BaseEntry = Base & {}

/**
 */
export type Entry = BaseEntry & {
  name: Name,
  sysname: string,
  state: EntryState,
  registeredAt: string,
  lastModifiedAt: string,
}

/**
 */
export type IndexedEntry = BaseEntry & {}

/**
 */
export type Member = {
}
