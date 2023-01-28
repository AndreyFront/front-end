import realworldApi from '@/api/realworldApi'
import { setItem } from '@/helpers/interactionLocalStorage'

const state = {
    isLogin: false,
    isLoading: false,
    user: {
        email: '',
        password: '',
    }
}

const getters = {
    getEmail(state) {
        return state.email
    },
    getPassword(state) {
        return state.password
    },
    getIsLogin(state) {
        return state.isLogin
    }
}

const mutations = {
    setEmail(state, payload) {
        state.email = payload
    },
    setPassword(state, payload) {
        state.password = payload
    },
    setIsLogin(state, payload) {
        state.isLogin = payload
    },
    setIsLoading(state, payload) {
        state.isLoading = payload
    }
}

const actions = {
    async signIn(context, payload) {
        context.commit('setIsLoading', true)
        const data = await realworldApi.login(payload)
            .then((resp) => {
                setItem('accessToken', resp.data.user.token)
                context.commit('setIsLogin', true)
            })
            .catch((error) => this.errors = error.response.data.errors)
            .finally(() => context.commit('setIsLoading', false))
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}


