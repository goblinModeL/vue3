

<template>
<div class="all-echarts">
  <div class="echarts" ref="echart1"></div>
  <div class="echarts" ref="echart2"></div>
  <div class="echarts" ref="echart3"></div>
</div>
</template>

<script setup>

import * as echarts from 'echarts';
import {option1, option2, option3} from '../echarts/echarts.js'
import {onMounted, ref} from "vue";
import   '../echarts/customed.js'


const echart1=ref(null)
const  echart2=ref(null)
const echart3=ref(null)
onMounted(()=>{
  const one=echarts.init(echart1.value,'vintage')
  const two =echarts.init(echart2.value,'vintage')
  const three =echarts.init(echart3.value,'vintage')
  one.setOption(option1)
  two.setOption(option2)
  three.setOption(option3)
  window.addEventListener('resize',()=>{
    one.resize()
    two.resize()
    three.resize()
  })

})

</script>
<style scoped>
.all-echarts{
  position: absolute;
  top:100px;
  left:50px;
  width: calc(100% - 200px);
  height: 330px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
.echarts {
  width: 30%;
  height: 300px;
}
@media(max-width: 1000px) {
  .echarts {
    width: 30%;
    height: 60%;

  }
}


</style>