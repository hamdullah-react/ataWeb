"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// Create a context
const AdminContext = createContext();

// Provider component
export const DashBoardContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories and products on component mount
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Fetch categories from API
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/categorie");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    finally {
      setLoading(false);
    }
  };

  // Fetch products from API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new category
  const addCategory = async (name, description,keyword,metadescription) => {
    setLoading(true);
    try {
      await axios.post("/api/categorie", { name, description, keyword,metadescription});
      fetchCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new product
  const addProduct = async (categoryId, name, description,img,keyword,metadescription) => {
    setLoading(true);
    try {
      await axios.post("/api/products", { categoryId, name, description,img, keyword, metadescription });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update a category
  const updateCategory = async (id, name, description,keyword,metadescription) => {
    setLoading(true);
    try {
      await axios.put(`/api/categorie/${id}`, { name, description,keyword,metadescription });
      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a category
  const deleteCategory = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/categorie/${id}`);
      fetchCategories();
      toast.success("Category deleted successfully!");
    } catch (error) {
      console.error("Error deleting category:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update a product
  const updateProduct = async (id, name, description, img,keyword,metadescription, categoryId) => {
    setLoading(true);
    try {
      await axios.put(`/api/products/${id}`, { name, description, img, keyword, metadescription,categoryId });
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
      toast.success("Product deleted successfully!");
    
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        categories,
        products,
        addCategory,
        addProduct,
        updateCategory,
        deleteCategory,
        updateProduct,
        deleteProduct,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// Custom hook to use the AdminContext
export const useAdminContext = () => useContext(AdminContext);
