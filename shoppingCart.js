// Exporting Modules

console.log("Exporting Modules");

// blocking code
/* console.log('start fetching users'); 

await fetch('https://jsonplaceholder.typicode.com/users');

console.log('finished fetching users');
 */
const shippingCost = 10;
export const cart = [];

// add 'export' infront declarations

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s added to cart`);
};

const totalPrice = 230;
const totalQuantity = 20;

export { totalPrice, totalQuantity as qt }; //
// you can change the name = use ' as '

// default export = stand alone code

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s added to cart`);
};



