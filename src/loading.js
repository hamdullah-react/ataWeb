"use client"
import React, { useState, useEffect } from 'react';

const LoadingPage = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Hide loading page after 8 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    // Clean up function
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{  display: showLoading ? 'flex' : 'none',  justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', position: 'fixed', background: 'black', zIndex: '999999' }}>
      <div>

      <p className='loading'>Wellcom to</p>
      <p className='loading'>Mohammed Ghulam security solutions trading L.L.C</p>
      </div>
    </div>
  );
};

export default LoadingPage;
