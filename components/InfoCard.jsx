import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const InfoCard = ({ hotel, days }) => {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transform transition duration-150 ease-out first:border-t rounded-xl">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={hotel.optimizedThumbUrls.srpDesktop}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5 justify-between">
        <div className="flex justify-between">
          <p className="text-xl">{hotel.name}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-sm">Neighbourhood : {hotel.neighbourhood}</h4>
        <div className="border-b w-10 pt-2" />
        <div className="flex justify-between pt-5 items-end">
          <div>
            <p className="flex items-center text-sm">
              <StarIcon className="h-5 text-red-400" />{" "}
              {hotel.guestReviews?.unformattedRating}/10
            </p>
            <p className="text-xs text-gray-500">{hotel.guestReviews?.total} Reviews</p>
          </div>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              {hotel.ratePlan.price.current}
            </p>
            <p className="text-right font-extralight">
              Total: $ {(hotel.ratePlan.price.exactCurrent*days).toFixed()} for {days-1} nights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
