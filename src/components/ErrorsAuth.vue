<template>
    <div class="errors">
        <template v-for="(key, error) in errors">
            <span class="message-error" v-for="itemError in key">{{ error }} <b>{{
                itemError
            }}</b></span>
        </template>
    </div>
</template>
<script>
export default {
    name: 'ErrorsAuth',
    props: {
        errors: {
            type: Array,
        }
    }
}
</script>
<style lang="scss" scoped>
.errors {
    display: grid;
    grid-row-gap: 10px;
}

.message-error b {
    color: red;
}
</style>