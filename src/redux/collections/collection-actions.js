
import { GET_ONE_COLLECTION } from "./collection-types";
import SHOP_DATA from "../shop/ShopData";
// const dispatch = useDispatch

export const getOneCollection =  title => dispatch => {
    const collection = SHOP_DATA.find(coll => coll.routeName === title)
    dispatch({
        type: GET_ONE_COLLECTION,
        payload: collection
    })
}

