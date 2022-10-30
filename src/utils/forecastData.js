import highestFrequency from "./highestFrequency";

export default function forecastData(weatherArr) {
    let result = []
    for (let i = 0; i < weatherArr.length; i++) {
        let weatherItem = weatherArr[i]

        let highTemp = -200
        let lowTemp = 200
        let status = []

        weatherItem.weather.forEach((dateItem) => {
            status.push({

                status: dateItem.weather[0].main,
                icon: dateItem.weather[0].icon

            })

            if (dateItem.main.temp_max > highTemp) {
                highTemp = dateItem.main.temp_max
            }
            if (dateItem.main.temp_min < lowTemp) {
                lowTemp = dateItem.main.temp_min
            }
        })
        const {current, icon} = highestFrequency(status)
        result[i] = {highTemp, lowTemp, current, icon,
            day: weatherItem.day
        }
    }
    return result
}