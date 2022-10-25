import { configureStore } from '@reduxjs/toolkit'
import marsWeatherReducer from "./marsWeatherSlice";


export default configureStore({
    reducer: {
        mars: marsWeatherReducer,
    }
})