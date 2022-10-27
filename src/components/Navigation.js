import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Navigation(props) {
    return (
        <>
            <header className="primary-header">
                <div className="container">
                    <div className="nav-wrapper">

                        <div className="navigation-top">
                            <p className="logo | fs-600 fw-medium">Logo </p>
                            <div className={'weather-navigation'}>
                                <Link to={'weather/earth'} className="btn |fw-medium fs-500">Earth</Link>
                                <Link to="weather/mars" className="btn btn__active |fw-medium fs-500">Mars</Link>
                            </div>
                            <div className="fs-500 | source-about">
                                <p>About</p>
                                <p>Source</p>
                            </div>
                        </div>

                    </div>
                </div>

            </header>
            <Outlet context={{hello: 'World'}}/>

        </>
    );
}

export default Navigation;