import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addLocation} from "../features/earthWeatherSlice";

function Search({location, handleClick, handleSubmit}) {
/*    //using dispatch
    const dispatch = useDispatch()


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

    }*/
    return (
        <>
            <section className="search">
                <div className="container flow">

                    <form className="search-bar" onSubmit={handleSubmit}>
                        <input type="text" value={location} onChange={handleClick}/>
                        <button type="submit" className="btn">
                            Search
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Search;