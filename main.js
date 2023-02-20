import { arrayProducts } from "./listaProductos.js";

const productContainer = document.getElementById("productContainer");

arrayProducts.forEach((product) => {
  const box = document.createElement("div");
  box.className = "box";
  box.innerHTML = `<img class = "productImg" src ="${product.img}">
                   <a class ="productTittle" href="./productos.html?id=${product.id}"> ${product.name} </a>
                   <p class = "productPrice"> ${product.price} € </p>`;
  productContainer.appendChild(box);
});
