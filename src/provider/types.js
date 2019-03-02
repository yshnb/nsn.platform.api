/* @flow strict */
import type {
  Instant,
  UUID,
} from '../core'

/**
 */
export type Id = UUID 

/**
 */
export type Name = string

/**
 */
export type ProviderType = "external" | "internal"

/**
 */
export type UniqueName = string

/**
 *
 */
type Base = {
  id:   Id,
  name: Name,
}

/**
 */
type BaseEntry = Base & {
  id: Id,
  uniqueName: UniqueName,
  providerType: ProviderType,
  createdAt: Instant,
  updatedAt: Instant,
}

/**
 */
export type Entry = BaseEntry & {
}

/**
 */
export type EntryIndex = BaseEntry & {
}

