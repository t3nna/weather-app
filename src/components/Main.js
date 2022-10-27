import React, {useEffect, useState} from 'react';
import CurrentDay from "./CurrentDay";
import {useDispatch, useSelector} from "react-redux";
import {addLocation, fetchWeatherMars} from "../features/marsWeatherSlice";
import {fetchWeatherEarth} from "../features/earthWeatherSlice";
import MarsWeather from "./MarsWeather";
import EarthWeather from "./EarthWeather";

function Main(props) {

    const [marsWeather, setMarsWeather] = useState([]);
    const [location, setLocation] = useState('');

    function handleClick(e) {
        setLocation(e.target.value)
    }

    //using dispatch
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        // dispatch(dispatch(addLocation(
        //     location
        // )))
        //
        // setLocation('')

    }

    // const marsStatus = useSelector(state => state.mars.status)
    // const posts = useSelector(state => state.mars.posts)
    //
    // useEffect(() => {
    //
    //     if (marsStatus === 'idle') {
    //         // if (postStatus === 'idle') {
    //         dispatch(fetchWeatherMars())
    //         console.log('effect')
    //     }
    //
    //
    // }, [marsStatus, dispatch])


    return (
        <>
            <main className="flow">
                <section className="search">
                    <div className="container flow">
                        <h1 className="fs-primary-heading">Weather App</h1>
                        <form className="search-bar" onSubmit={handleSubmit}>
                            <input type="text" value={location} onChange={handleClick}/>
                            <button type="submit" className="btn">
                                Search
                            </button>
                        </form>
                    </div>
                </section>
                {/*<MarsWeather/>*/}
                {/*<EarthWeather/>*/}
            </main>
        </>
    );
}

export default Main;