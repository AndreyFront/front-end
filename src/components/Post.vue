<template>
    <div class="post">
        <span class="title">{{ title }}</span>
        <span class="body">{{ body }}</span>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        display: grid;
        grid-row-gap: 10px;
        padding: 20px;
        border-top: 1px solid #c0c0c0;
    }

    .title {
        font-size: 20px;
        font-weight: 600;
    }
</style>