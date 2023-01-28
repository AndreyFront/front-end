import axios from 'axios'
import { getItem } from '@/helpers/interactionLocalStorage'

export default function myAxios(url, data = {}) {

    return {
        async getData() {
            const response = await axios.get(url)
                .then((resp) => resolve(resp))

            return response
        },
        async postData() {
            const response = await axios.post(url, data)
                .then((resp) => resolve(resp))

            return response
        }
    }
}