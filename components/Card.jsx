import Image from "next/image";
import React from "react";

const Card = ({ img, location, country }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out hover:shadow-sm">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500 text-sm">{country}</h3>
      </div>
    </div>
  );
};

export default Card;
