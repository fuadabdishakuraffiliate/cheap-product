// List of your advertised products
const products = [
  {
    name: "Wireless Bluetooth Earbuds",
    description: "High-quality sound, 24h battery, waterproof — perfect for workouts and travel.",
    image: "https://m.media-amazon.com/images/I/71l0bJvFfEL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B08N5WRWNW/?tag=yourtag-20"
  },
  {
    name: "Portable Mini Blender",
    description: "Make smoothies anywhere! Rechargeable and easy to clean.",
    image: "https://m.media-amazon.com/images/I/61bJuf4xFPL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B07FZ8S74R/?tag=yourtag-20"
  },
  {
    name: "Smart Fitness Watch",
    description: "Tracks heart rate, steps, sleep — with 7-day battery life.",
    image: "https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_SX679_.jpg",
    link: "https://www.amazon.com/dp/B09NQH4R4T/?tag=yourtag-20"
  }
];

// Render products dynamically
const container = document.getElementById("product-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div class="product-info">
      <h2>${p.name}</h2>
      <p>${p.description}</p>
    </div>
    <a href="${p.link}" target="_blank" rel="noopener">Buy Now</a>
  `;
  container.appendChild(card);
});