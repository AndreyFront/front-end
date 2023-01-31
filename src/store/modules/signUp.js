import realworldApi from '@/api/realworldApi'
import { setItem } from '@/helpers/interactionLocalStorage'

const state = {
    isLogin: false,
    isLoading: false,
    errors: [],
    user: {
        username: '',
        email: '',
        password: '',
    }
}

const getters = {
    signUpGetEmail(state) {
        return state.email
    },
    signUpGetPassword(state) {
        return state.password
    },
    signUpGetIsLogin(state) {
        return state.isLogin
    },
    signUpGetErrors(state) {
        return state.errors
    }
}

const mutations = {
    signUpSetEmail(state, payload) {
        state.email = payload
    },
    signUpSetPassword(state, payload) {
        state.password = payload
    },
    signUpSetIsLogin(state, payload) {
        state.isLogin = payload
    },
    signUpSetIsLoading(state, payload) {
        state.isLoading = payload
    },
    signUpSetErrors(state, payload) {
        state.errors = payload
    }
}

const actions = {
    signUp(context, payload) {
        context.commit('signUpSetIsLoading', true)
        return new Promise((resolve, reject) => {
            const data = realworldApi.register(payload)
                .then((resp) => {
                    setItem('accessToken', resp.data.user.token)
                    context.commit('signUpSetIsLogin', true)
                    context.commit('signUpSetErrors', [])
                    resolve(resp)
                })
                .catch((errors) => {
                    context.commit('signUpSetErrors', errors.response.data.errors)
                    reject(errors)
                })
                .finally(() => context.commit('signUpSetIsLoading', false))
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}