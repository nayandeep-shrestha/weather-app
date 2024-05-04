import './App.css'
import Sun from './assets/sun.png'
import Cloudy from './assets/cloudy.png'
import Rainy from './assets/raining.png'
import { LuWind } from "react-icons/lu";
import { IoUmbrella } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";

function App() {

  return (
    <>
      <div className='mx-auto w-[95%] sm:w-[80%] lg:w-[70%]  my-[120px] h-screen p-3'>
        <div className="flex justify-center items-center flex-col p-2">
          <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-medium w-fit h-fit mb-2">
            <span className='text-primary text-right'>Right now in
              <span className='text-black'> Kathmandu, </span>
              its mostly sunny.
            </span>
          </h1>
          <div className="flex gap-5 pl-14 py-4">
            <div className="icon flex-1 flex justify-center items-center p-3 ">
              <img src={Sun} alt="Sun" className="h-auto max-w-full" />
            </div>
            <div className="temp flex-1 flex justify-center flex-col gap-0 items-center ">
              <span className='text-[140px] font-extralight flex items-start mt-[-40px]'>39 <span className="text-primary font-extralight">°</span></span>
              <span className='text-[24px] text-primary '> 31° / 40°</span>
            </div>
            <div className="index flex-1 flex flex-col justify-center items-start px-3">
              <div className="wind flex-1 flex justify-center items-center gap-2 text-primary font-medium text-[32px]">
                <LuWind color='AAAAAA' size={20} />
                14
                <span className="text-AAAAAA text-[16px] font-light"> km/h</span></div>
              <div className="rain flex-1 flex justify-center items-center gap-2 text-primary font-medium text-[32px]">
                <IoUmbrella color='AAAAAA' size={20} />
                79
                <span className="text-AAAAAA text-[16px] font-light"> %</span></div>
              <div className="humid flex-1 flex justify-center items-center gap-2 text-primary font-medium text-[32px]">
                <FaDroplet color='AAAAAA' size={20} />
                88
                <span className="text-AAAAAA text-[16px] font-light">%</span></div>
            </div>
          </div>
          <div className="border-0 rounded-xl bg-[#6e6c6c]/[.05] py-4 mt-5 flex justify-around w-[80%]">
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
        </div>
      </div>
    </>
  )
}

export default App
