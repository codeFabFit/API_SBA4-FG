
import axios from 'axios';
// const axios = require('axios')


const options = {
  method: 'GET',
  url: 'https://gym-workout1.p.rapidapi.com/exercise',
  headers: {
    'X-RapidAPI-Key': 'c795626373msh097bdf6cec9093fp1c326fjsnca7b69612bc2',
    'X-RapidAPI-Host': 'gym-workout1.p.rapidapi.com'
  }
};

async function fetchData() {

try {
  const response = await axios.request({
     method: options.method,
      url: options.url,
      headers: options.headers
  });
 
	console.log(response.data);
} catch (error) {
	console.error(error);
};
};

document.getElementById("myBtn").addEventListener("click", fetchData);
console.log(data);
