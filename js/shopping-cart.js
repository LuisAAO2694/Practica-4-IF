import { getCart, removeFromCart, updateQuantity, getTotal } from "./cart.js";
import { updateCartCount } from "./ui.js";

function renderCart() 
{
    const cart = getCart();

    const container = document.getElementById("cartItems");
    const summary = document.getElementById("cartSummary");

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<h4>Tu carrito está vacío 🛒</h4>";
        summary.innerHTML = "";
        
        updateCartCount();
        return;
    }

    cart.forEach(item => {
        container.innerHTML += `
    <div class="media mb-3 p-3 border rounded">
        <img src="${item.image}" width="80" class="mr-3">
        <div class="media-body">
        <h5>${item.title}</h5>
        <p>$${item.price}</p>

        <input type="number" min="1" value="${item.quantity}"
            onchange="updateQuantity(${item.id}, this.value)">

        <button class="btn btn-danger btn-sm"
            onclick="removeFromCart(${item.id})">
            Eliminar
        </button>
        </div>
    </div>
    `;
    });

    summary.innerHTML = `
    <div class="card p-3">
    <h4>Total: $${getTotal()}</h4>
    </div>
  `;

  updateCartCount();
}

renderCart();

//Hacer las funciones globales
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;