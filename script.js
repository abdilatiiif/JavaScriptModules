//importing Modules

// this is named modules ----------------------------------------------------------------

// import "./shoppingCart.js";
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";

// you can change the name = use ' as '
// addToCart("banana", 23);
// addToCart("tv", 3);
// addToCart("xbox", 13);
// console.log(cart);

// import Everything *
/* import * as shoppingCart from "./shoppingCart.js";



console.log(shoppingCart.totalPrice);
console.log(shoppingCart.qt);

shoppingCart.addToCart("banana", 23); */

// default import
import add, { cart } from "./shoppingCart.js";
console.log("importing Modules");
/* 

add('pizza', 2); 
add('xbox', 12); 
add('charger', 20); 

// live update from shoppingCart - live connection
// console.log(cart); 

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
 */

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//store the results in variable, but it returns a promise, use then method
// const lastPost = getLastPost().then((data) => console.log(data));

// top level await

const lastPost2 = await getLastPost();
// console.log(lastPost2);


// module pattern - closure pattern - 
// scoped to function
/* 
const shoppingCart2 = (function () {
  const cart = [];
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product}s added to cart`);
  };
  const totalPrice = 230;
  const totalQuantity = 20;
    const shippingCost = 10;

    return {
        addToCart,
        totalPrice,
        totalQuantity,
        cart,
    }


})();

shoppingCart2.addToCart('banans', 4);
shoppingCart2.addToCart('ananas', 40);

console.log(shoppingCart2.totalPrice);
console.log(shoppingCart2);

 */

import cloneDeep from '/node_modules/lodash-es/cloneDeep.js'; 




