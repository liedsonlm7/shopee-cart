import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";

const myCart = []
const myWishList = []

const item1 = await createItem("Mousepad gamer", 25.99, 2)
const item2 = await createItem("Mouse RGB", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myWishList, item2)

console.log("🛒 Shopee Cart TOTAL IS: ")
await cartService.calculateTotal(myCart)
