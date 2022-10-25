//redux slice for earth weather

import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";


const earthWeatherSlice = createSlice({
    name: 'earth-weather',
    initialState: {
        error: null,
        status: 'idle',
        data: {}
    },
    reducers: {
        addLocation: {
            reducer
                (state, action) {
                state.data.location = action.payload

            }
        },
    }
})



export const {addLocation} = earthWeatherSlice.actions

export default earthWeatherSlice.reducer

// createAsyncThunk

let API_URL = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'

export const fetchPosts = createAsyncThunk('weather/fetchWeather', async () => {

        const response = await fetch(API_URL)

        const data = await response.json()
        console.log(data)


})



