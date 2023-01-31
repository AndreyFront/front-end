import realworldApi from '@/api/realworldApi'
import { setItem } from '@/helpers/interactionLocalStorage'

const state = {
    isLogin: false,
    isLoading: false,
    errors: [],
    user: {
        email: '',
        password: '',
    }
}

const getters = {
    signInGetEmail(state) {
        return state.email
    },
    signInGetPassword(state) {
        return state.password
    },
    signInGetIsLogin(state) {
        return state.isLogin
    },
    signInGetErrors(state) {
        return state.errors
    }
}

const mutations = {
    signInSetEmail(state, payload) {
        state.email = payload
    },
    signInSetPassword(state, payload) {
        state.password = payload
    },
    signInSetIsLogin(state, payload) {
        state.isLogin = payload
    },
    signInSetIsLoading(state, payload) {
        state.isLoading = payload
    },
    signInSetErrors(state, payload) {
        state.errors = payload
    }
}

const actions = {
    signIn(context, payload) {
        context.commit('signInSetIsLoading', true)
        return new Promise((resolve, reject) => {
            const data = realworldApi.login(payload)
                .then((resp) => {
                    setItem('accessToken', resp.data.user.token)
                    context.commit('signInSetIsLogin', true)
                    context.commit('signInSetErrors', [])
                    resolve(resp)
                })
                .catch((errors) => {
                    context.commit('signInSetErrors', errors.response.data.errors)
                    reject(errors)
                })
                .finally(() => context.commit('signInSetIsLoading', false))
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}