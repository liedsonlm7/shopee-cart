import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = []
const myWishList = []

const item1 = await createItem("Mousepad gamer", 25.99, 2)
const item2 = await createItem("Mouse RGB", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

// await cartService.deleteItem(myCart, item1.name)
// await cartService.deleteItem(myCart, item2.name)

await cartService.calculateTotal(myCart)
