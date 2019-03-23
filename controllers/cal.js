const calucaulatebill=(total,gst=.4)=>total+(total*gst)

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

module.exports={
    calucaulatebill,
    fahrenheitToCelsius,
    celsiusToFahrenheit
}