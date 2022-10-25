export const selectSol = (state) =>{
    return Object.entries(state
        .solData)
        .map(([sol, data]) =>{
            return {
                sol: sol,
                maxTemp: data.AT.mx,
                avTemp: data.AT.av,
                minTemp: data.AT.mn,
                season: data.Season,
                pressure: data.PRE.av,
                windSpeed: data.HWS.av,
                windDirectionDegrees: data.WD.most_common.compass_degrees,
                windDirectionCardinal: data.WD.most_common.compass_point,
                date: new Date(data.First_UTC),

            }
        })
}