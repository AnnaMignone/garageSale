import { arrayProducts } from "./listaProductos.js";

let valores = new URLSearchParams(window.location.search);
let valorObtenido = Object.fromEntries(valores.entries());

let prod;
arrayProducts.forEach((element) => {
  if (element.id == valorObtenido.id) prod = element;
});

const product = document.getElementById("product");

const boxer = document.createElement("div");
boxer.className = "boxer";
boxer.innerHTML = `<h2 class="tittleInd">${prod.name}</h2>
                  <div class="line"></div>
                  <div class=imgContainer>
                    <img src="${prod.img}" class="pic" alt="" />
                    <img src="${prod.img2}" class="pic" alt="" />
                    <img src="${prod.img3}" class="pic" alt="" />
                  </div>
                  <div class="productTextBox">
                    <p class="productText">
                    <b>Precio: </b> ${prod.price} € <br />
                    <b>Talle: </b> ${prod.size} <br />
                    <b>Color: </b> ${prod.color} <br />
                    <b>Marca: </b> ${prod.brand} <br />
                    <b>Condición: </b> ${prod.condition}
                    </p>
                  </div>

                  <div class="boton">
                  <a href="https://wa.link/cegk0m" target="_blank">Contactanos por WhatsApp</a>
                </div>`;
product.appendChild(boxer);
