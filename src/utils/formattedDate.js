export const formattedDate = (data) =>{
    const result = []
    let indexArr = []
    console.log(data)
    data.forEach((weatherItem, i)=>{
        const key = new Date(weatherItem.dt_txt).getDate();
        let index = indexArr.indexOf(key);

        indexArr = [...Array.from(new Set(indexArr))];
        if (index !== -1) {
            result[index].weather.push(weatherItem);
        } else {
            result.push({ day: weatherItem.dt_txt, weather: [weatherItem] });
        }
        indexArr.push(key);
    })

    if(result[result.length-1].weather.length <2){
        result.pop()
    }
    console.log(result)
    return result
}