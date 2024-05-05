import { useState } from "react"
import getLatLong from "../services/GetoApi"

const Search = () => {
    const [location, setLocation] = useState("")
    const [latLong, setLatLong] = useState(null)
    const handleEnter = (e) => {
        if(e.key === "Enter"){
            if(location === ""){
                return 0;
            }
            else{
                let data
                const getData = async () => {
                    data = await getLatLong(location)
                    // console.log(data)
                }
                getData()
                setLatLong(data)
            }
        }
    }
    return (
        <>
            <div className="w-full mt-10 flex justify-center items-center">
                <input type="text" id="search-bar" placeholder="Location"
                    className="h-[50px] bg-white px-10 rounded-3xl w-[25%]"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onKeyDown={handleEnter}
                />
            </div>
        </>
    )
}

export default Search