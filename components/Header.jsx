import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import logo from '../assets/images/linkedin_banner_image_1.png'

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [noOfDays, setNoOfDays] = useState(1);
  const router = useRouter();

  const calaculateDays = (start, end) => {
    let t1 = start.getTime();
    let t2 = end.getTime();
    return Math.floor((t2-t1)/(24*3600*1000));
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setNoOfDays(calaculateDays(ranges.selection.startDate, ranges.selection.endDate))
  };


  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        days: noOfDays,
        guests: guests
      }
    })
    setSearchInput('');
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-0 md:px-10">
      {/* Left */}
      <div onClick={() => router.push("/")} className="relative flex items-center h-20 cursor-pointer my-auto">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 my-5 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search..."}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#e47676] text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer" />
        <div className="flex border-2 rounded-full p-2">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5 md:mt-0">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#e47676"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <div className="flex items-center space-x-2">
              <UsersIcon className="h-5" />
              <MinusCircleIcon
                onClick={() => guests > 1 && setGuests(guests - 1)}
                color="#e47676"
                className="h-5 cursor-pointer"
              />
              <span>{guests}</span>
              <PlusCircleIcon
                onClick={() => setGuests(guests + 1)}
                color="#e47676"
                className="h-5 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex pb-2">
            <button onClick={() => setSearchInput('')} className="flex-grow text-gray-500 cursor-pointer">Cancel</button>
            <button onClick={handleSearch} className="flex-grow text-[#e47676]">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
