// Product Data (sample)
const products = [
    { id: 1, name: "T-shirt", category: "clothing", price: 20 },
    { id: 2, name: "Laptop", category: "electronics", price: 800 },
    { id: 3, name: "Book", category: "books", price: 10 },
    { id: 4, name: "Headphones", category: "electronics", price: 150 },
    { id: 5, name: "Jacket", category: "clothing", price: 60 }
  ];
  
  const categorySelect = document.getElementById("category");
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");
  const filterBtn = document.getElementById("filterBtn");
  const productList = document.getElementById("productList");
  
  // Function to display filtered products
  function displayProducts(products) {
    productList.innerHTML = ''; // Clear previous products
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerText = `${product.name} - $${product.price}`;
      productList.appendChild(productDiv);
    });
  }
  
  // Filter Logic
  function filterProducts() {
    const category = categorySelect.value;
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
  
    const filteredProducts = products.filter(product => {
      const categoryMatch = category === "all" || product.category === category;
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;
      return categoryMatch && priceMatch;
    });
  
    displayProducts(filteredProducts);
  }
  
  filterBtn.addEventListener('click', filterProducts);
  

  displayProducts(products);
  