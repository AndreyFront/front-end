import myAxios from '@/api/myAxios'

const apiWetherToken = 'c22653e187556d1189e5da8412d50805'
const apiMapboxToken = 'pk.eyJ1IjoidmxhZGlzbGF2LW9udmVzIiwiYSI6ImNsYjd4b3hoMzA2OXYzbm10ZnVkd3dsbWMifQ.x9ts2KCXcK_0J560EzZ18Q'

const defaultParamsWether = {
    lat: 45.049297,
    lon: 38.967588,
}

const defaultParamsMapbox = {
    place: 'Краснодар'
}

const getCoordinates = (place = defaultParamsMapbox) => {
    return myAxios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place.place}.json?access_token=${apiMapboxToken}`).getData()
}

const weatherApi = (param = defaultParamsWether) => {
    return myAxios(`https://api.openweathermap.org/data/2.5/onecall?lat=${param.lat}&lon=${param.lon}&lang=ru&units=imperial&appid=${apiWetherToken}`).getData()
}

export { getCoordinates, weatherApi }