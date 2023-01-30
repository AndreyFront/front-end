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
    }
}

const actions = {
    async signIn(context, payload) {
        context.commit('signUpSetIsLoading', true)
        const data = await realworldApi.login(payload)
            .then((resp) => {
                setItem('accessToken', resp.data.user.token)
                context.commit('signUpSetIsLogin', true)
            })
            .catch((error) => this.errors = error.response.data.errors)
            .finally(() => context.commit('signUpSetIsLoading', false))
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}