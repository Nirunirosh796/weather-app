import React from 'react';

const Weather = ({ weatherData, error }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
      {error && <p className="text-red-600 text-lg mb-4">{error}</p>}
      {weatherData.weather ? (
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-gray-500 bg-opacity-80 shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div className='text-center sm:text-left'>
              <p className="text-2xl sm:font-3xl font-semibold text-gray-800">
                {weatherData.name}, {weatherData.sys.country}
              </p>
              <p className="text-lg text-gray-600 capitalize">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div className='mt-4 sm:mt-0'>
              <img
                className="w-20 h-20 sm:w-24 sm:h-24"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </div>
          </div>
          <div className="text-center mb-6">
            <h1 className=" text-5xl sm:text-6xl font-bold text-gray-900">
              {weatherData.main.temp.toFixed()}°C
            </h1>
          </div>
          <div className="flex flex-col gap-4 text-gray-800 text-sm">
            <div className="flex justify-between items-center">
              <p>Feels Like</p>
              <p className="font-semibold">
                {weatherData.main.feels_like.toFixed()}°C
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>Humidity</p>
              <p className="font-semibold">
                {weatherData.main.humidity}%
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>Wind Speed</p>
              <p className="font-semibold">
                {weatherData.wind.speed.toFixed()} KPH
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p>Pressure</p>
              <p className="font-semibold">
                {weatherData.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
