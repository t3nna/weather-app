import React from "react";
import {useSelector} from "react-redux";
import {Spinner} from "./Spinner";
import {selectSol} from "../tools/selectSol";
import CurrentDayWeather from "./CurrentDayWeather";

export default function CurrentDay() {

    const postStatus = useSelector(state => state.mars.status)
    const error = useSelector(state => state.mars.error)

    // Select sol
    let sols = useSelector((state) => state.mars.data)


    let content

    if (postStatus === 'loading') {
        content = <Spinner text="Loading..."/>
    } else if (postStatus === 'succeeded') {
        let weather = selectSol(sols)
        weather= weather[weather.length-1]
        console.log(weather)
        content=CurrentDayWeather({weather})

    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <>
            <div className="weather">
                {content}
            </div>
        </>
    )
}