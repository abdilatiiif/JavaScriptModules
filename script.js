//importing Modules
// import "./shoppingCart.js";
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";

// you can change the name = use ' as '
// addToCart("banana", 23);
// addToCart("tv", 3);
// addToCart("xbox", 13);
// console.log(cart);

// import Everything *
import * as shoppingCart from "./shoppingCart.js";

console.log("importing Modules");

console.log(shoppingCart.totalPrice);
console.log(shoppingCart.qt);

shoppingCart.addToCart("banana", 23);
