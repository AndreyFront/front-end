import axios from 'axios'
import { getItem } from '@/helpers/interactionLocalStorage'

// const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1a29sZEBtYWlsLmNvbSIsInVzZXJuYW1lIjoia3Vrb2xkIiwiaWF0IjoxNjc0OTAyNjUyLCJleHAiOjE2ODAwODY2NTJ9.6oicNAirnVaVULPvL05ttc08pn02-dy68I_Vx_NA8YQ'

axios.defaults.baseURL = 'https://conduit.productionready.io/api'

axios.interceptors.request.use(config => {
    const token = getItem('accessToken')
    const authorizisationToken = token ? `Token ${token}` : ''
    config.headers.Authorization = authorizisationToken
    return config
})

const register = credentials => {
    return axios.post('/users', { user: credentials })
}

const login = credentials => {
    return axios.post('/users/login', { user: credentials })
}

export default {
    register,
    login,
}