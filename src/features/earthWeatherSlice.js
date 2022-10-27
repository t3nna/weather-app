//redux slice for earth weather

import {createSlice, nanoid} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import currentWeatherUrl from "./apiEarth";


const earthWeatherSlice = createSlice({
    name: 'earth-weather',
    initialState: {
        error: null,
        status: 'idle',
        location: '',
        currentWeather: {},
        forecastWeather: {},
    },
    reducers: {
        addLocation: {
            reducer
                (state, action) {
                state.status = 'idle'
                state.location = action.payload

            },

        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchCurrentWeatherEarth.pending, (state, action)=>{
                state.status ='loading'
            })
            .addCase(fetchCurrentWeatherEarth.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                state.currentWeather = action.payload
            }
            )
            .addCase(fetchCurrentWeatherEarth.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
        .addCase(fetchForecastWeatherEarth.pending, (state, action)=>{
                state.status ='loading'
            })
            .addCase(fetchForecastWeatherEarth.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                state.forecastWeather = action.payload
            }
            )
            .addCase(fetchForecastWeatherEarth.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })

    }
})


export const {addLocation} = earthWeatherSlice.actions

export default earthWeatherSlice.reducer

// createAsyncThunk

let API_URL_CURRENT_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=ce7febf6347bba625a3d0507e100f4c8'
let API_URL_FORECAST_WEATHER = 'https://api.openweathermap.org/data/2.5/forecast?appid=ce7febf6347bba625a3d0507e100f4c8&units=metric&q=wroclaw'


export const fetchCurrentWeatherEarth = createAsyncThunk('weather/fetchCurrentWeatherEarth', async (_, thunkAPI) => {
    let searchResult = thunkAPI.getState(state => state)
    searchResult = searchResult.earth.location
    console.log(searchResult)

    const url  = searchResult ? currentWeatherUrl(searchResult) : currentWeatherUrl()

    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    return data

})
export const fetchForecastWeatherEarth = createAsyncThunk('weather/fetchForecastWeatherEarth', async () => {

    const response = await fetch(API_URL_FORECAST_WEATHER)

    const data = await response.json()
    console.log(data)
    return data

})







