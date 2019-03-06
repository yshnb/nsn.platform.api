/* @flow strict */
import type {
  EntryState,
} from './types'

import {
  EntryStateLabels,
} from './consts'

/**
 * @class
 */
class Helper {
  /**
   */
  labelEntryState(state:EntryState): string {
    switch(state) {
    case 'active':
    case 'deleted':
    case 'archived':
      return EntryStateLabels[state]
    default:
      throw new Error(`Unknown state ${ state}`)
    }
  }
}

/**
 *
 * @example ```
 *
 * import {
 *   apparel,
 * } from 'nsn.platform.apparel'
 *
 * const label = apparel.design.helper.labelEntryState(state)
 * ```
 */
export const helper = new Helper() 
