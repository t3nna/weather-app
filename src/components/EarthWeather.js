import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addLocation,
    fetchCurrentWeatherEarth,
    fetchForecastWeatherEarth,
    fetchWeatherEarth
} from "../features/earthWeatherSlice";
import CurrentDay from "./CurrentDay";
import Search from "./Search";
import EarthWeatherSection from "./currentDayWeather/EarthWeatherSection";
import EarthWeatherForecast from "./currentDayWeather/EarthWeatherForecast";

function EarthWeather(props) {
    const earthStatus = useSelector(state => state.earth.status)
    const dispatch = useDispatch()

    //Search State
    const [location, setLocation] = useState('');

    function handleClick(e) {
        setLocation(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(dispatch(addLocation(
            location
        )))

        setLocation('')

    }


    // get Location to fetch weather
    const storeLocation = useSelector(state => state.earth.location)




    useEffect(() => {
        if (earthStatus === 'idle') {
            dispatch(fetchForecastWeatherEarth())
            dispatch(fetchCurrentWeatherEarth())
        }

    }, [dispatch, earthStatus]);


    return (
        <>
            <main className={'flow'}>
                <section>
                    <div className="container">
                <h1 className="fs-primary-heading">Weather App</h1>

                    </div>
                </section>

                <Search location={location} handleClick={handleClick} handleSubmit={handleSubmit}/>
                <section>
                    <div className="container">
                        <EarthWeatherSection/>
                    </div>
                </section>
                <section className="weather-chart">
                    <div className="container">
                        *chart here
                    </div>
                </section>

                <section className="daily-forecast">
                    <div className="container">
                        <EarthWeatherForecast/>
                    </div>
                </section>
            </main>

        </>
    );
}

export default EarthWeather;