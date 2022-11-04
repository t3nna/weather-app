import React, {useEffect, useState} from 'react';
import CurrentDay from "./CurrentDay";
import {useDispatch, useSelector} from "react-redux";
import {addLocation, fetchWeatherMars} from "../features/marsWeatherSlice";
import {fetchWeatherEarth} from "../features/earthWeatherSlice";
import MarsWeather from "./MarsWeather";
import EarthWeather from "./EarthWeather";

function Main(props) {


    return (
        <>
            <main className="flow">
                <section className="intro">
                    <div className="container flow">
                        <h1 className={'first '}>
                            Hi, my name is Ivan and this is
                        </h1>
                        <h1 className={'second '}>
                            my Weather app.
                        </h1>
                        <h1 className={'third '}>
                            Here you can see weather on the
                        </h1>
                        <h1 className={'forth '}>
                            Earth and on the Mars!
                        </h1>

                        <button className="btn fs-600 earth-btn">Earth</button>
                        <button className="btn fs-600 mars-btn">Mars</button>

                    </div>
                </section>

            </main>
        </>
    );
}

export default Main;