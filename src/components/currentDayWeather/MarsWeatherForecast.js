import React from 'react';
import {useSelector} from "react-redux";
import {selectSol} from "../../utils/selectSol";

function MarsWeatherForecast(props) {
    let weather = useSelector(state => state.mars.data.solData)
    // weather = selectSol(weather.solData)
    // console.log(weather)

    return (
        <div className={'weather__forecast'}>
            <ul role={"list"} className={'weather__forecast-list'}>
                {
                    weather &&
                    Object.entries(weather)
                        .map(([sol, data], index) => {
                            console.log( data)
                            return(
                                <li key={index} className={'weather__forecast-day weather__forecast-active'}>
                                    <p className={'fs-500 fw-medium'}>Sol {sol}</p>
                                    <p>{new Date(data.First_UTC).getDate()} {new Date(data.First_UTC).toLocaleString('default', {month: 'short'})}</p>
                                    <p>High: {data.AT.mx}</p>
                                    <p>Low: {data.AT.mn}</p>
                                    {/*<p>H:{item.highTemp}° L:{item.lowTemp}°</p>*/}
                                    {/*<p>{item.status}</p>*/}
                                </li>
                            )
                            }
                        )
                }
                {/*{*/}
                {/*    weather.map((item, index) =>(*/}
                {/*        <li key={index} className={'weather__forecast-day weather__forecast-active'}>*/}
                {/*            <p>{new Date(item.day).getDate()} {new Date(item.day).toLocaleString('default', {month: 'short'})}</p>*/}
                {/*            <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt=""/>*/}
                {/*            <p>H:{item.highTemp}° L:{item.lowTemp}°</p>*/}
                {/*            <p>{item.status}</p>*/}
                {/*        </li>*/}
                {/*    ))*/}
                {/*}*/}
            </ul>

        </div>
    );
}

export default MarsWeatherForecast;