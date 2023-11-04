
// import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://gym-workout1.p.rapidapi.com/exercise',
  headers: {
    'X-RapidAPI-Key': 'c795626373msh097bdf6cec9093fp1c326fjsnca7b69612bc2',
    'X-RapidAPI-Host': 'gym-workout1.p.rapidapi.com'
  }
};
async function response()
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

addEventListener("click", button) 
