"use client";

import React, { useState } from "react";

const EmailNotification = ({ userLoggedIn = false }) => {
  const [loading, setLoading] = useState(null);

  const handleViewOrder = async () => {
    setLoading("order");

    // Simulate request delay
    setTimeout(() => {
      if (userLoggedIn) {
        console.log("Redirect to order page");
      } else {
        console.log("Redirect to login first");
      }
      setLoading(null);
    }, 1200);
  };

  const handleLogin = async () => {
    setLoading("login");

    setTimeout(() => {
      console.log("Redirect to login page");
      setLoading(null);
    }, 1200);
  };

  const styles = {
    ctaWrap: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "24px",
    },
    primaryBtn: {
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #2c8f4a 0%, #23843f 100%)",
      color: "#fff",
      fontSize: "14px",
      fontWeight: 700,
      padding: "13px 26px",
      cursor: "pointer",
      boxShadow: "0 10px 22px rgba(31, 124, 58, 0.28)",
      opacity: loading ? 0.7 : 1,
    },
    secondaryBtn: {
      borderRadius: "10px",
      background: "#fff",
      color: "#2c8f4a",
      fontSize: "14px",
      fontWeight: 700,
      padding: "13px 26px",
      cursor: "pointer",
      border: "2px solid #2c8f4a",
      opacity: loading ? 0.7 : 1,
    },
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      
      <h2>Order Confirmation</h2>
      <p>Your order has been successfully placed.</p>

      {/* CTA Buttons */}
      <div style={styles.ctaWrap}>

        {/* View Order */}
        <button
          onClick={handleViewOrder}
          style={styles.primaryBtn}
          disabled={loading !== null}
        >
          {loading === "order" ? "Loading..." : "View Order"}
        </button>

        {/* Sign In */}
        <button
          onClick={handleLogin}
          style={styles.secondaryBtn}
          disabled={loading !== null}
        >
          {loading === "login" ? "Loading..." : "Sign in to Account"}
        </button>

      </div>

    </div>
  );
};

export default EmailNotification;
