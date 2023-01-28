<template>
    <div class="weather-card">
        <span class="name-place">{{ place }}</span>
        <div class="wrap-info">
            <span class="info">Погода: {{ weather }}</span>
            <span class="info">Температура: {{ temp }} <sup>o</sup></span>
            <span class="info">Влажность: {{ humidity }} %</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WeatherCard',
    props: {
        place: {
            type: String,
            required: true
        },
        weather: {
            type: String,
            required: true
        },
        temp: {
            type: Number,
            required: true
        },
        humidity: {
            type: Number,
            required: true
        },
    }
}
</script>
<style lang="scss" scoped>
.weather-card {
    border: 1px solid #c0c0c0;
    padding: 20px;
}

.name-place {
    font-size: 18px;
    font-size: 600;
}

.wrap-info {
    display: grid;
    grid-row-gap: 5px;
    align-content: start;
    margin-top: 15px;
}

.info {}
</style>