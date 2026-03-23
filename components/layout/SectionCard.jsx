import Image from "next/image";
import React from "react";

const SectionCard = ({
  bgColor,
  image,
  title,
  subTitle,
  details,
  btnText,
  reverse,
}) => {
  const dir = reverse ? "lg:flex-row-reverse" : "lg:flex-row";
  return (
    <section
      className={`flex w-full flex-col items-center gap-8 p-6 sm:p-8 lg:gap-12 lg:p-16 ${dir}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full lg:w-1/2">
        <img
          src={`/images/${image}`}
          alt="Info"
          width={545}
          height={310}
          className="object-contain rounded-2xl w-full"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <p className="text-lg font-light">{subTitle}</p>
        <h1 className="pb-3 text-3xl font-extrabold text-sec sm:text-4xl lg:text-[42px]">
          {title}
        </h1>
        <p>{details}</p>
        <div className="mt-6 w-full sm:w-[190px]">
          <button className="cursor-pointer w-full py-[10px] bg-primary rounded-lg font-bold text-white hover:!bg-[#054e7b]">
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
