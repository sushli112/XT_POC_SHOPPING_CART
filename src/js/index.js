import "jquery"
import "bootstrap"
import "popper.js"
import {store} from "./store"

import {loadShoppingCart} from "./ShoppingCart/ShoppingCartController"

loadShoppingCart()
store.subscribe(() => {
  const currentState = store.getState()
  console.log("currentstate :" + currentState)
  loadShoppingCart()
})
