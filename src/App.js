import './sass/main.scss';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addLocation, fetchWeatherMars} from "./features/marsWeatherSlice";
import {nanoid} from "@reduxjs/toolkit";
import CurrentDay from "./components/CurrentDay";
import {fetchWeatherEarth} from "./features/earthWeatherSlice";
import {Route, Routes, useLocation} from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import EarthWeather from "./components/EarthWeather";
import MarsWeather from "./components/MarsWeather";
import Search from "./components/Search";


function App() {


    return (
        <>
            <Routes>
                <Route element={<Navigation/>}>

                    <Route index element={<>
                        <Main/>

                    </>}/>

                    <Route path={'/weather'}>
                        <Route path={'earth'} element={<>

                            <EarthWeather/>
                            <Footer/>
                        </>
                        }/>

                        <Route path={'mars'} element={<>

                            <MarsWeather/>
                            <Footer/>

                        </>}/>
                    </Route>

                </Route>


            </Routes>


        </>
    );
}

export default App;
