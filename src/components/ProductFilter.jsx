import React, { useState } from 'react';

// Sample product data
const productData = [
  { id: 1, name: 'T-shirt', category: 'clothing', price: 20 },
  { id: 2, name: 'Laptop', category: 'electronics', price: 800 },
  { id: 3, name: 'Book', category: 'books', price: 10 },
  { id: 4, name: 'Headphones', category: 'electronics', price: 150 },
  { id: 5, name: 'Jacket', category: 'clothing', price: 60 }
];

const ProductFilter = () => {
  // State variables for category, price, and filtered products
  const [category, setCategory] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productData);

  // Function to handle filtering
  const filterProducts = () => {
    const filtered = productData.filter(product => {
      const categoryMatch = category === 'all' || product.category === category;
      const priceMatch =
        (minPrice === '' || product.price >= Number(minPrice)) &&
        (maxPrice === '' || product.price <= Number(maxPrice));

      return categoryMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div>
        <label htmlFor="category">Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
        </select>
      </div>

      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price"
        />
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
        />
      </div>

      <button onClick={filterProducts}>Apply Filters</button>

      <div>
        <h3>Filtered Products:</h3>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            {product.name} - ${product.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
