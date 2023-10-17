

<template>
  <div class="session">

    <div  class="up">
<!--      api没有接入，测试用，复制软著代码时删除该行注释-->
      <div v-for=" (mes,index) in uu" :class=" index%2===0? 'leftse':'rightse'" >{{mes}}</div></div>
     <div class="transmit"><input type="text" name="text" class="input" v-model="data" placeholder="输入您想咨询信息">
       <el-button type="success" round @click="present" id="refer" :disabled="isDisabled">发送</el-button>
       <el-button type="danger" round  @click="clearall" id="refer">清空</el-button>
     </div>


  </div>
</template>

<script setup>
import {onMounted, onUpdated, ref, watch, watchEffect} from "vue";
import {onBeforeRouteLeave} from "vue-router";

const data=ref('')
const  uu=ref([])
const answer=ref([])
const liH=ref([])
const  isDisabled=ref()
onUpdated(()=>{

})
const slight=ref(0)
const  present=()=>{
  console.log(data.value)
  uu.value.push(data.value)
  data.value=''
 document.getElementsByClassName('up')[0].scrollTop = document.getElementsByClassName('up')[0].scrollHeight;
  isDisabled.value=true
}
// watch(data.value, (newValue, oldValue) => {
//   console.log(newValue)
//
//   if(data.value===''){
//     document.getElementById('refer').disabled='false'
//   }
//   else{
//     document.getElementById('refer').disabled='true'
//   }
// })
if (sessionStorage.getItem("zjj")) {
  console.log(JSON.parse(sessionStorage.getItem('zjj')))
  JSON.parse(sessionStorage.getItem('zjj')).forEach(item=>{
    uu.value.push(item)
  })
}
const clearall=()=>{
  uu.value=[]
  sessionStorage.clear()
}
onMounted(()=>{
  isDisabled.value=true
  console.log(123)
  document.getElementsByClassName('input')[0].addEventListener('keyup',(e)=>{
    isDisabled.value= data.value === '';
    e.preventDefault();
 if(e.keyCode===13&&data.value!==''){
   present()
 }
  })
})
onBeforeRouteLeave((to, from, next)=>{
  sessionStorage.setItem('zjj',JSON.stringify(uu.value))
console.log(123)
  next()
})
</script>
<!--////display: flex;-->
<!--//flex-direction: column;-->
<!--// align-items: center;-->
<style scoped>
.session {
  left:15%;
  top:5%;
  position: absolute;
  width: calc(100% - 300px);
  height: 600px;
  .up{
    margin-bottom: 10px;
    height: 500px;
    width: 600px;
    border: 2px solid black;
    border-radius: 5%;
    overflow-y: auto;
    overflow-x:hidden;
    -webkit-box-shadow: 3px 3px 10px #888888;
    box-shadow: 3px 3px 10px #888888;
  }
}
.transmit{
  width: 600px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
.input {
  border: none;
  padding: 1rem;
  border-radius: 1rem;
  height: 20px;
  width: 300px;
  background: #e8e8e8;
  box-shadow: 20px 20px 60px #c5c5c5,
  -20px -20px 60px #ffffff;
  transition: 0.3s;
}
.input:focus {
  outline-color: #e8e8e8;
  background: #e8e8e8;
  box-shadow: inset 20px 20px 60px #c5c5c5,
  inset -20px -20px 60px #ffffff;
  transition: 0.3s;
}
#refer{
  margin:10px;
}
.leftse{
  background: wheat;
  word-wrap: break-word;
  word-break: normal;
  width: 51%;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
.rightse{
  background: hotpink;
  position: relative;
  word-wrap: break-word;
  word-break: normal;
  left:43%;
  width: 51%;
  padding: 10px;
  border-radius: 10px;
   margin: 10px;
}
</style>