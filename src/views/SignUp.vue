<template>
  <div class="auth">
    <div class="main-container max-width">
      <h1>Регистрация</h1>
      <div class="auth__wrap-input">
        <ErrorsAuth :errors="signUpGetErrors" />
        <input type="text" class="input" placeholder="Username" v-model="user.username" />
        <input type="text" class="input" placeholder="Email" v-model="user.email" />
        <input type="password" class="input" placeholder="Пароль" v-model="user.password" />
      </div>
      <button type="button" class="btn auth__btn" @click="signUpAction">
        <span class="btn__text">Зарегаться</span>
      </button>
    </div>
  </div>
</template>

<script>
import ErrorsAuth from '@/components/ErrorsAuth'
import { mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['signUpGetErrors'])
  },
  methods: {
    ...mapActions(['signUp']),
    signUpAction() {
      this.signUp(this.user).then((res) => this.$router.push({ name: 'posts' }))
    }
    // async signUp() {
    //   this.isLoading = true
    //   const data = await realworldApi.register(this.user)
    //     .then((resp) => setItem('accessToken', resp.data.user.token))
    //     .catch((error) => this.errors = error.response.data.errors)
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>