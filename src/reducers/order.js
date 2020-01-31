import Immutable from 'immutable'
import * as ActionType from 'actions/store'

export const initialState = Immutable.fromJS({
  isLoading: false
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_STORES:
      return state.set('isLoading', true)

    case ActionType.GET_STORES_SUCCESS:
      return state.merge(
        Object.assign({}, action.payload.data, {
          isLoading: false,
          status: 200
        })
      )
    case ActionType.GET_STORES_FAIL:
      return {
        ...state,
        status: 404
      }

    default:
      return state
  }
}
