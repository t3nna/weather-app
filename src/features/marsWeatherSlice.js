import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";

const API_KEY = '8pMV9r21AjDlj3WSSJji2hJw50GGcjMSyP3YEE1a'
const API_URL = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0
`


const marsWeatherSlice = createSlice({
    name: 'mars-weather',
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
            },
            prepare(location){
                return{
                    payload:{
                        id: nanoid(),
                        name: location
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})

export const {addLocation} = marsWeatherSlice.actions

export default marsWeatherSlice.reducer

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchPosts = createAsyncThunk('weather/fetchWeather', async () => {

    const response = await fetch(API_URL)

    const data = await response.json()
    console.log(data)

    const {sol_keys, validity_checks, ...solData} = data
    return {sol_keys, validity_checks, solData}
})

