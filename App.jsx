import axios from 'axios'; 
import { useState } from 'react';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const API_KEY = "c3fc782d5efa6d8a27224197386ff1ea";

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
      
      axios.get(url)
        .then((response) => {
          setData(response.data);
          setError("");
        })
        .catch((error) => {
          console.error("There was an error fetching the weather data:", error);
          setError("Invalid location or failed to fetch data");
          setData({});
        });
      setLocation("");
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300'>
      <Header />
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-lg px-4'>
          <div className='text-center mb-8'>
            <input
              type='text'
              className='py-3 px-6 w-full text-lg rounded-full border border-gray-300 text-gray-700
               placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white
                shadow-md transition-shadow duration-300'
              placeholder='Enter location'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyDown={searchLocation}
            />
          </div>
          <Weather weatherData={data} error={error} />
        </div>
      </div> 
      <Footer />
    </div>
  );
}

export default App;
