import { renderOrderSumary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    })
  })
]).then(()=>{
  renderOrderSumary();
  renderPaymentSummary();
  renderCheckoutHeader();
});

/*
new Promise((resolve) => {
  loadProducts(()=>{
    resolve();
  });

}).then(()=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    })
  })

}).then(()=>{
  renderOrderSumary();
  renderPaymentSummary();
  renderCheckoutHeader();
});

// loadProducts(()=>{
//   renderOrderSumary();
//   renderPaymentSummary();
//   renderCheckoutHeader();
// });
*/
