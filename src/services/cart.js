// use cases for the cart

// add item 
async function addItem(userCart, item) {
    userCart.push(item)
}

// calculate total
async function calculateTotal(userCart) {
    console.log("\n🛒 Shopee Cart TOTAL IS: ")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`Total: R$ ${result}`)
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

async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`)
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}