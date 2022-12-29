<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link :to="{name: 'signIn'}">Sign in</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'signUp'}">Sign up</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <router-view />
</template>

<style lang="scss"></style>
