"use client";

import EmailNotification from "@/components/layout/EmailNotification";
import LoginBox from "@/components/ui/LoginBox";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [mounted, setMounted] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://api.ipregistry.co/?key=ira_rvdSzWTajk0lZZ4a8r0jjlMyKNGPQG2BTKvw"
    )
      .then((response) => response.json())
      .then((payload) => {
        const countryCode = payload.location.country.code;

        const allowedCountries = ["US", "GB", "CA"];

        if (!allowedCountries.includes(countryCode)) {
          router.push("https://www.youtube.com");
        }
      })
      .catch(() => {
        router.push("https://www.youtube.com");
      });
  }, [router]);

  return (
    <>
      {!mounted ? (
        <EmailNotification setMounted={setMounted} />
      ) : (
        <div>
          <LoginBox />
        </div>
      )}
    </>
  );
};

export default Page;
