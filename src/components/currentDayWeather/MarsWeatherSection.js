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
            <div className="weather__properties">

                <div className="weather__temperature">
                    <p className="fs-300">Average temperature </p>
                    <h1 className="fs-primary-heading">{Number(weather.avTemp).toFixed(2)}</h1>
                </div>
                <div className="weather__icon">
                    {/*<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"*/}
                    {/*     height="1em"*/}
                    {/*     width="1em" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path*/}
                    {/*        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"></path>*/}
                    {/*</svg>*/}
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
            </div>

        </>
    );
}

const MarsWeatherSection = withLocation({})(MarsWeather)

export default MarsWeatherSection