<template>
    <div class="login">
        <div class="section section1">登录页</div>
        <div class="section section2"></div>
        <div
            class="section section3"
            @click="redirect('/list')"
        ></div>
    </div>
</template>

<script lang="ts">
import { useRouterTransition } from "@/hooks/router";

export default {
    name: "Login",
    setup() {
        const { router, redirect } = useRouterTransition({ name: "scale" });
        return { router, redirect };
    },
};
</script>

<style>
.login {
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3370ff;
}

.login .section {
    margin: 20px;
    background-color: #fff;
    transition: opacity 0.5s ease;
}
.login .section1 {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    line-height: 200px;
}
.login .section2 {
    width: 200px;
    height: 200px;
}
.login .section3 {
    width: 200px;
    height: 50px;
}

.scale-in-enter-active.login,
.scale-in-active.login {
    transition: opacity 0.5s ease;
    transition: transform 0.5s ease;
}

.scale-in-leave-active.login {
    transition: transform 0.5s ease;
    transition-delay: 0.5s;
}

.scale-in-leave-active.login .section {
    transition-delay: 0;
}

.scale-in-enter-active.login .section,
.scale-in-active.login .section {
    transition-delay: 0.4s;
}

.scale-in-enter-from.login,
.scale-in-leave-to.login {
    transform: scale(0, 0);
}
.scale-in-enter-from.login .section,
.scale-in-leave-to.login .section {
    opacity: 0;
}

.scale-in-enter-to.login,
.scale-in-leave-from.login {
    transform: scale(1, 1);
}
</style>