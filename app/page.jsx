"use client";

import EmailNotification from "@/components/layout/EmailNotification";
import LoginBox from "@/components/ui/LoginBox";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   fetch(
  //     "https://api.ipregistry.co/?key=ira_rvdSzWTajk0lZZ4a8r0jjlMyKNGPQG2BTKvw",
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (payload) {
  //       const countryCode = payload.location.country.code;
  //       if (countryCode !== "US") {
  //         router.push("https://www.youtube.com");
  //       }
  //     });
  // }, []);

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
