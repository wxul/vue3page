<template>
    <div class="home">
        <router-link to="/login">跳转URL</router-link>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
</style>