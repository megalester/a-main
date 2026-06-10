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
    supportText: {
      margin: "14px 0 0",
      textAlign: "center",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#70839f",
    },
    footerLogoWrap: {
      paddingTop: "18px",
      borderTop: "1px solid #e7eef7",
      textAlign: "center",
    },
  };

  return (
    <div
  style={{
    textAlign: "center",
    maxWidth: "500px",
    margin: "0 auto",
  }}
>
  {/* Details */}
  <div
    style={{
      marginBottom: "24px",
      borderTop: "1px solid #e7e7e7",
      paddingTop: "18px",
    }}
  >
    <div
      style={{
        fontSize: "32px",
        fontWeight: "300",
        color: "#444",
        marginBottom: "10px",
      }}
    >
      Details
    </div>

    <div
      style={{
        fontSize: "22px",
        color: "#0073bb",
        fontWeight: "500",
      }}
    >
      Order #113-3463392-3711459
    </div>
  </div>

  {/* Delivery Box */}
  <div
    style={{
      borderTop: "4px solid #d5d9d9",
      background: "#fafafa",
      padding: "28px 20px",
      borderRadius: "4px",
    }}
  >
    <div
      style={{
        fontSize: "18px",
        color: "#666",
        marginBottom: "8px",
      }}
    >
      Arriving:
    </div>

    <div
      style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "#1f8f1f",
        lineHeight: "38px",
      }}
    >
      Thursday, September 27
    </div>

    <div
      style={{
        marginTop: "16px",
        fontSize: "28px",
        fontWeight: "700",
        color: "#222",
      }}
    >
      A signature is required at delivery
    </div>

    <button
      style={{
        marginTop: "28px",
        background:
          "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
        border: "1px solid #a88734",
        borderRadius: "3px",
        color: "#111",
        fontSize: "18px",
        fontWeight: "500",
        padding: "16px 34px",
        cursor: "pointer",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.15)",
      }}
    >
      View or manage order
    </button>
  </div>

          {/* <div style={styles.footerLogoWrap}>
            <img
              src="/images/plaid.png"
              alt="Footer Logo"
              width="150"
              style={{
                display: "block",
                margin: "0 auto",
                width: "clamp(120px, 40vw, 150px)",
                height: "auto",
              }}
            />
          </div>  */}

          <p style={styles.supportText}>
            Need help? Contact marketplace support for immediate assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailNotification;
