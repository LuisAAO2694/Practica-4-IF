const CART_KEY = "cart";

//Aqui obtengo los productos de mi carrito 
export function getCart()
{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

//Guardar en el carrito
function saveCart(cart)
{
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

//Agregar producto 
export function addToCart(product) 
{
    let cart = getCart();

    const exist = cart.find(item => item.id === product.id);

    if (exist) 
    {
        exist.quantity++;
    }
    else 
    {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert("Producto agregado!");

    import("./ui.js").then(module => {
        module.updateCartCount();
    });
}

//Eliminar producto del carrito
export function removeFromCart(id) 
{
    let cart = getCart().filter(item => item.id !== id);
    saveCart(cart);

    import("./ui.js").then(module => {
        module.updateCartCount();
    });

    location.reload();
}

//Actualizar cant del producto (carrito)
export function updateQuantity(id, qty) 
{
    let cart = getCart();
    const item = cart.find(i => i.id === id);

    if (item) item.quantity = parseInt(qty);

    saveCart(cart);

    import("./ui.js").then(module => {
        module.updateCartCount();
    });

    location.reload();
}

//Total $$
export function getTotal() 
{
    return getCart().reduce((acc, item) => { return acc + item.price * item.quantity; }, 0);
}

//acuatlizar items carrito
export function getCartCount()
{
    const cart = getCart();
    return cart.reduce((acc, item) => acc + item.quantity, 0);
}