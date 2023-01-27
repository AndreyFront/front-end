<template>
    <Header></Header>
    <router-view />
</template>

<script>
    import Header from '@/layouts/Header'
    import axios from '@/api/postsApi';

    export default {
        name: "App",
        components: {
            Header
        }
    }
</script>

<style lang="scss">
    @import '@/assets/styles/main.scss';
</style>
