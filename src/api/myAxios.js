import axios from 'axios'
import { getItem } from '@/helpers/interactionLocalStorage'

export default function myAxios(url, data = {}) {

    return {
        async getData() {
            try {
                const response = await axios.get(url)
                // console.log(response)
                return response
            } catch (error) {
                console.error(error)
            }
        },
        async postData() {
            try {
                const response = await axios.post(url, data)
                // console.log(response)
                return response
            } catch (error) {
                console.error(error)
            }
        }
    }
}