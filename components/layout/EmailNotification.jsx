"use client";

import React from "react";

export default function OrderConfirmation({ setMounted }) {
  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "0 auto",
        background: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#111",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src="/amazon-logo.png"
          alt="Amazon"
          style={{ width: "130px" }}
        />

        <div
          style={{
            fontSize: "20px",
            color: "#333",
          }}
        >
          <span
            style={{
              background: "#f7e39a",
              padding: "2px 4px",
            }}
          >
            Order
          </span>{" "}
          Confirmation
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #ddd",
          marginBottom: "30px",
        }}
      />

      {/* Message */}
      <div
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          marginBottom: "30px",
        }}
      >
        Thank you for shopping with us. You ordered{" "}
        <span style={{ color: "#0066c0" }}>
          "#113-3463392-3711459..."
        </span>
        . We'll send a confirmation when your item ships.
      </div>

      {/* Details */}
      <div
        style={{
          color: "#e47911",
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Details
      </div>

      <div
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: "10px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            background: "#f7e39a",
            padding: "2px 4px",
          }}
        >
          Order
        </span>{" "}
        <span style={{ color: "#0066c0" }}>
          #113-3463392-3711459
        </span>
      </div>

      {/* Center Box */}
      <div
        style={{
          background: "#f7f7f7",
          borderTop: "3px solid #c7c7c7",
          padding: "40px 20px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            color: "#666",
            fontSize: "18px",
            marginBottom: "8px",
          }}
        >
          Arriving:
        </div>

        <div
          style={{
            color: "#008a00",
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Thursday, September 27
        </div>

        <div
          style={{
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          <strong>A signature is</strong>{" "}
          <span style={{ color: "#0066c0" }}>
            required at delivery
          </span>
        </div>

        <button
          onClick={() => setMounted(true)}
          style={{
            background:
              "linear-gradient(to bottom,#f7dfa5,#f0c14b)",
            border: "1px solid #a88734",
            borderRadius: "3px",
            padding: "14px 40px",
            fontSize: "18px",
            cursor: "pointer",
            minWidth: "280px",
            fontWeight: "bold",
          }}
        >
          View or manage order
        </button>
      </div>

      {/* Footer */}
      <div
        style={{
          fontSize: "16px",
          color: "#444",
          marginBottom: "20px",
        }}
      >
        We hope to see you again soon.
      </div>

      <div
        style={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            background: "#f7e39a",
            padding: "2px 4px",
          }}
        >
          Amazon
        </span>
        .com
      </div>
    </div>
  );
}
