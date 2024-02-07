// Exporting Modules

console.log("Exporting Modules");

const shippingCost = 10;
const cart = [];

// add 'export' infront declarations

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s added to cart`);
};

const totalPrice = 230;
const totalQuantity = 20;

export { totalPrice, totalQuantity as qt }; //
// you can change the name = use ' as '
