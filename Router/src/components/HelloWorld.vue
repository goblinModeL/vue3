<template>
  <div class="father" ref="father">
    <button @click="open">打开弹窗</button>
  </div>
  <div class="dig" ref="dig">我是弹窗奥</div>
</template>
<script setup lang="ts">
import {ref} from "vue";
const father = ref(null)
const dig = ref(null)
const  newmy=document.createElement('div')
const open = () => {
  console.log(father.value)
  newmy.style.display=''
  newmy.style.height='100%'
  newmy.style.width='100%'
  newmy.style.position="absolute"
  newmy.style.top='0'
  newmy.style.background='rgba(1,1,1,0.4)';
  newmy.style.zIndex = String(2);
  document.body.appendChild(newmy)
  dig.value["style"].display='block'
}
const ab=()=>{
  newmy.style.display='none'
  dig.value['style'].display='none'
}
newmy.addEventListener('click',ab)
</script>

<style>
.father {
  display: flex;
  justify-content: center;
  align-items: center;
  height:50%;
}
.dig{
  border-radius: 10px;
  border: solid saddlebrown 2px;
  height: 30%;
  width: 30%;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: white;
}
</style>