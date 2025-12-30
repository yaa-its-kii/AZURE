const products = [
  // Electronics
  { name: "MacBook Pro", price: 125000, img: "mac.jpg" },
  { name: "Asus V16 Gaming Laptop", price: 85000, img: "v16.webp" },
  { name: "iPhone 15", price: 78000, img: "i16.jpeg" },
  { name: "Samsung M55 Android Smartphone", price: 32000, img: "m55.jpeg" },
  { name: "Samsung LED", price: 65000, img: "Samsung LED.jpeg" },
  { name: "Dell Optiplex PC", price: 16000, img: "Dell Optiplex PC.jpeg" },

  // Accessories
  { name: "BOAT Wireless Headphones", price: 4500, img: "boat.jpeg" },
  { name: "JBL Bluetooth Speaker", price: 3500, img: "jbl.jpeg" },
  { name: "Titan Smart Watch", price: 9000, img: "titan.jpeg" },
  { name: "Calimate Power Bank", price: 2000, img: "calimate.jpeg" },

  // Fashion
  { name: "Upioiwer Men’s Jacket", price: 3200, img: "Upioiwer.jpeg" },
  { name: "Sabyasachi Women’s Handbag", price: 4800, img: "Sabyasachi.jpeg" },
  { name: "Bruton Running Shoes", price: 5500, img: "Bruton.jpeg" },
  { name: "Kerala Sarees", price: 14000, img: "Kerala Sarees.JPEG" },
  { name: "Frame Travelbag", price: 5000, img: "Frame Travelbag.jpeg" },

  // Home & Lifestyle
  { name: "Back Mesh Office Chair", price: 7500, img: "Back Mesh.jpeg" },
  { name: "Kent Coffee Maker", price: 6200, img: "Kent.jpeg" },
  { name: "Fly Table Lamp", price: 1800, img: "fly.jpeg" },

  // Gadgets
  { name: "Ausek Drone Camera", price: 42000, img: "Ausek.JPEG" },
  { name: "Canon DSLR Camera", price: 65000, img: "Canon.jpeg" }
];

let cart = 0;
const productBox = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${p.img}">
    <div class="card-content">
      <h3>${p.name}</h3>
      <p>₹${p.price.toLocaleString()}</p>
      <button onclick="addToCart()">Add to Cart</button>
    </div>
  `;
  productBox.appendChild(div);
});

function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
}
