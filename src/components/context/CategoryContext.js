// "use client"
// // CategoryContext.js
// import React, { createContext, useContext, useState } from "react";
// import { categories } from "../../app/Data";

// const CategoryContext = createContext();

// export const useCategoryContext = () => {
//   const context = useContext(CategoryContext);
//   if (!context) {
//     throw new Error("useCategoryContext must be used within a CategoryProvider");
//   }
//   return context;
// };


// export const CategoryProvider = ({ children }) => {

//     // State variables
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
  
//     // Function to handle category selection
//     const handleCategorySelect = (categoryId) => {
//       setSelectedCategory(categoryId);
//     };

    
//     // Function to handle search input change
//     const handleSearchInputChange = (event) => {
//       setSearchQuery(event.target.value);
//     };
  
//     // Filter products based on selected category and search query
//     const filteredProducts = selectedCategory
//       ? categories
//           .find((cat) => cat.id === selectedCategory)
//           .data.filter((product) =>
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//       : categories.flatMap((cat) =>
//           cat.data.filter((product) =>
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//         );

        
  
//   const contextValues = {
//     selectedCategory,
//     searchQuery,
//     handleCategorySelect, 
//     handleSearchInputChange,
//     filteredProducts
//   };
//   return (
//     <CategoryContext.Provider value={contextValues}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };

// CategoryContext.js
// src/components/context/CategoryContext.js
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  // State variables
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productDetail, setProductDetail] = useState(null);
  const [productDetailLoading, setProductDetailLoading] = useState(false);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
      setError(null);
    } catch (error) {
      setError(error.message || "An error occurred while fetching products.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categorie');
      setCategories(response.data);
    } catch (error) {
      setError(error.message || "An error occurred while fetching categories.");
    }
  
  };

  // Fetch specific category by ID
  const fetchCategoryById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/categorie/${id}`);
      setCategoryData(response.data);
      setError(null);
    } catch (error) {
      setError(error.message || "An error occurred while fetching the specific category.");
    }  finally {
      setLoading(false);
    }
  };

  // Fetch product detail by ID
  const fetchProductDetail = async (id) => {
    setProductDetailLoading(true);
    try {
      const response = await axios.get(`/api/products/${id}`);
      setProductDetail(response.data);
      setError(null);
    } catch (error) {
      setError(error.message || "An error occurred while fetching product details.");
    } finally {
      setProductDetailLoading(false);
    }
  };
  
  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on selected category and search query
  const filteredProducts = selectedCategory
    ? products
        .filter((product) => product.items.some((item) => item.categoryId === selectedCategory))
        .flatMap((product) => product.items)
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : products
        .flatMap((product) => product.items)
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // Fetch products, categories, and specific category data when the component mounts
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCategoryById(); // Fetch specific category data
  }, []);

  const contextValues = {
    selectedCategory,
    searchQuery,
    handleCategorySelect,
    handleSearchInputChange,
    filteredProducts,
    loading,
    error,
    categories,
    products,
    productDetail,
    productDetailLoading,
    fetchProductDetail,
    categoryData, 
    fetchCategoryById
  };

  return (
    <CategoryContext.Provider value={contextValues}>
      {children}
    </CategoryContext.Provider>
  );
};

// Export the context itself
export const useCategoryContext = () => useContext(CategoryContext);
