/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { ForecastData } from "../services/OpenMeteo";
import WeatherIcon from "./WeatherIcon.component";

const FutureForecast = (props) => {
    const [forecastDetail, setForecastDetail] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await ForecastData(props.location.lat, props.location.long)
                setForecastDetail(result)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await ForecastData(props.location.lat, props.location.long)
                // console.log(result)
                setForecastDetail(result)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [props.location])


    return (
        <>
            <div className="border-0 rounded-xl bg-[#6e6c6c]/[.05] py-4 mt-5  justify-around w-[80%] hidden md:flex">
                {forecastDetail && forecastDetail.map((daily, index) => (
                    daily.day === "today" ? <></> :
                        <div key={index} className="flex flex-col justify-content items-center">
                            <WeatherIcon code={daily.weather_code.weatherCode} />
                            <div className='text-[24px] text-primary'> {daily.temperature_2m_min}° / {daily.temperature_2m_max}°</div>
                            <span className='text-[18px] text-primary font-semibold '> {daily.day === 'tomorrow' ? 'TOM' : daily.day} </span>
                        </div>
                ))
                }
            </div>
            <div className='max-md:flex flex-col hidden border-0 rounded-xl bg-[#6e6c6c]/[.05] mt-6 py-6 px-4 text-[18px] text-primary w-full sm:mt-10 sm:w-[90%] sm:text-[26px] sm:px-10'>
                <div className="flex w-full items-center gap-3 mb-8 font-normal">
                    <MdOutlineDateRange />
                    4-day forecast
                </div>
                {forecastDetail && forecastDetail.map((daily, index) => (
                    daily.day === "today" ? <></> :
                        <div key={index} className="flex w-full items-start justify-center font-medium gap-3 mb-4 sm:gap-6 ">
                            <WeatherIcon code={daily.weather_code.weatherCode} size='w-[32px] h-[32px]' />
                            <span className='flex-[50%]'>
                                {daily.day === 'tomorrow' ? 'TOM' : daily.day} {daily.weather_code.weather}
                            </span>
                            <div className='flex-[25%] text-right text-primary text-[20px]'> {daily.temperature_2m_min}° / {daily.temperature_2m_max}°</div>
                        </div>
                ))}
            </div>
        </>
    )
}

export default FutureForecast