/* @flow strict */

import type {
  Instant,
  UUID,
  SizeKey,
  SizeFamilyKey,
} from '../core'

/**
 */
export type Id = UUID 

export type Key = string

export type {
  SizeKey,
  SizeFamilyKey,
}

/**
 */
export type Name = string

export type DesignerId = string

export type ProviderId = string

export type BrandKey = string

export type Cost = number

export type Price = number

export type GenderTarget = "male" | "female"

export type CategoryKey = string

export type Comment = string

export type Measurement = {
  name: string,
  values: Object,
}

export type Quantity = number

/**
 */
export type EntryState = "active" | "deleted" | "archived"

/**
 * comma separated list of EntryState
 *
 * ex) "active,deleted"
 */
export type EntryStateList = string


// -------------------------------------------------
// MODELS
/**
 */
export type Design = {
  id:   Id,
  name: Name,
}

/**
 */
export type BaseSnapshot = Design & {}

/**
 */
export type Snapshot = BaseSnapshot & {
  key: string,
  version: number, // 2,
  brand: string, // lazlena,
  designer: number, // 529568bf-6566-43dc-b23b-33e8b77f491d,
  state: string,
  provider: string,
  genderTarget: string,
  cost: number, // 100.0,
  price: number, // 200.0,
  sizeFamily: SizeFamilyKey, // sml,
  patterns: Array<ColorPattern>,
  measurements: Array<Measurement>,
  attachments: Array<Attachment>,
  comment?: string,
  images: Array<Image>,
  category: CategoryKey,
  registeredAt: string, // 2018-05-28T12:26:14Z,
  snapshotAt: string, // 2018-05-28T12:26:14Z
}

/**
 */
export type SnapshotIndex = BaseSnapshot & {}

/**
 */
export type BaseEntry = Design 

/**
 */
export type IndexedEntry = BaseEntry & {}

/**
 */
export type Entry = BaseEntry & {
  id: Id,
  brand: BrandKey,
  designer?: DesignerId,
  provider?: ProviderId,
  name?: Name,
  cost?: Cost,
  price?: Price,
  genderTarget?: GenderTarget,
  category?: CategoryKey,
  patterns: Array<ColorPattern>,
  sizeFamily?: SizeFamilyKey,
  sizes: Array<SizeKey>,
  comment?: Comment,
  measurements: Array<Measurement>,
  attachments: Array<Attachment>,
  images: Array<Image>,
}

export type ColorPattern = {
  colorLabel:   string,
  colorFamilies: Array<string>,
  texture:      string,
  pattern:      string,
  materials:    Array<MaterialRatio>
}

export type MaterialName = string

export type Ratio = number

export type MaterialRatio = {
  key:   MaterialName,
  ratio: Ratio,
}

/**
 */
export type Attachment = {
  key: string,
  title: string,
  uploadedAt: string,
}

export type Image = {
  key: string,
  title: string,
  uploadedAt: string,
};
