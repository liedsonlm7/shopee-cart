// use cases for the cart

// add item 
async function addItem(userCart, item) {
    userCart.push(item)
}

// calculate total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`R$ ${result}`)
}

// delete item from cart
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index != -1) {
        userCart.splice(index, 1)
    }
}

// remove item - decrease an item
async function removeItem(userCart, index) {

}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}