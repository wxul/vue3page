<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts">
export default {};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
}

#nav {
    padding: 30px;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>
