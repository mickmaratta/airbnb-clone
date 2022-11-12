import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import MapComponent from "../components/MapComponent";
import axios from "axios";

const Search = ({ searchResults, hotels }) => {
  const router = useRouter();
  const { location, startDate, endDate, guests, days } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs text-gray-500">
            300+ Stays | {range} | for {guests} guests
          </p>
          <h1 className="text-3xl font-semibold mb-6 mt-2">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {hotels.map(
              (hotel) => (
                <InfoCard
                  key={hotel.id}
                  hotel={hotel}
                  days={days}
                />
              )
            )}
          </div>
        </section>

        <section className="xl:inline-flex xl:min-w-[600px]">
          <MapComponent searchResults={searchResults} hotels={hotels} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { location, startDate, endDate, guests } = context.query;
  const formattedCheckIn = format(new Date(startDate), "yyyy-MM-dd");
  const formattedCheckOut = format(new Date(endDate), "yyyy-MM-dd");

  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  
  const cityOptions = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/v2/search",
    params: { query: location.toLowerCase(), locale: 'en_US', langid: '1033', siteid: '300000001' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_PUBLIC_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    },
  };
  const cityRes = await axios.request(cityOptions);
  const cityId = cityRes.data.suggestions[0].entities[0].destinationId


const hotelOptions = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/list',
  params: {
    destinationId: cityId,
    pageNumber: '1',
    pageSize: '7',
    checkIn: formattedCheckIn,
    checkOut: formattedCheckOut,
    adults1: guests,
    sortOrder: 'PRICE',
    locale: 'en_US',
    currency: 'CAD'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_PUBLIC_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};

const hotelRes = await axios.request(hotelOptions);
const hotels = await hotelRes.data.data.body.searchResults.results


  return {
    props: {
      searchResults,
      hotels
    },
  };
}

