import React from 'react';
import {useSelector} from "react-redux";
import withLocation from "../../hoc/withLocation";

function EarthWeather(props) {
    const weather = useSelector(state => state.earth.currentWeather)
    return (
        <>
            <div className="weather__properties">
                <div className="weather__temperature">
                    <h1 className="fs-primary-heading">{weather.main.temp}</h1>
                </div>
                <div className="weather__icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em"
                         width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"></path>
                    </svg>

                </div>

                <div className="flow | weather__description" style={{"--flow-spacer": .25 + "rem"}}>
                    <p>Lorem ipsum dolor sit.dasdfasdf sadfsad hgfhgsfd </p>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </>
    );
}

const EarthWeatherSection = withLocation({})(EarthWeather)

export default EarthWeatherSection;