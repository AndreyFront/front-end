<template>
    <div class="posts">
        <div class="main-container max-width">
            <h1>Посты</h1>
            <div v-if="posts.length > 0" class="wrap-posts">
                <Post v-for="post in posts" :key="post.id" :title="post.title === undefined ? 'Not title' : post.title"
                    :body="post.body === undefined ? 'Not body' : post.body" />
            </div>
            <span class="message" v-if="isPostsLoading">Идет загрузка постов)</span>
        </div>
    </div>
</template>

<script>
import postApi from '@/api/postsApi'
import Post from '@/components/Post'

export default {
    name: "PostsView",
    data() {
        return {
            posts: [],
            isPostsLoading: true
        }
    },
    components: {
        Post
    },
    mounted() {
        setTimeout(() => {
            postApi('_limit=10').then((resp) => {
                this.posts = resp.data
                this.isPostsLoading = false
            })
        }, 1500)
    }
}
</script>

<style lang="scss" scoped>
.wrap-posts {
    display: grid;
}
</style>