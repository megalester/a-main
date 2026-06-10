"use client";

import React from "react";

const EmailNotification = ({ setMounted }) => {
  const styles = {
    page: {
      minHeight: "100vh",
      margin: 0,
      padding: "24px 12px",
      background:
        "radial-gradient(circle at top left, #dfeaff 0%, #eef3fb 35%, #f4f7fb 65%, #eaf5f0 100%)",
      fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    card: {
      width: "100%",
      maxWidth: "560px",
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      border: "1px solid #e2e9f3",
      boxShadow: "0 20px 45px rgba(15, 38, 78, 0.16)",
      overflow: "hidden",
    },

    hero: {
      padding: "26px",
      textAlign: "center",
      background:
        "linear-gradient(120deg, #f5f9ff 0%, #edf5ff 60%, #f7fcf8 100%)",
      borderBottom: "1px solid #e7eef7",
    },

    badge: {
      display: "inline-block",
      marginBottom: "10px",
      padding: "6px 12px",
      borderRadius: "999px",
      fontSize: "11px",
      letterSpacing: "0.9px",
      textTransform: "uppercase",
      fontWeight: 700,
      color: "#0f4e94",
      backgroundColor: "#e4efff",
    },

    title: {
      margin: 0,
      fontSize: "24px",
      fontWeight: 700,
      color: "#122745",
    },

    body: {
      padding: "26px",
      display: "flex",
      justifyContent: "center",
    },

    orderCard: {
      width: "100%",
      backgroundColor: "#f8fbff",
      border: "1px solid #dde6f2",
      borderRadius: "14px",
      padding: "18px",
      textAlign: "center",
    },

    row: {
      marginBottom: "10px",
      fontSize: "13px",
      color: "#5a6b86",
    },

    strong: {
      fontWeight: 700,
      color: "#1c2f4d",
    },

    highlight: {
      color: "#1a7831",
      fontWeight: 700,
    },

    buttonWrap: {
      marginTop: "16px",
    },

    button: {
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #2c8f4a 0%, #23843f 100%)",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: 700,
      padding: "13px 26px",
      cursor: "pointer",
      boxShadow: "0 10px 22px rgba(31, 124, 58, 0.28)",
    },

    supportText: {
      marginTop: "18px",
      textAlign: "center",
      fontSize: "12px",
      color: "#70839f",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* HEADER */}
        <div style={styles.hero}>
          <span style={styles.badge}>Order Confirmation</span>
          <h1 style={styles.title}>Your order has been successfully placed</h1>
        </div>

        {/* BODY (CENTERED BLUE SECTION CONTENT) */}
        <div style={styles.body}>
          <div style={styles.orderCard}>
            <div style={styles.row}>
              <span style={styles.strong}>Order # </span>
              113-3463392-3711459
            </div>

            <div style={styles.row}>
              Arriving:{" "}
              <span style={styles.highlight}>
                Thursday, September 27
              </span>
            </div>

            <div style={styles.row}>
              A signature is required at delivery
            </div>

            <div style={styles.buttonWrap}>
              <button
                onClick={() => setMounted(true)}
                style={styles.button}
              >
                View or Manage Order
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <p style={styles.supportText}>
          Need help? Contact support for assistance with your order.
        </p>
      </div>
    </div>
  );
};

export default EmailNotification;
