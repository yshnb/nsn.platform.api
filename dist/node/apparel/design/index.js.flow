/* @flow strict */
/**
 */
import {
  BaseClient,
  type Response,
  type ListView,
} from '../../core'


import {
  type SizeKey,
  type SizeFamilyKey,
} from '../core/types'

import type {
  Attachment,
  BrandKey,
  CategoryKey,
  ColorPattern,
  Cost,
  DesignerID,
  EntryState,
  GenderTarget,
  ID,
  Image,
  Key,
  Measurement,
  Name,
  Price,
  ProviderID,
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
    designer?: DesignerID,
  }
}

/**
 */
export type OrderParams = {
  quantity: Quantity,
}

export type RegisterParams = {
  brand: BrandKey,
  designer?: DesignerID,
  provider?: ProviderID,
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

/**
 *
 */
export class Client extends BaseClient {

  /**
   *
   */
  list(size: number = 10, offset: number = 0, opt: ListOption = {}): Response<ListView<EntryIndex>> {
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
  describe(id: ID): Response<Snapshot> {
    return this.httpClient.get(`/apparel/designs/${id}`)
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
  update(id: ID, params: UpdateParams): Response<Entry> {
    return this.httpClient.post(`/apparel/designs/${id}`, params)
  }

  /**
   *
   */
  archive(id: ID): Response<void> {
    return this.httpClient.post(`/apparel/designs/${id}/archive`)
  }

  /**
   *
   */
  unarchive(id: ID): Response<void> {
    return this.httpClient.post(`/apparel/designs/${id}/unarchive`)
  }

  /**
   * Order sample
   */
  order(id: ID, params: OrderParams): Response<void> {
    return this.httpClient.post(`/apparel/designs/${id}/order`, params)
  }

  /**
   *
   */
  productize(id: ID): Response<void> {
    return this.httpClient.post(`/apparel/designs/${id}/productize`)
  }
}
