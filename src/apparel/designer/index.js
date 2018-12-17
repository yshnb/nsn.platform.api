/* @flow */

/**
 * Designer ID
 */
export type ID = string

/**
 * Designer Name
 */
export type Name = string

type BaseEntry = {
  id:    ID,
  name:  Name,
}

/**
 * Entry Model
 */
export type Entry = BaseEntry & {
}

/**
 * Entry Index Model
 */
export type EntryIndex = BaseEntry & {
}

