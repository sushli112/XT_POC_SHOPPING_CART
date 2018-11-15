export const getItemsForCart = function(event) {
  console.log("inside getItemsForCart method")
  const url = "http://localhost:3000/items"
  const response = fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(`items size from Server:${data.itemList}`)
      return data
    })
    .catch(error => {
      console.log(error)
    })
  return response.then(value => value)
}

export const removeItemFromCart = itemId => {
  getItemsForCart().then(currentItems => {
    var itemList = currentItems.itemList
    console.log("current items present :" + itemList)

    for (let i = 0; i < itemList.length; i += 1) {
      if (itemList[i].id === itemId) {
        currentItems.totalValue = currentItems.totalValue - itemList[i].price
        currentItems.finalValue = currentItems.finalValue - itemList[i].price
        itemList.splice(i, 1)
        currentItems.itemList = itemList
      }
    }
    const url = "http://localhost:3000/items"
    fetch(url, {
      method: "POST",
      body: JSON.stringify(currentItems),
      headers: {
        Accept: "application/json, text/plain,*/*",
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data1 => {
        console.log("Success:", data1)
        console.log("New entry has beed updated")
      })
      .catch(error => console.error("Error:", error))
  })
}
