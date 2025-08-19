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
async function removeItem(userCart, item) {
    // 1. find the item index
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    
    // 2. if you cannot find the item index
    if (indexFound == -1) {
        console.log("item não encontrado")
        return
    }

    // 3. item > 1 decrease an item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return
    } 

    // 4. if item = 1 delete item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return
    }
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = R$ ${item.subtotal()}`)
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}