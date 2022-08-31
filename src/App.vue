<script setup lang="ts">
import { useRoute } from 'vue-router'
import {onMounted} from 'vue'

const route = useRoute()
onMounted(() => {
  console.log('Mounted',route.query)
})
console.log('Created',route.query)


</script>

<template>
  <div>
    <router-link to="/">
      Home 
    </router-link>
    <router-link to="/about">
      About
    </router-link>
  </div>
  <pre>
    {{ route.query }}
  </pre>
  <router-view />
</template>

<style scoped>

.router-link-active {
  font-size: 30px;
  color: red;
}
</style>