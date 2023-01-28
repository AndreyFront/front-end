<template>
    <div class="auth">
        <div class="main-container max-width">
            <h1>Вход</h1>
            <div class="auth__wrap-input">
                <ErrorsAuth :errors="errors" />
                <input type="text" class="input" placeholder="Email" v-model="user.email" />
                <input type="password" class="input" placeholder="Пароль" v-model="user.password" />
            </div>
            <button type="button" class="btn auth__btn" @click="signIn">
                <span class="btn__text">Войти</span>
            </button>
        </div>
    </div>
</template>

<script>
import ErrorsAuth from '@/components/ErrorsAuth'
import realworldApi from '@/api/realworldApi'
import { setItem } from '@/helpers/interactionLocalStorage'
import { mapActions } from 'vuex'

export default {
    name: "SignIn",
    data() {
        return {
            errors: [],
            user: {
                email: '',
                password: '',
            }
        }
    },
    components: {
        ErrorsAuth
    },
    methods: {
        async signIn() {
            this.isLoading = true
            const data = await realworldApi.login(this.user)
                .then((resp) => setItem('accessToken', resp.data.user.token))
                .catch((error) => this.errors = error.response.data.errors)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
