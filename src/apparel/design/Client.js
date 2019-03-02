/* @flow strict */
/**
 */
import {
  BaseClient,
  type PageResult,
  type Response,
  type SizeFamilyKey,
  type SizeKey,
} from '../core'

import type {
  Attachment,
  BrandKey,
  CategoryKey,
  ColorPattern,
  Cost,
  DesignerId,
  EntryState,
  GenderTarget,
  Id,
  Image,
  Key,
  Measurement,
  Name,
  Price,
  ProviderId,
  Quantity,
  // Models
  Entry,
  EntryIndex,
  Snapshot,
} from './types'

/**
 */
export type ListOption = {
  condition?: {
    key?: Key,
    state?: EntryState,
    designer?: DesignerId,
  }
}

/**
 */
export type OrderParams = {
  quantity: Quantity,
}

export type RegisterParams = {
  brand: BrandKey,
  designer?: DesignerId,
  provider?: ProviderId,
  name?: Name,
  cost?: Cost,
  price?: Price,
  genderTarget?: GenderTarget,
  category?: CategoryKey,
  patterns?: Array<ColorPattern>,
  sizeFamily?: SizeFamilyKey,
  sizes?: Array<SizeKey>,
  comment?: Comment,
  measurements?: Array<Measurement>,
  attachments?: Array<Attachment>,
  images?: Array<Image>,
}

/**
 */
export type UpdateParams = {
  key: ?string,
}

export type ProductizeParams = {}

export type ArchiveParams = {}

export type UnarchiveParams = {}

/**
 *
 */
export class Client extends BaseClient {

  /**
   *
   */
  list(size: number = 10, offset: number = 0, opt: ListOption = {}): Response<PageResult<EntryIndex>> {
    const condition = {
      ...opt.condition,
    }
    return this.httpClient.get('/apparel/designs', {
      params: {
        size,
        offset,
        ...condition,
      }
    })
  }

  /**
   *
   */
  describe(id: Id): Response<Snapshot> {
    return this.httpClient.get(`/apparel/designs/${ id }`)
  }

  /**
   *
   */
  register(entry: RegisterParams): Response<Entry> {
    return this.httpClient.post('/apparel/designs', entry)
  }

  /**
   *
   */
  update(id: Id, params: UpdateParams): Response<Entry> {
    return this.httpClient.post(`/apparel/designs/${ id }`, params)
  }

  /**
   *
   */
  archive(id: Id, params: ArchiveParams = {}): Response<void> {
    return this.httpClient.post(`/apparel/designs/${ id }/archive`, params)
  }

  /**
   *
   */
  unarchive(id: Id, params: UnarchiveParams = {}): Response<void> {
    return this.httpClient.post(`/apparel/designs/${ id }/unarchive`, params)
  }

  /**
   * Order sample
   */
  order(id: Id, params: OrderParams): Response<void> {
    return this.httpClient.post(`/apparel/designs/${ id }/order`, params)
  }

  /**
   *
   */
  productize(id: Id, params: ProductizeParams = {}): Response<void> {
    return this.httpClient.post(`/apparel/designs/${ id }/productize`, params)
  }
}

