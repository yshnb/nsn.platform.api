/* @flow strict */

import type {
  EntryState,
} from './types'

import {
  EntryStates,
} from './consts'

/**
 */
class Helper {
  /**
   */
  labelEntryState(state: EntryState): string {
    if (EntryStates[state]) {
      return EntryStates[state]
    } else {
      throw new Error(`Unknown state ${ state}`) 
    }
  }
}

/**
 */
export const helper = new Helper()
