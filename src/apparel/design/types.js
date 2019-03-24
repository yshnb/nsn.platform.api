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

/**
 */
export type Key = string

/**
 */
export type {
  SizeKey,
  SizeFamilyKey,
}

/**
 */
export type Name = string

/**
 */
export type DesignerId = string

/**
 */
export type ProviderId = string

/**
 */
export type BrandKey = string

/**
 */
export type Cost = number

/**
 */
export type Price = number

/**
 */
export type GenderTarget = "male" | "female"

/**
 */
export type CategoryKey = string

/**
 */
export type Comment = string

/**
 */
export type Measurement = {
  name: string,
  values: Object,
}

/**
 */
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

export type VersionNumber = number


// -------------------------------------------------
// MODELS
/**
 */
export type Persisted = {
  id:         Id,
  createdAt:  Instant,
  updatedAt:  Instant,
}

/**
 */
export type BaseSnapshot = Persisted & {
  key:             Key,
  brand:           BrandKey,
  category:        CategoryKey,
  cost:            Cost,
  designer:        DesignerId,
  genderTarget:    GenderTarget,
  price:           Price,
  provider:        ProviderId,
  registeredAt:    Instant,
  sizeFamily:      SizeFamilyKey,
  snapshotAt:      Instant,
  state:           EntryState,
  version:         VersionNumber,
}

/**
 */
export type Snapshot = BaseSnapshot & {
  comment?:        Comment,
  // One-To-Many
  attachments:     Array<Attachment>,
  images:          Array<Image>,
  measurements:    Array<Measurement>,
  patterns:        Array<ColorPattern>,
}

/**
 */
export type IndexedSnapshot = BaseSnapshot & {

}

/**
 */
export type FormFields = {
  brand:           BrandKey,
  category?:       CategoryKey,
  comment?:        Comment,
  cost?:           Cost,
  designer?:       DesignerId,
  genderTarget?:   GenderTarget,
  name?:           Name,
  price?:          Price,
  provider?:       ProviderId,
  sizeFamily?:     SizeFamilyKey,
  // One-To-Many
  attachments:     Array<Attachment>,
  images:          Array<Image>,
  measurements:    Array<Measurement>,
  patterns:        Array<ColorPattern>,
  sizes:           Array<SizeKey>,
}

/**
 * @memberof apparel.design
 * @property {boolean} isProductized - Is productized or not.
 */
export type Entry = Persisted & FormFields & {
  isProductized:   boolean,
}

/**
 */
export type ColorPattern = {
  colorLabel:   string,
  colorFamilies: Array<string>,
  texture:      string,
  pattern:      string,
  materials:    Array<MaterialRatio>
}

/**
 */
export type MaterialName = string

/**
 */
export type Ratio = number

/**
 */
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

/**
 */
export type Image = {
  key: string,
  title: string,
  uploadedAt: string,
};
