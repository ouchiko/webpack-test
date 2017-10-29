require("!style-loader!css-loader!../css/app.css");
import Product from './app/Product';

let myProduct = new Product(43, "My Product");

console.dir("Product is named:" + myProduct.productid + " with " + myProduct.productname);

myProduct.uppername();

console.dir("Product is named: " + myProduct.productname);
