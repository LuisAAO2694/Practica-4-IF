const KEY = "adminProducts";

let products = JSON.parse(localStorage.getItem(KEY)) || [];

//Guardar en storage
function save() {
    localStorage.setItem(KEY, JSON.stringify(products));
}

//Render
function render() {
    const container = document.getElementById("productList");
    container.innerHTML = "";

    products.forEach((p, index) => {
        container.innerHTML += `
      <div class="card mb-2 p-2">
        <h5>${p.title}</h5>
        <p>$${p.price}</p>

        <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Eliminar</button>
      </div>
    `;
    });
}

//crear / editar
document.getElementById("productForm").addEventListener("submit", e => {
    e.preventDefault();

    const id = document.getElementById("productId").value;
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;

    const product = { id: Date.now(), title, price, image };

    if (id) {
        products[id] = product;
    } else {
        products.push(product);
    }

    save();
    render();
    e.target.reset();
});

//editar
window.editProduct = function (index) {
    const p = products[index];

    document.getElementById("productId").value = index;
    document.getElementById("title").value = p.title;
    document.getElementById("price").value = p.price;
    document.getElementById("image").value = p.image;
};

//eliminar
window.deleteProduct = function (index) {
    products.splice(index, 1);
    save();
    render();
};

render();