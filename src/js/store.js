import {createStore} from "redux"
import {shoppingCartReducer} from "./ShoppingCart/ShoppingCartReducer"

const state = {
  items: {
    itemList: [],
    totalValue: "",
    promocodeValue: "",
    finalValue: "",
  },
}
export const store = createStore(shoppingCartReducer, state)
