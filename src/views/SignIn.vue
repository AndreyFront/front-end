<template>
    <div class="auth">
        <div class="main-container max-width">
            <h1>Вход</h1>
            <div class="auth__wrap-input">
                <ErrorsAuth :errors="signInGetErrors" />
                <input type="text" class="input" placeholder="Email" v-model="user.email" />
                <input type="password" class="input" placeholder="Пароль" v-model="user.password" />
            </div>
            <button type="button" class="btn auth__btn" @click="signInAction">
                <span class="btn__text">Войти</span>
            </button>
        </div>
    </div>
</template>

<script>
import ErrorsAuth from '@/components/ErrorsAuth'
import { mapActions, mapGetters } from 'vuex'

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
    computed: {
        ...mapGetters(['signInGetErrors'])
    },
    methods: {
        ...mapActions(['signIn']),
        signInAction() {
            this.signIn(this.user).then((res) => this.$router.push({ name: 'posts' }))
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
