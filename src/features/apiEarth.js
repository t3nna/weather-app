let API_URL_CURRENT_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=warsaw&appid=ce7febf6347bba625a3d0507e100f4c8'
let API_URL_FORECAST_WEATHER = 'https://api.openweathermap.org/data/2.5/forecast?appid=ce7febf6347bba625a3d0507e100f4c8&units=metric&q=wroclaw'


export default function currentWeatherUrl(location='kyiv'){
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ce7febf6347bba625a3d0507e100f4c8`
}