"use client"
// CategoryContext.js
import React, { createContext, useContext, useState } from "react";
import { categories } from "../../app/Data";

const CategoryContext = createContext();

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext must be used within a CategoryProvider");
  }
  return context;
};


export const CategoryProvider = ({ children }) => {

    // State variables
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
  
    // Function to handle category selection
    const handleCategorySelect = (categoryId) => {
      setSelectedCategory(categoryId);
    };

    
    // Function to handle search input change
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    // Filter products based on selected category and search query
    const filteredProducts = selectedCategory
      ? categories
          .find((cat) => cat.id === selectedCategory)
          .data.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      : categories.flatMap((cat) =>
          cat.data.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );

        
  
  const contextValues = {
    selectedCategory,
    searchQuery,
    handleCategorySelect, 
    handleSearchInputChange,
    filteredProducts
  };
  return (
    <CategoryContext.Provider value={contextValues}>
      {children}
    </CategoryContext.Provider>
  );
};
