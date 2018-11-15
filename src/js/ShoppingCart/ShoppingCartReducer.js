export const shoppingCartReducer = (state = {}, action) => {
  const currentState = Object.assign({}, state)
  switch (action.type) {
  case "loadCart":
    currentState.items = [...currentState.items, action.items]
    return currentState
  case "remove":
    var itemListTemp = currentState.items.itemList
    for (let i = 0; i < itemListTemp.length; i += 1) {
      if (itemListTemp[i].id === action.itemId) {
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
    currentState.itemList = [...currentState.itemList, action.data]
    return currentState
  default:
    return Object.assign({}, ...state)
  }
}
