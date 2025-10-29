// List of affiliate products
const products = [
  {
    name: "Wireless Bluetooth Headphones",
    description: "Crystal-clear sound, noise cancellation, and 30 hours battery life.",
    image: "https://via.placeholder.com/300x200",
    link: "https://www.amazon.com/example-affiliate-link"
  },
  {
    name: "Smart Fitness Watch",
    description: "Track your steps, heart rate, and notifications easily.",
    image: "https://via.placeholder.com/300x200",
    link: "https://clickbank.com/example-affiliate-link"
  },
  {
    name: "Portable Smoothie Blender",
    description: "Rechargeable blender for shakes and smoothies anywhere.",
    image: "https://via.placeholder.com/300x200",
    link: "https://jumia.co.ke/example-affiliate-link"
  }
];

// Render products on page
const productGrid = document.getElementById("product-grid");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <a href="${product.link}" target="_blank" class="btn">Buy Now</a>
  `;
  productGrid.appendChild(div);
});
