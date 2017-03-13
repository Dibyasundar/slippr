import Immutable from 'immutable'
import * as Types from '../constants/actions'

const initialState = new Immutable.Record({ idx: 0, markdownPages: [''], blink: false })()

export default function pages (state = initialState, action) {
  switch (action.type) {
    case Types.SPLIT_MARKDOWN_AS_PAGES:
      return state.set('markdownPages', action.markdownPages)
    case Types.UPDATE_PAGE_INDEX:
      return state.merge({idx: action.idx})
    case Types.START_BLINK_PAGE:
      return state.merge({blink: true})
    case Types.STOP_BLINK_PAGE:
      return state.merge({blink: false})
    case Types.CLEAR_PAGES:
      state.set('markdownPages', [''])
      return state.set('idx', 0)
    default:
      return state
  }
}
