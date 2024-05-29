"use client";
import React, { useState, useEffect } from "react";

const LoadingPage = ({ children }) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Hide loading page after 8 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 200000);

    // Clean up function
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="loading-body"
        style={{
          display: showLoading ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          position: "fixed",
          zIndex: "999999",
        }}
      >
        {/* <div className='text-center'>

        <p className='loading uppercase'>welcome</p>
        <h1 className='loading'> M G S S</h1>
      </div> */}

      <div className="flex flex-column gap-4">

        <div className="loader">
          <div style={{ "--i": 1 }}>W</div>
          <div style={{ "--i": 1 }}>e</div>
          <div style={{ "--i": 1 }}>l</div>
          <div style={{ "--i": 1 }}>l</div>
          <div style={{ "--i": 1 }}>c</div>
          <div style={{ "--i": 1 }}>o</div>
          <div style={{ "--i": 1 }}>m</div>
        </div>

        <div className="loader">
          <div style={{ "--i": 1 }}>T</div>
          <div style={{ "--i": 1 }}>o</div>
          
        </div>

        <div className="loader">
          <div style={{ "--i": 1 }}>M</div>
          <div style={{ "--i": 1 }}>G</div>
          <div style={{ "--i": 1 }}>S</div>
          <div style={{ "--i": 1 }}>S</div>
          
        </div>
        <div>

          {/* <p className=" loading uppercase">welcome</p>
          <h1 className=" loading"> M G S S</h1> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default LoadingPage;
