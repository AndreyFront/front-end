import myAxios from '@/api/myAxios'

export default function postsApi(param = '') {
    return myAxios(`https://jsonplaceholder.typicode.com/posts?${param}`).getData()
}