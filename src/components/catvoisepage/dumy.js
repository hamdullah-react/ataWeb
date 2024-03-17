"use client"

import React, { useState } from 'react';

const Catvoisepage1 = () => {
  // Define categories array
  const categories = [
    {
      id: 1,
      name: 'Men',
      data: [
        { id: 1, name: 'Men Product 1', price: 100 },
        { id: 2, name: 'Men Product 2', price: 200 },
        // Add more products for men as needed
      ]
    },
    {
      id: 2,
      name: 'Women',
      data: [
        { id: 1, name: 'Women Product 1', price: 150 },
        { id: 2, name: 'Women Product 2', price: 250 },
        // Add more products for women as needed
      ]
    },
    {
      id: 3,
      name: 'Children',
      data: [
        { id: 1, name: 'Children Product 1', price: 50 },
        { id: 2, name: 'Children Product 2', price: 100 },
        // Add more products for children as needed
      ]
    }
  ];

  // State variables
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on selected category and search query
  const filteredProducts = selectedCategory
    ? categories.find(cat => cat.id === selectedCategory).data.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : categories.flatMap(cat => cat.data.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <>
      {/* Category Menu */}
      <div className="categories-menu">
        <ul>
          <li key="all" onClick={() => handleCategorySelect(null)}>
            All
          </li>
          {categories.map((category) => (
            <li key={category.id} onClick={() => handleCategorySelect(category.id)}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* Display Filtered Products */}
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            {/* Display product details */}
            <p>{product.name} - ${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catvoisepage1;
