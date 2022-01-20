import React from "react";
import Navbar from "./Navbar";

const LayoutWrapper = ({ children }: any) => {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#AAD8D3" }}>
      <Navbar />
      <div
        style={{
          padding: "0 50px",
          backgroundColor: "#AAD8D3",
          height: "100vh",
          margin: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
