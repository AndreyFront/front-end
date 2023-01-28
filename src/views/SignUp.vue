<template>
  <div class="auth">
    <div class="main-container max-width">
      <h1>Регистрация</h1>
      <div class="auth__wrap-input">
        <ErrorsAuth :errors="errors" />
        <input type="text" class="input" placeholder="Логин" v-model="user.username" />
        <input type="text" class="input" placeholder="Email" v-model="user.email" />
        <input type="password" class="input" placeholder="Пароль" v-model="user.password" />
      </div>
      <button type="button" class="btn auth__btn" @click="signUp">
        <span class="btn__text">Зарегаться</span>
      </button>
    </div>
  </div>
</template>

<script>
import ErrorsAuth from '@/components/ErrorsAuth'
import realworldApi from '@/api/realworldApi'
import { setItem } from '@/helpers/interactionLocalStorage'

export default {
  name: 'SignUp',
  data() {
    return {
      errors: [],
      isLoading: false,
      user: {
        username: '',
        email: '',
        password: '',
      }
    }
  },
  components: {
    ErrorsAuth
  },
  methods: {
    async signUp() {
      this.isLoading = true
      const data = await realworldApi.register(this.user)
        .then((resp) => setItem('accessToken', resp.data.user.token))
        .catch((error) => this.errors = error.response.data.errors)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>