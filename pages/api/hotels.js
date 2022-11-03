import axios from "axios";

export async function getHotels() {
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: {
          destinationId: '169003',
          pageNumber: '1',
          pageSize: '5',
          checkIn: '2022-10-10',
          checkOut: '2022-10-20',
          adults1: '1',
          sortOrder: 'PRICE',
          locale: 'en_US',
          currency: 'CAD'
        },
        headers: {
          'X-RapidAPI-Key': '4ba8c429cemsh612821b2a2fc49bp198ce4jsnd971463aaa13',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };

        const res = await axios.request(options)
       console.log(res.data.data.body.searchResults.results)
      return res
    };




export default async function handler(req, res) {

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/list',
  params: {
    destinationId: req.query.city,
    pageNumber: '1',
    pageSize: '5',
    checkIn: req.query.formattedCheckIn,
    checkOut: req.query.formattedCheckOut,
    adults1: req.query.guests,
    sortOrder: 'PRICE',
    locale: 'en_US',
    currency: 'CAD'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_PUBLIC_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
	res.status(200).json(response.data);
}).catch(function (error) {
	console.error(error);
});
}