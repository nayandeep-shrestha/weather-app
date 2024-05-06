import { useState } from "react"
import getLatLong from "../services/GetoApi"
import { FaSearch } from "react-icons/fa";

const Search = ({ updateLocation }) => {
    const [location, setLocation] = useState("")
    const [latLong, setLatLong] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (location === "") {
            return 0;
        }
        else {
            const getData = async () => {
                // console.log(location)
                const data = await getLatLong(location)
                // console.log(data)
                setLatLong(data)
            }
            getData()
            // console.log(latLong)
            if (latLong) {
                updateLocation(
                    {
                        lat: latLong[0].lat,
                        long: latLong[0].long,
                        address: latLong[0].address,
                    }
                )
            }
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); 
          handleSubmit(e); 
        }
      };
    return (
        <>
            <div className="w-full mt-10 flex justify-center items-center">
                <form action="" onSubmit={handleSubmit} className=" bg-white p-2 rounded-3xl w-[60%] sm:w-[40%] md:w-[35%] lg:w-[25%] flex">
                <input type="text" id="search-bar" placeholder="Location"
                    className="flex-[80%] text-center font-medium focus:outline-none bg-transparent"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button type="submit" className="flex-[20%] border-l border-slate-400 flex justify-center items-center"><FaSearch color={"blue"}/></button>
                </form>
            </div>
        </>
    )
}

export default Search