"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FiMapPin,
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
} from "react-icons/fi";

export default function Header() {
  const [country, setCountry] = useState("Loading...");

  useEffect(() => {
    fetch(
      "https://api.ipregistry.co/?key=ira_rvdSzWTajk0lZZ4a8r0jjlMyKNGPQG2BTKvw",
    )
      .then((response) => response.json())
      .then((payload) => {
        const countryName = payload.location.country.name;
        setCountry(countryName || "Unknown");
      })
      .catch(() => setCountry("Unknown"));
  }, []);

  return (
    <header className="w-full bg-[#131921] text-white border-b border-white/10">
      <div className="mx-auto flex w-full flex-wrap items-center gap-2 px-3 py-2 sm:px-4 md:h-[70px] md:flex-nowrap md:gap-3 md:py-0">
        {/* Brand */}
        <div className="order-1 flex min-w-fit items-center gap-3 rounded-md px-2 py-2 hover:outline hover:outline-1 hover:outline-white/40">
          <div className="flex flex-col leading-none">
            <img
              src="/images/Amazon-Logo-White-Transparent.png"
              alt="Amazon"
              width={100}
              height={100}
              className="h-auto w-[84px] object-contain sm:w-[100px]"
            />
          </div>
        </div>

        {/* Deliver to */}
        <div className="hidden min-w-fit items-center gap-2 rounded-md px-2 py-2 hover:outline hover:outline-1 hover:outline-white/40 md:flex">
          <FiMapPin className="mt-3 text-lg text-white/90" />
          <div className="leading-tight">
            <p className="text-xs text-white/70">Deliver to</p>
            <p className="text-[15px] font-bold text-white">{country}</p>
          </div>
        </div>

        {/* Search */}
        <div className="order-3 w-full md:order-none md:w-auto md:flex-1">
          <div className="flex h-[38px] overflow-hidden rounded-lg bg-white md:h-[40px]">
            {/* Left selector UI only */}
            <div className="flex min-w-[62px] items-center justify-center gap-1 border-r border-black/10 bg-[#e6e6e6] px-2 text-[#0f1111] sm:min-w-[82px] sm:gap-2 sm:px-4">
              <span className="text-xs font-medium sm:text-sm">All</span>
              <FiChevronDown className="text-sm opacity-70" />
            </div>

            <input
              type="text"
              placeholder="Search Amazon"
              className="h-full min-w-0 flex-1 border-0 px-3 text-sm text-[#0f1111] outline-none placeholder:text-black/55 sm:px-4 sm:text-base"
            />

            <button
              type="button"
              className="flex w-[54px] items-center justify-center bg-[#f3a847] text-[#111] transition hover:bg-[#f0b35e] sm:w-[72px]"
            >
              <FiSearch className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden min-w-fit items-center gap-1 rounded-md px-2 py-2 hover:outline hover:outline-1 hover:outline-white/40 lg:flex">
          {/* <div className="text-2xl">🇺🇸</div> */}
          <span className="text-[15px] font-bold">EN</span>
          <FiChevronDown className="text-sm opacity-80" />
        </div>

        <div className="hidden min-w-fit rounded-md px-2 py-2 leading-tight hover:outline hover:outline-1 hover:outline-white/40 lg:block">
          <p className="text-xs text-white/80">Hello, sign in</p>
          <div className="flex items-center gap-1">
            <p className="text-[15px] font-bold">Account & Lists</p>
            <FiChevronDown className="text-sm opacity-80" />
          </div>
        </div>

        <div className="hidden min-w-fit rounded-md px-2 py-2 leading-tight hover:outline hover:outline-1 hover:outline-white/40 lg:block">
          <p className="text-xs text-white/80">Returns</p>
          <p className="text-[15px] font-bold">& Orders</p>
        </div>

        <div className="order-2 ml-auto flex min-w-fit items-end gap-1 rounded-md px-2 py-2 hover:outline hover:outline-1 hover:outline-white/40 md:order-none md:ml-0">
          <div className="relative">
            {/* <span className="absolute -top-3 right-0 text-[20px] font-bold text-orange-400">
              0
            </span> */}
            <FiShoppingCart className="text-[30px] text-white" />
          </div>
          <span className="mb-1 hidden text-[15px] font-bold sm:inline">
            {" "}
            Cart
          </span>
        </div>
      </div>
    </header>
  );
}
