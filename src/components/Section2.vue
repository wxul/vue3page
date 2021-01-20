<template>
    <div class="section-table">
        <div
            class="section-td"
            :class="{'active':n.checked}"
            v-for="n in steps"
            :key="n.step"
            @click="n.checked=!n.checked"
        >步骤{{n.step}}</div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
    setup() {
        const Steps = [1, 2, 3, 4].map((x, i) => {
            return {
                step: x,
                checked: false,
            };
        });

        const steps = ref(Steps);

        return { steps };
    },
};
</script>

<style>
.section-table {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    left: -1px;
    top: -1px;

    width: calc(100% + 2px);
    height: calc(100% + 2px);
}

.section-td {
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    height: 50%;
    border: 1px solid #aaa;

    transition: all 0.4s ease;
}

.section-td:hover {
    z-index: 2;
    border-color: #fff;
    box-shadow: 0px 0px 4px #fff;
}

.section-td.active {
    z-index: 2;
    border-color: #fff;
    box-shadow: 0px 0px 4px #fff;
}

.section-td:nth-child(2n) {
    left: -1px;
}
.section-td:nth-child(n + 3) {
    top: -1px;
}
</style>