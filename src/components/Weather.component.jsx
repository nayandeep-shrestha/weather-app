import { LuWind } from "react-icons/lu";
import { IoUmbrella } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import Sun from '../assets/sun.png'
import Cloudy from '../assets/cloudy.png'
import Rainy from '../assets/raining.png'
import Search from "./Search.component";

const Weather = () => {
  return (
    <>
    <Search/>
    <div className='mx-auto w-[99%] p-1 sm:w-[90%] lg:w-[70%]  my-[50px] h-screen sm:p-3  '>
        <div className="flex justify-center items-center flex-col p-2">
          <h1 className="text-[24px] font-medium w-fit h-fit text-center
                          sm:mb-2 sm:text-[27px] md:text-[32px] lg:text-[34px] xl:text-[40px] ">
            <span className='text-primary'>Right now in
              <span className='text-black'> Kathmandu, </span>
              its mostly sunny.
            </span>
          </h1>
          <div className="flex flex-wrap justify-center md:gap-6 sm:pl-14 sm:py-4">
            <div className="hidden icon justify-center items-center p-3 md:flex-1 md:flex sm:flex-[50%] sm:flex">
              <img src={Sun} alt="Sun" className="w-[190px] h-[190px] md:w-[312px]" />
            </div>
            <div className="temp  flex flex-col gap-0 items-center md:flex-1 sm:flex-[50%]">
              <span className='text-[110px] font-extralight flex items-start md:mt-[-40px] md:text-[140px]'>39
                {/* <span className="text-primary font-extralight">°</span> */}
              </span>
              <span className='text-[21px] text-primary md:text-[24px] flex gap-3'>  <img src={Sun} alt="Sun" width='32px' height='32px' className='sm:hidden'/>31° / 40°</span>
            </div>
            <div className="index flex-[100%] flex flex-row flex-wrap justify-center items-start px-3 mt-5 md:flex-1 md:flex-col md:mt-0">
              <div className="wind flex-[50%] flex justify-center items-center gap-2 text-primary font-medium text-[28px] sm:flex-1 sm:text-[32px]">
                <LuWind color='AAAAAA' size={20} />
                14
                <span className="text-AAAAAA text-[16px] font-light"> km/h</span></div>
              <div className="rain flex-[50%] flex justify-center items-center gap-2 text-primary font-medium text-[28px] sm:text-[32px] sm:flex-1">
                <IoUmbrella color='AAAAAA' size={20} />
                79
                <span className="text-AAAAAA text-[16px] font-light"> %</span></div>
              <div className="humid flex-[50%]  flex justify-start items-center gap-2 pl-7 mt-3 text-primary font-medium text-[28px] sm:text-[32px] sm:flex-1 sm:justify-center sm:pl-0 sm:mt-0">
                <FaDroplet color='AAAAAA' size={20} />
                88
                <span className="text-AAAAAA text-[16px] font-light">%</span></div>
            </div>
          </div>
          <div className="border-0 rounded-xl bg-[#6e6c6c]/[.05] py-4 mt-5  justify-around w-[80%] hidden md:flex">
            <div className="flex flex-col justify-content items-center">
              <img src={Cloudy} alt="cloudy" />
              <div className='text-[24px] text-primary '> 31° / 40°</div>
              <span className='text-[18px] text-primary font-semibold '> TOM </span>
            </div>
            <div className="flex flex-col justify-content items-center">
              <img src={Rainy} alt="cloudy" />
              <div className='text-[24px] text-primary '> 31° / 40°</div>
              <span className='text-[18px] text-primary font-semibold '> TOM </span>
            </div>
            <div className="flex flex-col justify-content items-center">
              <img src={Rainy} alt="cloudy" />
              <div className='text-[24px] text-primary '> 31° / 40°</div>
              <span className='text-[18px] text-primary font-semibold '> TOM </span>
            </div>
            <div className="flex flex-col justify-content items-center">
              <img src={Sun} alt="cloudy" width={'32px'} height={"32px"} />
              <div className='text-[24px] text-primary '> 31° / 40°</div>
              <span className='text-[18px] text-primary font-semibold '> TOM </span>
            </div>
          </div>
          <div className='max-md:flex flex-col hidden border-0 rounded-xl bg-[#6e6c6c]/[.05] mt-6 py-6 px-4 text-[18px] text-primary w-full sm:mt-10 sm:w-[90%] sm:text-[26px] sm:px-10'>
            <div className="flex w-full items-center gap-3 mb-8 font-normal">
              <MdOutlineDateRange />
              4-day forecast
            </div>
            <div className="flex w-full items-start justify-center font-medium gap-3 mb-4 sm:gap-6 ">
              <img src={Cloudy} alt="cloudy" width={'32px'} height={"32px"} />
              <span className='flex-[50%]'>
                Tomorrow Cloudy
              </span>
              <div className='flex-[25%] text-right text-primary text-[20px]'> 31° / 40°</div>
            </div>
            <div className="flex w-full items-start justify-center font-medium gap-3 mb-4 sm:gap-6">
              <img src={Rainy} alt="cloudy" width={'32px'} height={"32px"} />
              <span className='flex-[50%]'>
                Friday Rainy
              </span>
              <div className='flex-[25%] text-right text-primary text-[20px]'> 31° / 40°</div>
            </div>
            <div className="flex w-full items-start justify-center font-medium gap-3 mb-4 sm:gap-6">
              <img src={Rainy} alt="cloudy" width={'32px'} height={"32px"} />
              <span className='flex-[50%]'>
                Saturday Rainy
              </span>
              <div className='flex-[25%] text-right text-primary text-[20px]'> 31° / 40°</div>
            </div>
            <div className="flex w-full items-start justify-center font-medium gap-3 mb-4 sm:gap-6">
              <img src={Sun} alt="cloudy" width={'32px'} height={"32px"} />
              <span className='flex-[50%]'>
                Sunday Sunny
              </span>
              <div className='flex-[25%] text-right text-primary text-[20px]'> 31° / 40°</div>
            </div>
          </div>
          {/* <div className="choose mt-10 text-[20px] font-medium text-primary">
            °F | °C
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Weather