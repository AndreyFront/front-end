<template>
    <div class="weather">
        <div class="main-container max-width">
            <div class="wrap-title">
                <h1>Погода</h1>
                <form class="block-search">
                    <input type="text" class="search" v-model="searchInput">
                    <button class="search-btn" @click.prevent="search" type="submit">
                        <img src="@/assets/images/magnifer.svg" class="search-icon" alt="">
                    </button>
                </form>
            </div>
            <div v-if="weatherData.length > 0 && isPlaces" class="wrap-cards">
                <WeatherCard v-for="weather in weatherData" :key="weather.id" :place="weather.place"
                    :weather="weather.weather === undefined ? 'Not weather' : weather.weather"
                    :temp="weather.temp === undefined ? 'Not temperature' : weather.temp"
                    :humidity="weather.humidity === undefined ? 'Not humidity' : weather.humidity" />
            </div>
            <div v-else-if="Object.keys(searchData).length" class="wrap-cards">
                <WeatherCard :place="searchData.place"
                    :weather="searchData.weather === undefined ? 'Not weather' : searchData.weather"
                    :temp="searchData.temp === undefined ? 'Not temperature' : searchData.temp"
                    :humidity="searchData.humidity === undefined ? 'Not humidity' : searchData.humidity" />
            </div>
            <span v-else-if="isWeatherLoading" class="message">Идет загрузка погоды)</span>
            <span v-else-if="isNotPosts" class="message">Нет карточек погоды</span>
        </div>
    </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard'
import { getCoordinates, weatherApi } from '@/api/weatherApi'
import fahrenheitInCelsius from '@/mixins/fahrenheitInCelsius'

export default {
    name: 'WeatherView',
    mixins: [fahrenheitInCelsius],
    components: {
        WeatherCard
    },
    data() {
        return {
            searchInput: '',
            weatherData: [],
            searchData: {},
            isPlaces: false,
            isWeatherLoading: true,
            isNotPosts: false,
            places: [
                { id: 0, place: 'Краснодар ' },
                { id: 1, place: 'Москва' },
                { id: 2, place: 'Питер' }
            ],
        }
    },
    computed: {
        getInfoPlaces() {
            setTimeout(() => {
                if (this.places.length > 0) {
                    this.isPlaces = true
                    this.isNotPosts = false
                    this.places.forEach((place, index) => {
                        this.getWeather(place, index).then((resp) => {
                            this.isWeatherLoading = false
                            this.weatherData.push(resp)
                        })
                    })
                } else {
                    this.isPlaces = false
                    this.isWeatherLoading = false
                    this.isNotPosts = true
                }
            }, 1500)
        },
    },
    methods: {
        async getWeather(place, index) {
            const respCoordinates = await getCoordinates(place, index)
            const dataPlace = respCoordinates.data.features[0],
                lat = dataPlace.center[0],
                lon = dataPlace.center[1]
            const respWeather = await weatherApi({ lat, lon })
            const dataWeather = respWeather.data.current
            const objectData = {
                id: index,
                place: place.place,
                weather: dataWeather.weather[0].description,
                temp: Math.round(this.getCelsius(dataWeather.temp)),
                humidity: dataWeather.humidity
            }

            return objectData
        },
        search() {
            this.isWeatherLoading = true
            if (this.searchInput.length > 0) {
                this.isPlaces = false
                setTimeout(() => {
                    this.getWeather({ place: this.searchInput }, 0).then((resp) => {
                        this.isWeatherLoading = false
                        this.searchData = resp
                    })
                }, 1500)
            } else {
                this.isWeatherLoading = false
                this.isPlaces = true
                this.searchData = {}
                this.getInfoPlaces
            }
        }
    },
    mounted() {
        this.getInfoPlaces
    }
}
</script>

<style lang="scss" scoped>
.weather {}

.wrap-title {
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;
    justify-content: space-between;
}

.wrap-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin-top: 50px;
}

.block-search {
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;
    height: 30px;
    border: 1px solid #c0c0c0;
}

.search {
    align-self: stretch;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 10px;
    background-color: transparent;
}

.search-btn {
    display: grid;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.6;
    }
}

.search-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    object-position: center;
}
</style>