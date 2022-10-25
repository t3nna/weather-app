import './sass/main.scss';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addLocation, fetchPosts, selectSol} from "./features/marsWeatherSlice";
import {nanoid} from "@reduxjs/toolkit";
import CurrentDay from "./components/CurrentDay";


function App() {
    const [marsWeather, setMarsWeather] = useState([]);
    const [location, setLocation] = useState('');

    function handleClick(e) {
        setLocation(e.target.value)
    }

    //using dispatch
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(dispatch(addLocation({
            id: nanoid(),
            location
        })))

        setLocation('')

    }

    const postStatus = useSelector(state => state.mars.status)
    const posts = useSelector(state => state.mars.posts)

    useEffect(() => {

        if (postStatus === 'idle') {
            // if (postStatus === 'idle') {
            dispatch(fetchPosts())
            console.log('effect')
        }


    }, [postStatus, dispatch])

    const weather = useSelector(state => state.mars.data.temperature)

    // Spinner

    // let content
    // if (postStatus === 'loading') {
    //
    //     content = <Spinner text={"Loading"}/>
    // } else if (postStatus === 'succeeded') {
    //     content = 'posts'
    // } else if (postStatus === 'failed') {
    //     content = <div>{postStatus}</div>
    // }




    return (
        <>
            <header className="primary-header">
                <div className="container">
                    <div className="nav-wrapper">

                        <div className="navigation-top">
                            <p className="logo | fs-600 fw-medium">Logo </p>
                            <div className="fs-500">
                                <p>About</p>
                                <p>Source</p>
                            </div>
                        </div>
                        <div className="navigation-bottom">
                            <h2 className="btn"><a href="#" className="fw-medium fs-500">Earth</a></h2>
                            <h2 className="btn btn__active"><a href="#" className="fw-medium fs-500">Mars</a></h2>
                        </div>
                    </div>
                </div>

            </header>

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

            <footer>
                <div className="container">
                    <div className="footer-wrapper flow" style={{"--flow-spacer": 1.5 + "rem"}}>
                        <h2 className="created-with | fs-third-heading__neutral">
                            Created with
                        </h2>
                        <ul role="list" className="footer-list">
                            <li><a href="#">
                                <img src="/images/Background.png" alt=""/>
                                <h3 className="fs-third-heading__neutral">React</h3>
                                <p>Library for interfaces in JS</p>
                            </a></li>
                            <li><a href="#">
                                <img src="/images/Background.png" alt=""/>
                                <h3 className="fs-third-heading__neutral">Sass</h3>
                                <p>Framework for Css</p>
                            </a></li>
                        </ul>
                        <div className="copyright fw-medium fs-500">
                            <p>Some copyright text</p>
                        </div>
                    </div>
                </div>

            </footer>


        </>
    );
}

export default App;
