"use client";

import Image from "next/image";
import {
  FiGlobe,
  FiChevronUp,
  FiChevronDown,
  FiDollarSign,
  FiMapPin,
} from "react-icons/fi";

const footerColumns = [
  {
    title: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "› See More Make Money with Us",
    ],
  },
  {
    title: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Help",
    ],
  },
];

const footerProducts = [
  { title: "Amazon Music", desc: "Stream millions of songs" },
  {
    title: "Amazon Ads",
    desc: "Reach customers wherever they spend their time",
  },
  { title: "6pm", desc: "Score deals on fashion brands" },
  { title: "AbeBooks", desc: "Books, art & collectibles" },
  { title: "ACX", desc: "Audiobook Publishing Made Easy" },
  { title: "Sell on Amazon", desc: "Start a Selling Account" },
  { title: "Veego", desc: "Shipping Software Inventory Management" },

  { title: "Amazon Business", desc: "Everything For Your Business" },
  { title: "AmazonGlobal", desc: "Ship Orders Internationally" },
  { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
  { title: "Audible", desc: "Listen to Books & Original Audio Performances" },
  { title: "Box Office Mojo", desc: "Find Movie Box Office Data" },
  { title: "Goodreads", desc: "Book reviews & recommendations" },
  { title: "IMDb", desc: "Movies, TV & Celebrities" },

  { title: "IMDbPro", desc: "Get Info Entertainment Professionals Need" },
  {
    title: "Kindle Direct Publishing",
    desc: "Indie Digital & Print Publishing Made Easy",
  },
  { title: "Prime Video Direct", desc: "Video Distribution Made Easy" },
  { title: "Shopbop", desc: "Designer Fashion Brands" },
  { title: "Woot!", desc: "Deals and Shenanigans" },
  { title: "Zappos", desc: "Shoes & Clothing" },
  { title: "Ring", desc: "Smart Home Security Systems" },

  { title: "eero WiFi", desc: "Stream 4K Video in Every Room" },
  { title: "Blink", desc: "Smart Security for Every Home" },
  { title: "Neighbors App", desc: "Real-Time Crime & Safety Alerts" },
  {
    title: "Amazon Subscription Boxes",
    desc: "Top subscription boxes – right to your door",
  },
  { title: "PillPack", desc: "Pharmacy Simplified" },
];

export default function EcommerceFooter() {
  return (
    <footer className="w-full bg-[#232f3e] text-white">
      {/* Top bar */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex h-[54px] w-full items-center justify-center bg-[#37475a] text-[15px] font-semibold text-white transition hover:bg-[#41556d]"
      >
        Back to top
      </button>

      {/* Main links */}
      <div className="mx-auto max-w-[1500px] px-6 py-14 lg:px-12">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 ">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-base font-bold leading-none tracking-tight ">
                {column.title}
              </h3>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm leading-snug text-white/90 transition hover:text-white hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom area */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 px-6 py-12 lg:flex-row lg:gap-10">
        {/* Brand placeholder */}
        <div className="flex min-w-[180px] items-center justify-center">
          <div className="flex flex-col items-center leading-none">
            <img
              src="/images/Amazon-Logo-White-Transparent.png"
              alt="Amazon"
              width={80}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <button
            type="button"
            className="flex p-1 items-center gap-3 rounded-md border border-white/30 px-5 text-sm text-white/90 transition hover:bg-white/5"
          >
            <FiGlobe className="text-[16px]" />
            <span>English</span>
            <div className="ml-auto flex flex-col leading-none text-[10px] opacity-70">
              <FiChevronUp />
              <FiChevronDown className="-mt-1" />
            </div>
          </button>

          <button
            type="button"
            className="flex p-1 items-center gap-3 rounded-md border border-white/30 px-5 text-sm text-white/90 transition hover:bg-white/5"
          >
            <FiDollarSign className="text-[16px]" />
            <span>USD - U.S. Dollar</span>
          </button>

          <button
            type="button"
            className="flex p-1 items-center gap-3 rounded-md border border-white/30 px-5 text-sm text-white/90 transition hover:bg-white/5"
          >
            <FiMapPin className="text-[16px]" />
            <span>United States</span>
          </button>
        </div>
      </div>

      <div className="bg-[#131a22] text-gray-300 text-sm">
        <div className="max-w-[1000px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-10 gap-y-6">
            {footerProducts.map((item, i) => (
              <div key={i} className="space-y-1 cursor-pointer hover:underline">
                <p className="text-white text-sm font-normal">{item.title}</p>
                <p className="text-xs text-gray-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* bottom legal */}
          <div className="mt-10 flex flex-col items-center gap-2 text-xs text-gray-400">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="hover:underline cursor-pointer">
                Conditions of Use
              </span>
              <span className="hover:underline cursor-pointer">
                Privacy Notice
              </span>
              <span className="hover:underline cursor-pointer">
                Consumer Health Data Privacy Disclosure
              </span>
              <span className="hover:underline cursor-pointer">
                Your Ads Privacy Choices
              </span>
            </div>

            <p className="text-gray-500 mt-2">
              © 1996–2026, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
