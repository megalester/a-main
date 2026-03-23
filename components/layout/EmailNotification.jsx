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
      maxWidth: "620px",
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      border: "1px solid #e2e9f3",
      boxShadow: "0 20px 45px rgba(15, 38, 78, 0.16)",
      overflow: "hidden",
    },
    hero: {
      padding: "clamp(18px, 4vw, 28px) clamp(16px, 4vw, 26px) clamp(18px, 3.5vw, 22px)",
      textAlign: "center",
      background:
        "linear-gradient(120deg, #f5f9ff 0%, #edf5ff 60%, #f7fcf8 100%)",
      borderBottom: "1px solid #e7eef7",
    },
    logo: {
      display: "block",
      margin: "0 auto 16px",
      width: "clamp(120px, 40vw, 150px)",
      maxWidth: "100%",
      height: "auto",
    },
    badge: {
      display: "inline-block",
      marginBottom: "12px",
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
      fontSize: "clamp(22px, 5.4vw, 26px)",
      lineHeight: "clamp(30px, 6.6vw, 34px)",
      fontWeight: 700,
      color: "#122745",
    },
    subtitle: {
      margin: "12px auto 0",
      maxWidth: "460px",
      fontSize: "clamp(13px, 3.8vw, 14px)",
      lineHeight: "clamp(20px, 5.8vw, 22px)",
      color: "#4e617d",
    },
    body: {
      padding: "clamp(20px, 4vw, 28px) clamp(16px, 4vw, 26px) clamp(22px, 4vw, 30px)",
    },
    transactionCard: {
      border: "1px solid #dde6f2",
      borderRadius: "12px",
      padding: "clamp(14px, 3.2vw, 16px) clamp(14px, 3.2vw, 18px)",
      backgroundColor: "#f8fbff",
      marginBottom: "20px",
    },
    transactionRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "8px",
      fontSize: "13px",
      color: "#5a6b86",
    },
    transactionValue: {
      fontSize: "13px",
      fontWeight: 700,
      color: "#1c2f4d",
    },
    status: {
      display: "inline-block",
      marginTop: "2px",
      padding: "4px 10px",
      borderRadius: "999px",
      backgroundColor: "#e3f7e7",
      color: "#1a7831",
      fontWeight: 700,
      fontSize: "12px",
    },
    description: {
      margin: "0 0 20px",
      textAlign: "center",
      fontSize: "clamp(14px, 4vw, 15px)",
      lineHeight: "clamp(22px, 6vw, 24px)",
      color: "#314766",
    },
    warning: {
      margin: "0 auto 24px",
      textAlign: "center",
      fontSize: "clamp(13px, 3.8vw, 14px)",
      lineHeight: "clamp(20px, 5.8vw, 22px)",
      color: "#4e617d",
      maxWidth: "480px",
    },
    inlineAction: {
      border: "none",
      background: "none",
      padding: 0,
      margin: 0,
      color: "#0d5ec9",
      textDecoration: "underline",
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: "14px",
    },
    ctaWrap: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "24px",
    },
    cta: {
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #2c8f4a 0%, #23843f 100%)",
      color: "#ffffff",
      fontSize: "clamp(14px, 4vw, 15px)",
      lineHeight: "20px",
      fontWeight: 700,
      padding: "13px clamp(20px, 6vw, 30px)",
      cursor: "pointer",
      fontFamily: "inherit",
      boxShadow: "0 10px 22px rgba(31, 124, 58, 0.28)",
    },
    footerLogoWrap: {
      paddingTop: "18px",
      borderTop: "1px solid #e7eef7",
      textAlign: "center",
    },
    supportText: {
      margin: "14px 0 0",
      textAlign: "center",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#70839f",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.hero}>
          <img
            src="/images/later-img-1.png"
            alt="Logo"
            width="150"
            style={styles.logo}
          />
          <span style={styles.badge}>Payment Security Notice</span>
          <h1 style={styles.title}>
            Our marketplace system securely charges your card on file.
          </h1>
          <p style={styles.subtitle}>
            Thank you for your purchase. This message confirms that your order
            has been successfully placed.
          </p>
        </div>

        <div style={styles.body}>
          <div style={styles.transactionCard}>
            <div style={styles.transactionRow}>
              <span>Transaction ID</span>
              <span style={styles.transactionValue}>6GB80550RC2496746</span>
            </div>
            <div style={{ ...styles.transactionRow, marginBottom: 10 }}>
              <span>Total</span>
              <span style={styles.transactionValue}>$ 172.00</span>
            </div>
            <div style={{ ...styles.transactionRow, marginBottom: 0 }}>
              <span>Status</span>
              <span style={styles.status}>Completed</span>
            </div>
          </div>

          <p style={{ ...styles.description, marginLeft: 10, marginRight: 10 }}>
            For more details or to check the status of your order, please visit
            your account online.
          </p>

          <div style={styles.ctaWrap}>
            <button onClick={() => setMounted(true)} style={styles.cta}>
              View Order
            </button>
          </div>

          <div style={styles.footerLogoWrap}>
            <img
              src="/images/plaid.png"
              alt="Footer Logo"
              width="150"
              style={styles.logo}
            />
          </div>

          <p style={styles.supportText}>
            Need help? Contact marketplace support for immediate assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailNotification;
