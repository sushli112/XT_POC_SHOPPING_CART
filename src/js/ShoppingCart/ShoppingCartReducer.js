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
        itemListTemp.splice(i, 1)
        currentState.items.itemList = itemListTemp
        currentState.items.finalValue =
            currentState.items.finalValue - itemListTemp[i].price
        currentState.items.totalValue =
            currentState.items.totalValue - itemListTemp[i].price
      }
    }

    return currentState
  case "update":
    currentState.itemList = [...currentState.itemList, action.dataItem]
    return currentState
  default:
    return currentState
  }
}
