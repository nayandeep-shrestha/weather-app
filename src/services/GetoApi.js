import axios from "axios";

export default function getLatLong(place) {

    return axios.get(`${import.meta.env.VITE_GETO_API}?text=${place}&apiKey=${import.meta.env.VITE_GETO_API_KEY}`)
        .then(
            (response) => {
                let result = [];
                if(response.data){
                    result.push(
                        {
                            lat:response.data.features[0].properties.lat,
                            long:response.data.features[0].properties.lon
                        }
                    )
                    return result;
                }
            }
        )
}
