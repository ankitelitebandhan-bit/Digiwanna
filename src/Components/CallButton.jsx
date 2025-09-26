// src/Components/CallButton.jsx
import React from "react";
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  return (
    <a
      href="tel:+919748124534"
      style={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        backgroundColor: "#25d366",
        color: "white",
        padding: "12px",
        borderRadius: "50%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <FaPhone size={30} />
    </a>
  );
};

export default CallButton;
