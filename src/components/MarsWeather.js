import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherMars} from "../features/marsWeatherSlice";
import CurrentDay from "./CurrentDay";
import MarsWeatherSection from "./currentDayWeather/MarsWeatherSection";
import EarthWeatherForecast from "./currentDayWeather/EarthWeatherForecast";
import MarsWeatherForecast from "./currentDayWeather/MarsWeatherForecast";

function MarsWeather(props) {
    const marsStatus = useSelector(state => state.mars.status)


    const dispatch = useDispatch()
    useEffect(() => {

        if (marsStatus === 'idle') {
            // if (postStatus === 'idle') {
            dispatch(fetchWeatherMars())
            console.log('effect')
        }


    }, [marsStatus, dispatch])

    return (
        <main className={'flow'}>
            <section>
                <div className="container">
                    <h1 className="fs-primary-heading">Weather App</h1>

                </div>
            </section>
            <section>
                <div className="container">

                    <MarsWeatherSection/>
                </div>
            </section>
            <section className="weather-chart">
                <div className="container">
                    *chart here
                </div>
            </section>

            <section className="daily-forecast">
                <div className="container">
                    <MarsWeatherForecast/>
                </div>
            </section>
        </main>
    );
}

export default MarsWeather;