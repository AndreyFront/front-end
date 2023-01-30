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
    }
}

const actions = {
    async signIn(context, payload) {
        context.commit('signInSetIsLoading', true)
        const data = await realworldApi.login(payload)
            .then((resp) => {
                setItem('accessToken', resp.data.user.token)
                context.commit('signInSetIsLogin', true)
            })
            .catch((error) => this.errors = error.response.data.errors)
            .finally(() => context.commit('signInSetIsLoading', false))
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}