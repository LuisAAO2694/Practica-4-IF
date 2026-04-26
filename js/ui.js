import { addToCart } from "./cart.js";

export function renderProducts(products) {
    const container = document.getElementById("mainList");
    container.innerHTML = "";

    products.forEach(product => {
        const card = `
    <div class="col-12 col-md-4 col-lg-3 mb-4">
    <br>
        <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" style="height:200px; object-fit:contain;">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$${product.price}</p>
        </div>
        <div class="card-footer text-center">
            <button class="btn btn-dark w-100 add-btn" data-id="${product.id}">
            Agregar
            </button>
        </div>
        </div>
    </div>
    `;
        container.innerHTML += card;
    });

    //Eventos de botones
    document.querySelectorAll(".add-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            addToCart(products[index]);
        });
    });
}