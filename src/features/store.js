import { configureStore } from '@reduxjs/toolkit'
import marsWeatherReducer from "./marsWeatherSlice";
import earthWeatherSlice from "./earthWeatherSlice";


export default configureStore({
    reducer: {
        mars: marsWeatherReducer,
        earth: earthWeatherSlice,
    }
})