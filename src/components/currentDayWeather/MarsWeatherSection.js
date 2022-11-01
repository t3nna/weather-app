import React from 'react';
import degreesToDirection from "../../utils/degreesToDirections";
import {useSelector} from "react-redux";
import {selectSol} from "../../utils/selectSol";
import withLocation from "../../hoc/withLocation";

function MarsWeather(props) {

    let sols = useSelector((state) => state.mars.data)
    let weather = selectSol(sols)
    weather= weather[weather.length-1]
    return (
        <>
            {/*<div className="weather__properties">

                <div className="weather__temperature">
                    <p className="fs-300">Average temperature </p>
                    <h1 className="fs-primary-heading">{Number(weather.avTemp).toFixed(2)}</h1>
                </div>
                <div className="weather__icon">
                    <h1 className={'fs-primary-heading'}>SOL {weather.sol}</h1>

                </div>

                <div className="flow | weather__description" style={{"--flow-spacer": .25 + "rem"}}>
                    <p>Wind: {degreesToDirection(weather.windDirectionDegrees)}</p>
                    <p>Wind speed: {weather.windSpeed} kmh</p>
                    <p>Wind direction: {degreesToDirection(weather.windDirectionDegrees)}</p>
                    <p>High: {weather.maxTemp}</p>

                    <p>Low: {weather.minTemp}</p>
                </div>
            </div>
            <div className="weather__location flow" style={{"--flow-spacer": .25 + "rem"}}>
                <h2 className="fs-secondary-heading fw-medium">Mars</h2>
                <p>Season: {weather.season}</p>
                <p>Pressure: {weather.pressure} Pa</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>*/}
            <div className="weather__properties">

                <div className="weather__temperature flow" style={{"--flow-spacer": 0.75 + "rem"}}>
                    <h2 className="fs-secondary-heading">Mars</h2>
                    <h1 className="fs-primary-heading">{Math.round(weather.avTemp)}°</h1>

                    <p>H:{Math.round(weather.maxTemp)}° L:{Math.round(weather.minTemp)}°</p>
                </div>

                <div className="weather__status flow" style={{"--flow-spacer": 0.5 + "rem"}}>
                    <div className="weather__icon">

                        <img src={`/images/icons8-mars-64.png`} alt=""/>
                    </div>
                    <h2 className={'fs-500'}>asteroids</h2>
                </div>


                <div className="flow | weather__description" style={{"--flow-spacer": .25 + "rem"}}>
                    <div className="divider">
                        <hr/>
                    </div>
                    <h3 className={'fs-500 fw-medium'}>Current Details</h3>
                    <p>Season: {weather.season}</p>
                    <p>Pressure: {weather.pressure} Pa</p>
                    <p>Humidity: 77%</p>
                    <div className="divider">
                        <hr/>
                    </div>
                    <h3 className={'fs-500 fw-medium'}>Wind</h3>
                    <p>Wind speed: {weather.windSpeed} kmh</p>
                    <p>Wind direction: {degreesToDirection(weather.windDirectionDegrees)}</p>

                </div>
            </div>


        </>
    );
}

const MarsWeatherSection = withLocation({})(MarsWeather)

export default MarsWeatherSection