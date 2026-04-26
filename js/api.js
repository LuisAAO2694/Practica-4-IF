const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() 
{
  const response = await fetch(API_URL);
  return await response.json();
}

//Esto era para usar lo de mi practica 1, pero no tenia tantos productos
// export async function getProducts() {
//   return [
//     {
//       id: 1,
//       title: "Cadillac XT4 2025",
//       price: 1034100,
//       image: "assets/img/XT4-2025.png"
//     },
//     {
//       id: 2,
//       title: "Cadillac XT5 2025",
//       price: 1127100,
//       image: "assets/img/XT5-2025.png"
//     },
//     {
//       id: 3,
//       title: "Cadillac OPTIQ 2025",
//       price: 1209900,
//       image: "assets/img/OPTIQ-2025.png"
//     },
//     {
//       id: 4,
//       title: "Cadillac LYRIQ 2026",
//       price: 1611000,
//       image: "assets/img/LYRIQ-2026.png"
//     },
//     {
//       id: 5,
//       title: "Cadillac LYRIQ-V 2026",
//       price: 2019000,
//       image: "assets/img/LYRIQV-2026.png"
//     },
//     {
//       id: 6,
//       title: "Cadillac ESCALADE 2026",
//       price: 2940400,
//       image: "assets/img/ESCALADE-2026.png"
//     },
//     {
//       id: 7,
//       title: "Cadillac ESCALADE IQ 2026",
//       price: 3361400,
//       image: "assets/img/ESCALADEIQ-2026.png"
//     },
//     {
//       id: 8,
//       title: "Cadillac ESCALADE IQL 2026",
//       price: 3431900,
//       image: "assets/img/ESCALADEIQL-2026.png"
//     }
//   ];
// }