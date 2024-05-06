/* eslint-disable react/prop-types */
import Sun from '../assets/sun.png'
import CloudySun from '../assets/cloudySun.png'
import Rainy from '../assets/raining.png'
import Cloudy from '../assets/cloudy.png'
import Thunderrain from '../assets/thunderRain.png'
import Thunder from '../assets/thunder.png'
import Snowy from '../assets/snowy.png'
import Sunrain from '../assets/sunrain.png'
import { FaQuestion } from "react-icons/fa6";

const WeatherIcon = (props) => {
    switch (props.code) {
        case 1:
            return <img src={Sun} className={props.size}  />;

        case 2:
            return <img src={CloudySun} className={props.size} />;

        case 3:
            return <img src={Cloudy} className={props.size} />;

        case 4:
            return <img src={Rainy} className={props.size} />;

        case 5:
            return <img src={Thunderrain} className={props.size} />;

        case 6:
            return <img src={Thunder} className={props.size} />;

        case 7:
            return <img src={Sunrain} className={props.size} />;

        case 8:
            return <img src={Snowy} className={props.size} />;
        default:
            return <FaQuestion className={props.size}  />

    }

}

export default WeatherIcon
