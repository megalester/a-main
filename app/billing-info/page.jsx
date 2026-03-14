"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CardPayment from "@/components/ui/CardPayment";
import AddressForm from "@/components/ui/AddressForm";

const BillingPage = () => {
  const [step, setStep] = useState("address");
  const router = useRouter();

  useEffect(() => {
    if (step === "card") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [step]);

  const handleAddressSubmit = () => {
    setStep("card");
  };

  const handleCardSubmit = () => {
    router.push("/upload-id");
  };

  const handleCardCancel = () => {
    setStep("address");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {step === "address" && (
        <div className="flex-center">
          <AddressForm onSubmit={handleAddressSubmit} />
        </div>
      )}

      {step === "card" && (
        <CardPayment onSubmit={handleCardSubmit} onClose={handleCardCancel} />
      )}

      <Footer />
    </main>
  );
};

export default BillingPage;
