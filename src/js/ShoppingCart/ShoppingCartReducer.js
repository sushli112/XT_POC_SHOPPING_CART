export const shoppingCartReducer = (state = {}, action) => {
  const currentState = Object.assign({}, state)
  switch (action.type) {
  case "loadcart":
    currentState.items = action.dataItem.items
    return currentState
  case "remove":
    var itemListTemp = currentState.items.itemList
    for (let i = 0; i < itemListTemp.length; i += 1) {
      if (itemListTemp[i].id === action.dataItem) {
        currentState.items.finalValue =
            currentState.items.finalValue -
            itemListTemp[i].price * itemListTemp[i].qty
        currentState.items.totalValue =
            currentState.items.totalValue -
            itemListTemp[i].price * itemListTemp[i].qty
        itemListTemp.splice(i, 1)
        currentState.items.itemList = itemListTemp
      }
    }

    return currentState

  case "updatecart":
    currentState.items = action.dataItem.items
    return currentState
  default:
    return currentState
  }
}
