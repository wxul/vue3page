<template>
    <div class="list">
        <div class="list-bg"></div>
        <div class="list-content">
            <div class="list-nav">
                <div class="list-title">
                    <router-link
                        to="/list"
                        class="list-subtitle"
                    >功能列表页</router-link>
                    <transition name="stretch">
                        <span
                            v-if="id"
                            class="list-subtitle"
                        >&nbsp;&lt;&nbsp;功能{{id}}</span>
                    </transition>
                </div>
            </div>
            <div class="section-home">
                <div
                    class="section-item"
                    :class="{'section-active': id===1,'section-leave':id && id!==1}"
                    @click="redirect(`/list/1`)"
                >
                    <transition
                        name="fade"
                        mode="out-in"
                    >
                        <span v-if="!id || id!==1">功能1</span>
                        <div v-else>功能1内容</div>
                    </transition>
                </div>
                <div
                    class="section-item"
                    :class="{'section-active': id===2,'section-leave':id && id!==2}"
                    @click="redirect(`/list/2`)"
                >
                    <transition
                        name="fade"
                        mode="out-in"
                    >
                        <span v-if="!id || id!==2">功能2</span>
                        <Section2 v-else>功能1内容</Section2>
                    </transition>
                </div>
                <div
                    class="section-item"
                    :class="{'section-active': id===3,'section-leave':id && id!==3}"
                >功能3</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import Section2 from "@/components/Section2.vue";
import { useRouterTransition } from "@/hooks/router";

export default {
    components: {
        Section2,
    },
    setup() {
        const id = ref(0);

        onBeforeRouteUpdate((to, from, next) => {
            id.value = Number(to.params.id) || 0;
            next();
        });

        const { router, redirect } = useRouterTransition({ name: "scale" });
        return { router, id, redirect };
    },
};
</script>

<style>
.list {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.list .list-bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../assets/bg.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.5s ease;
}

.list .list-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 40px 40px;
    transition: opacity 0.5s ease;
}

.list-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #fff;
}

.list-title {
    /* display: inline-block; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.4s ease;
}

.list-subtitle {
    display: inline-block;
    width: auto;
    overflow: hidden;
    white-space: nowrap;
}

.section-home {
    position: relative;
    height: calc(100% - 50px);
}
.section-item {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 160px;
    margin-top: -80px;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
    transition: all 0.4s ease;

    text-shadow: 2px 4px 4px #000;
}
/* .section-item:not(.section-active) {
    transition: background-color 0.2s linear;
} */
.section-item:not(.section-active):hover {
    background-color: rgba(0, 0, 0, 0.5);
}

.section-item:nth-child(2).section-active {
    display: block;
    border: 0;
    line-height: 160px;
}

.section-home .section-item.section-active {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
}

.section-home .section-item.section-leave {
    transition: transform 0.5s ease;
    transform: scale(0, 0);
}

.section-item:nth-child(1) {
    margin-left: -340px;
}
.section-item:nth-child(2) {
    margin-left: -100px;
}
.section-item:nth-child(3) {
    margin-left: 140px;
}

/* 主页面 */
.scale-in-enter-active.list,
.scale-in-active.list {
    transition: transform 0.5s ease 0.5s;
}

.scale-in-leave-active.list {
    transition: transform 0.5s ease;
}

/* 背景 */
.scale-in-enter-active.list .list-bg,
.scale-in-active.list .list-bg {
    transition: transform 0.5s ease 0.5s;
}

.scale-in-leave-active.list .list-bg {
    transition-delay: 0;
}

.scale-in-enter-from.list .list-bg,
.scale-in-leave-to.list .list-bg {
    transform: scale(2, 2);
}

/* 其他 */
.scale-in-enter-active.list .list-content,
.scale-in-active.list .list-content {
    transition-delay: 1s;
}

/* nav */
.stretch-enter-active,
.stretch-active {
    transition: all 0.5s ease;
}
.stretch-leave-active {
    transition: all 0.5s ease;
}
.stretch-enter-from,
.stretch-leave-to {
    max-width: 0;
    opacity: 0;
}
.stretch-enter-to,
.stretch-leave-from {
    max-width: 80px;
    opacity: 1;
}

/* fade */
.fade-enter-active,
.fade-active {
    transition: all 0.1s ease;
}
.fade-leave-active {
    transition: all 0.1s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>