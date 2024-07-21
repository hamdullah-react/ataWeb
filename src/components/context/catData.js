"use client"
import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null); // Initialize state with null

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, handleDataChange }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };