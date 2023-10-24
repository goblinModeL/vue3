<template>

  <div class="all">{{msg}}</div>
  <div class="all">{{uk}}yyyyyyy</div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
const  store=useStore()
const name='ly'
const age='21'
store.dispatch('demo1/addname',name)
store.dispatch('demo1/addage',age)
console.log(store.state.demo1.name)
defineProps({
  msg:String,
  uk:String
})


</script>
<style scoped>
.all {
  width: 500px;
  height: 50px;
  border: 1px solid pink;
  background-color: red;
  font-size: 22px;
}
</style>