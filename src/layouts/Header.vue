<template>
    <header class="header">
        <div class="main-container max-width">
            <nav class="nav">
                <ul class="ul list-reset">
                    <li class="li">
                        <router-link :to="{ name: 'home' }" class="link link-reset">Главная</router-link>
                    </li>
                    <li class="li" v-if="!signInGetIsLogin && !signUpGetIsLogin">
                        <router-link :to="{ name: 'signIn' }" class="link link-reset">Вход</router-link>
                    </li>
                    <li class="li" v-if="!signInGetIsLogin && !signUpGetIsLogin">
                        <router-link :to="{ name: 'signUp' }" class="link link-reset">Регистрация</router-link>
                    </li>
                    <li class="li" v-if="isLogin">
                        <router-link :to="{ name: 'posts' }" class="link link-reset">Посты</router-link>
                    </li>
                    <li class="li" v-if="isLogin">
                        <router-link :to="{ name: 'signUp' }" class="link link-reset">Вход</router-link>
                    </li>
                    <!-- <li class="li">
                        <router-link :to="{ name: 'weather' }" class="link link-reset">Погода</router-link>
                    </li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Header',
    data() {
        return {
            isLogin: this.signInGetIsLogin || this.signUpGetIsLogin
        }
    },
    computed: {
        ...mapGetters(['signInGetIsLogin', 'signUpGetIsLogin'])
    }
}
</script>

<style lang="scss" scoped>
.header {
    padding: 40px 0;
    border-bottom: 1px solid #c0c0c0;
}

.nav {}

.ul {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    justify-content: space-between;
    grid-column-gap: 30px;
    width: 100%;
}

.li {}

.link {
    font-size: 20px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid;
    border-bottom-color: #000;
    transition: border-bottom-color 0.3s;

    &:hover {
        border-bottom-color: transparent;
    }
}
</style>