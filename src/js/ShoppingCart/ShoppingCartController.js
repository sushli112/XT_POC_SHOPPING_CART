import {
  getItemsForCart,
  removeItemFromCart,
  updateCartWIthNewDetailsService,
} from "./ShoppingCartService"
import {selectedImageView, previewImagesView} from "./ShoppingCartView"
import {store} from "../store"
const Handlebars = require("handlebars")

export const loadShoppingCart = () => {
  const currentState = store.getState()
  if (currentState.items.itemList.length === 0) {
    getItemsForCart().then(itemdata => {
      createCartView(itemdata)
      for (var i = 0; i < itemdata.itemList.length; i++) {
        var id = itemdata.itemList[i].id
        document
          .getElementById("remove" + id)
          .addEventListener("click", function() {
            removeFromCart(event)
          })
        document
          .getElementById("edit" + id)
          .addEventListener("click", function() {
            viewSelectedItem(event)
          })
        document
          .getElementById("image" + id)
          .addEventListener("click", function() {
            previewImages(event)
          })
      }
      store.dispatch({type: "loadcart", dataItem: {items: itemdata}})
    })
  }
  else {
    createCartView(currentState.items)
    for (var i = 0; i < currentState.items.itemList.length; i++) {
      var id = currentState.items.itemList[i].id
      document
        .getElementById("remove" + id)
        .addEventListener("click", function() {
          removeFromCart(event)
        })
      document
        .getElementById("edit" + id)
        .addEventListener("click", function() {
          viewSelectedItem(event)
        })
      document
        .getElementById("image" + id)
        .addEventListener("click", function() {
          previewImages(event)
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
  store.dispatch({
    type: "remove",
    dataItem: parseInt(event.target.id.substr(6)),
  })
  removeItemFromCart(parseInt(event.target.id.substr(6)))
}

const viewSelectedItem = event => {
  console.log("viewSelectedItem :current item id:" + event.target.id.substr(4))
  selectedImageView(parseInt(event.target.id.substr(4)))
}

const previewImages = event => {
  console.log("previewImages :current item id:" + event.target.id.substr(5))
  previewImagesView(parseInt(event.target.id.substr(5)))
}

export const updateCartWIthNewDetails = () => {
  console.log("inside addToCart method")
  var itemId = document.getElementById("selectedItemId").value
  var itemSize = document.getElementById("sizeSelector").value
  var itemQty = document.getElementById("QtySelector").value
  // document.getElementById("myModal").classList.add("fade")
  var currentState = store.getState()
  var items = currentState.items
  var itemListTemp = items.itemList

  for (let i = 0; i < items.itemList.length; i += 1) {
    if (itemListTemp[i].id === parseInt(itemId)) {
      var currentTotalPrice = itemQty * itemListTemp[i].price

      items.totalValue =
        items.totalValue -
        itemListTemp[i].totalPrice +
        itemQty * itemListTemp[i].price

      items.finalValue =
        items.finalValue -
        itemListTemp[i].totalPrice +
        itemQty * itemListTemp[i].price

      itemListTemp[i].totalPrice = currentTotalPrice

      itemListTemp[i].size = itemSize
      itemListTemp[i].qty = itemQty
      items.itemList = itemListTemp
    }
  }

  store.dispatch({type: "updatecart", dataItem: {items: items}})
  updateCartWIthNewDetailsService(items)
}
