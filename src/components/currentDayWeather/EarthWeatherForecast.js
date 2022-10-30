import React from 'react';
import {useSelector} from "react-redux";
import {formattedDate} from "../../utils/formattedDate";
import forecastData from "../../utils/forecastData";

function EarthWeatherForecast(props) {
    let weather = useSelector(state => state.earth.forecastWeather)
    // if (weather){
    //     console.log(forecastData(weather))
    // }

    weather = forecastData(weather)
    return (
        <div className={'weather__forecast'}>
            <ul role={"list"} className={'weather__forecast-list'}>
                {
                    weather.map((item, index) =>(
                        <li key={index} className={'weather__forecast-day weather__forecast-active'}>
                            <p>{new Date(item.day).getDate()} {new Date(item.day).toLocaleString('default', {month: 'short'})}</p>
                            <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt=""/>
                            <p>H:{item.highTemp}° L:{item.lowTemp}°</p>
                            <p>{item.status}</p>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default EarthWeatherForecast;