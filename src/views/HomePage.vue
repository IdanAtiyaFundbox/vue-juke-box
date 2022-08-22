<template>
  <span>
    Homepage
  </span>
  <div>
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

span {
  color: $red;
}

</style>