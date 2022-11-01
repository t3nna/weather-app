import React from 'react';
import {useSelector} from "react-redux";
import withLocation from "../../hoc/withLocation";
import degreesToDirection from "../../utils/degreesToDirections";
import EarthWeatherForecast from "./EarthWeatherForecast";

function EarthWeather(props) {
    const weather = useSelector(state => state.earth.currentWeather)
    return (
        <div className={'earth-weather'}>
            <div className="weather__properties">

                <div className="weather__temperature flow" style={{"--flow-spacer": 0.75 + "rem"}}>
                    <h2 className="fs-secondary-heading">{weather.name}, {weather.sys.country}</h2>
                    <h1 className="fs-primary-heading">{Math.round(weather.main.temp)}°</h1>

                    <p>H:{Math.round(weather.main.temp_max)}° L:{Math.round(weather.main.temp_min)}°</p>
                </div>

                <div className="weather__status flow" style={{"--flow-spacer": 0.5 + "rem"}}>
                    <div className="weather__icon">

                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                    </div>
                    <h2 className={'fs-500'}>{weather.weather[0].main}</h2>
                </div>


                <div className="flow | weather__description" style={{"--flow-spacer": .25 + "rem"}}>
                    <div className="divider">
                        <hr/>
                    </div>
                    <h3 className={'fs-500 fw-medium'}>Current Details</h3>
                    <p>Pressure: {weather.main.pressure} hpa</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Feels Like: {Math.round(weather.main.feels_like)}°</p>
                    <p>Visibility: {weather.visibility} m</p>
                    <div className="divider">
                        <hr/>
                    </div>
                    <h3 className={'fs-500 fw-medium'}>Wind</h3>
                    <p>Wind direction: {degreesToDirection(weather.wind.deg)}</p>
                    <p>Wind speed: {weather.wind.speed} m/s</p>

                </div>
            </div>
            <div className="weather__location flow" style={{"--flow-spacer": .25 + "rem"}}>
                <p>openweathermap.org</p>
            </div>

        </div>
    );
}

const EarthWeatherSection = withLocation({})(EarthWeather)

export default EarthWeatherSection;