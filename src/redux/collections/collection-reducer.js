import SHOP_DATA from "../shop/ShopData"
import { GET_ALL_COLLECTIONS, GET_ONE_COLLECTION } from "./collection-types"

const initialState = {
    collections: SHOP_DATA,
    activeCollection: {}
}

const collectionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case type = GET_ALL_COLLECTIONS :
        return {...state, collections: payload};
    case type = GET_ONE_COLLECTION:
        return {...state, activeCollection: payload};
  default:
    return state
  }
}

export default collectionReducer