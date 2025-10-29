// Default product list (only shows if localStorage is empty)
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
  }
];

// Function to render products on the page
function loadProducts(productList) {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = "";

  productList.forEach(product => {
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
}

// Load default or saved products
const savedProducts = JSON.parse(localStorage.getItem("cheProducts")) || [];
if (savedProducts.length > 0) {
  loadProducts(savedProducts);
} else {
  loadProducts(products);
}
