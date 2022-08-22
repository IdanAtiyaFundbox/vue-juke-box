<script setup lang="ts">
import { ref,defineAsyncComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"

const isShow = ref(false)

// const HelloWorld = defineAsyncComponent(() => import('./components/HelloWorld.vue'))

</script>

<template>
  <HelloWorld
    v-if="isShow"
    :msg="'hello'"
    :is-defined="false"
  />
  <button @click="isShow = true" />

  <router-view />
</template>

<style scoped>
</style>
