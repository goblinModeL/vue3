<template>
  <HelloWorld :msg="data.name"></HelloWorld>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const  data=ref({'name':'ly'})
</script>
<style scoped>
</style>
