import {getItemsForCart, removeItemFromCart} from "./ShoppingCartService"
import {store} from "../store"
const Handlebars = require("handlebars")

export const loadShoppingCart = () => {
  const currentState = store.getState()
  if (currentState.items === undefined) {
    getItemsForCart().then(itemdata => {
      createCartView(itemdata)
      for (var i = 0; i < itemdata.itemList.length; i++) {
        var id = itemdata.itemList[i].id
        document.getElementById("" + id).addEventListener("click", function() {
          removeFromCart(id)
        })
      }
      store.dispatch({type: "LOADCART", dataItem: {items: itemdata}})
    })
  }
  else {
    createCartView(currentState.items)
    for (var i = 0; i < currentState.items.itemList.length; i++) {
      var id = currentState.items.itemList[i].id
      document
        .getElementById("" + id)
        .addEventListener("click", removeFromCart(id))
    }
  }
}

const createCartView = itemdata => {
  console.log("inside createCartView method..")

  console.log(itemdata)

  var itemTemplate = document.getElementById("itemTemplate").innerHTML
  var compiledItemTemplate = Handlebars.compile(itemTemplate)
  var generatedItemHtml = compiledItemTemplate(itemdata)

  var itemContainer = document.getElementById("ShoppingCart")
  itemContainer.innerHTML = generatedItemHtml
}

const removeFromCart = itemId => {
  console.log("current item id:" + itemId)
  store.dispatch({type: "remove", dataItem: itemId})
  removeItemFromCart(itemId)
}
