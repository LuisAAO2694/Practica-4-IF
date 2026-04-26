import { getProducts } from "./api.js";
import { renderProducts, updateCartCount } from "./ui.js";

let allProducts = [];
let currentPage = 1;
const productsPerPage = 4;

async function init() 
{
    allProducts = await getProducts();
    renderPage(currentPage);
    updateCartCount();
}

function renderPage(page) 
{
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    const productsToShow = allProducts.slice(start, end);

    renderProducts(productsToShow);
    renderPagination();
}

function renderPagination() 
{
    const container = document.getElementById("paginationContainer");
    container.innerHTML = "";

    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    const ul = document.createElement("ul");
    ul.className = "pagination justify-content-center";

    for (let i = 1; i <= totalPages; i++) 
    {
        const li = document.createElement("li");
        li.className = `page-item ${i === currentPage ? "active" : ""}`;

        const a = document.createElement("a");
        a.className = "page-link";
        a.innerText = i;

        a.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage);
        });

        li.appendChild(a);
        ul.appendChild(li);
    }

    container.appendChild(ul);
}

init();