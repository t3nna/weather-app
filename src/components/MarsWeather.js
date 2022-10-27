import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherMars} from "../features/marsWeatherSlice";
import CurrentDay from "./CurrentDay";

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
                    <CurrentDay/>
                </div>
            </section>
            <section className="weather-chart">
                <div className="container">
                    *chart here
                </div>
            </section>

            <section className="daily-forecast">
                <div className="container">

                </div>
            </section>
        </main>
    );
}

export default MarsWeather;