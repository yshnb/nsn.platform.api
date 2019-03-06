/* @flow */

import type {
  EntryState,
} from './types'

/**
 */
export const EntryStateLabels: {[EntryState]: string} = {
  active:   'アクティブ',
  deleted:  '削除済み',
  archived: 'アーカイブ済み',
}
