import Image from "next/image";
import React from "react";

const InfoCard = ({ subTitle, title, image, details }) => {
  return (
    <div className="col-flex h-auto w-full max-w-[400px] justify-between rounded-lg border border-gray-300 p-4 md:h-[500px]">
      <div>
        <p className="text-sm font-light pb-2">{subTitle}</p>
        <img
          src={`/images/${image}`}
          alt="Info"
          width={370}
          height={210}
          className="h-auto w-full object-contain rounded-md"
        />
        <h1 className="text-[24px] font-extrabold text-sec pt-2 pb-3">
          {title}
        </h1>
        <p>{details}</p>
      </div>

      <div className="mt-6 w-full sm:w-[190px]">
        <button className="cursor-pointer w-full py-[10px] bg-primary rounded-lg font-bold text-white hover:!bg-[#054e7b]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
