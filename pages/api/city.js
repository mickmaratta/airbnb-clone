import axios from "axios";

export async function getCity(city) {
    const options = {
        method: "GET",
        url: "https://hotels4.p.rapidapi.com/locations/v2/search",
        params: { query: city, locale: 'en_US', langid: '1033', siteid: '300000001' },
        headers: {
            'X-RapidAPI-Key': '4ba8c429cemsh612821b2a2fc49bp198ce4jsnd971463aaa13',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        },
      };

        const res = await axios.request(options)
       console.log(res.data.suggestions[0].entities[0].destinationId)
      return res.data.suggestions[0].entities[0].destinationId
    };


    
export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://hotels4.p.rapidapi.com/locations/v2/search",
    params: { query: req.query.searchCity, locale: 'en_US', langid: '1033', siteid: '300000001' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_PUBLIC_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    },
  };
  axios.request(options).then(function (response) {
	res.status(200).json(response.data);
}).catch(function (error) {
	console.error(error);
});
}