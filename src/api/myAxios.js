import axios from 'axios'
import { getItem } from '@/helpers/interactionLocalStorage'

export default function myAxios(url, data = {}) {

    return {
        async getData() {
            const response = await axios.get(url)
                .catch((errors) => console.log(errors))

            return response
        },
        async postData() {
            const response = await axios.post(url, data)
                .catch((errors) => console.log(errors))

            return response
        }
    }
}