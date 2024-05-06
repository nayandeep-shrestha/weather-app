import { useEffect, useState } from "react";
import { LuWind } from "react-icons/lu";
import { IoUmbrella } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import Search from "./Search.component";
import FutureForecast from "./FutureForecast.component";
import CurrentWeather from "../services/OpenMeteo";
import WeatherIcon from "./WeatherIcon.component";

const Weather = () => {
  const [weatherData, setWeatherData] = useState('')
  const [locationDetail, setLocationDetail] = useState(
    {
      address: "Kathmandu",
      lat: 27.65,
      long: 85.28,
    }
  );
  const handleStateChange = (newState) => {
    setLocationDetail(newState);
  };
  useEffect(()=>{
    const getData = async () => {
      try{
        const result = await CurrentWeather(locationDetail.lat, locationDetail.long)
        setWeatherData(result)
      }catch(error){
        console.log(error)
      }
    }
    getData()
  },[locationDetail])
  return (
    <>
      <Search location={locationDetail} updateLocation={handleStateChange} />
      <div className='mx-auto w-[99%] p-1 sm:w-[90%] lg:w-[70%]  my-[50px] h-screen sm:p-3  '>
        <div className="flex justify-center items-center flex-col p-2">
          <h1 className="text-[24px] font-medium w-fit h-fit text-center
                          sm:mb-2 sm:text-[27px] md:text-[32px] lg:text-[34px] xl:text-[40px] ">
            <span className='text-primary'>Right now in
              <span className='text-black'> {locationDetail.address}, </span>
              its { weatherData ? weatherData.weatherCondition.weather : ""}.
            </span>
          </h1>
          <div className="flex flex-wrap justify-center md:gap-6 sm:pl-14 sm:py-4">
            <div className="hidden icon justify-center items-center p-3 md:flex-1 md:flex sm:flex-[50%] sm:flex">
              <WeatherIcon code={weatherData ? weatherData.weatherCondition.weatherCode : ""} size={"w-[190px] h-[190px] md:w-[312px]"} />
            </div>
            <div className="temp  flex flex-col gap-0 items-center md:flex-1 sm:flex-[50%]">
              <span className='text-[110px] font-extralight flex items-start md:mt-[-40px] md:text-[140px]'>
                {weatherData.temp}
              </span>
              <span className='text-[21px] text-primary md:text-[24px] flex gap-3'>  
              <WeatherIcon code={weatherData ? weatherData.weatherCondition.weatherCode : ""} size={"w-[32px] h-[32px] "} />{weatherData.minTemp}° / {weatherData.maxTemp}°</span>
            </div>
            <div className="index flex-[100%] flex flex-row flex-wrap justify-center items-start px-3 mt-5 md:flex-1 md:flex-col md:mt-0">
              <div className="wind flex-[50%] flex justify-center items-center gap-2 text-primary font-medium text-[28px] sm:flex-1 sm:text-[32px]">
                <LuWind color='AAAAAA' size={20} />
                {weatherData.windSpeed}
                <span className="text-AAAAAA text-[16px] font-light"> km/h</span></div>
              <div className="rain flex-[50%] flex justify-center items-center gap-2 text-primary font-medium text-[28px] sm:text-[32px] sm:flex-1">
                <IoUmbrella color='AAAAAA' size={20} />
                {weatherData.humidity}
                <span className="text-AAAAAA text-[16px] font-light"> %</span></div>
              <div className="humid flex-[50%]  flex justify-start items-center gap-2 pl-7 mt-3 text-primary font-medium text-[28px] sm:text-[32px] sm:flex-1 sm:justify-center sm:pl-0 sm:mt-0">
                <FaDroplet color='AAAAAA' size={20} />
                {weatherData.precipitation}
                <span className="text-AAAAAA text-[16px] font-light">%</span></div>
            </div>
          </div>
          <FutureForecast location={locationDetail}/>
          {/* <div className="choose mt-10 text-[20px] font-medium text-primary">
            °F | °C
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Weather