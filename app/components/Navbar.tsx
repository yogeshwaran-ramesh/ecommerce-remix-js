import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        zIndex: 1,
        width: "100%",
        height: 80,
        padding: 10,
        backgroundColor: "#EEEEEE",
        display: "flex",
        boxShadow: "5px 5px 24px 15px rgba(0, 0, 0, 0.04)",
        border: "2px solid black",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#EEEEEE",
        }}
      >
        <span style={{ margin: "0 10px" }}>Next Js</span>
        <div>
          <span style={{ margin: "0 10px" }}>User</span>
          <span style={{ margin: "0 10px" }}>Cart</span>
          <span style={{ margin: "0 10px" }}>Wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
