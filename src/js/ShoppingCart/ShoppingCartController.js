import {getItemsForCart, removeItemFromCart} from "./ShoppingCartService"
import {store} from "../store"
const Handlebars = require("handlebars")

export const loadShoppingCart = () => {
  const currentState = store.getState()
  if (currentState.items.itemList.length === 0) {
    getItemsForCart().then(itemdata => {
      createCartView(itemdata)
      for (var i = 0; i < itemdata.itemList.length; i++) {
        var id = itemdata.itemList[i].id
        document.getElementById("remove" + id).addEventListener("click", function() {
          removeFromCart(id)
        })
        document.getElementById("edit" + id).addEventListener("click", function() {
          updateCart(id)
        })
      }
      store.dispatch({type: "loadcart", dataItem: {items: itemdata}})
    })
  }
  else {
    createCartView(currentState.items)
    for (var i = 0; i < currentState.items.itemList.length; i++) {
      var id = currentState.items.itemList[i].id
      document.getElementById("remove" + id).addEventListener("click", function() {
        removeFromCart(event)
      })
      document.getElementById("edit" + id).addEventListener("click", function() {
        updateCart(id)
      })
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

const removeFromCart = event => {
  console.log("removeFromCart :current item id:" + event.target.id.substr(6))
  store.dispatch({type: "remove", dataItem: parseInt(event.target.id.substr(6))})
  removeItemFromCart(parseInt(event.target.id.substr(6)))
}

const updateCart = (event) => {
  console.log("removeFromCart :current item id:" + event.target.id.substr(4))
}

