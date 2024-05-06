import { useState } from "react"
import getLatLong from "../services/GetoApi"

const Search = ({ updateLocation }) => {
    const [location, setLocation] = useState("")
    const [latLong, setLatLong] = useState(null)
    
    // const handleEnter = (e) => {
    //     if (e.key === "Enter") {
    //         if (location === "") {
    //             return 0;
    //         }
    //         else {
    //             const getData = async () => {
    //                 const data = await getLatLong(location)
    //                 console.log(data)
    //             }
    //             getData()
    //             // setLatLong(data)
    //             if (latLong) {
    //                 updateLocation(
    //                     {
    //                         lat: latLong[0].lat,
    //                         long: latLong[0].long,
    //                         address: latLong[0].address,
    //                     }
    //                 )
    //             }
    //         }
    //     }
    // }
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
    return (
        <>
            <div className="w-full mt-10 flex justify-center items-center">
                <form action="" onSubmit={handleSubmit} className="h-[50px] bg-white px-10 rounded-3xl w-[25%]">
                <input type="text" id="search-bar" placeholder="Location"
                    className="border-2 border-black"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    // onKeyDown={handleEnter}
                />
                <button type="submit">asdfads</button>
                </form>
            </div>
        </>
    )
}

export default Search