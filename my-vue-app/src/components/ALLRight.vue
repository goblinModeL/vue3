
<template>
  <div id="All-father">
    <div class="title"></div>
    <div class="video">
    <video  controls >
      <source src="https://media.w3.org/2010/05/sintel/trailer.mp4"  type="video/mp4">
      您的浏览器不支持 HTML5 video 标签。
    </video>
    </div>
    <div class="text">
      <div class="text-title">{{tetitle}}</div>
      <el-scrollbar height="240px" >
        <div v-for="(ly,index) in data" class="content"><span>{{title[index]}}：</span>{{ly}}</div></el-scrollbar></div>
    <div class="icon"></div>
  </div>
</template>
<script setup>
import jsonData from "../json/all.json";
import {onMounted, onUpdated, ref,} from "vue";
import {useRoute} from "vue-router";
import  axios from "axios";
const data=ref([])
const  title=ref([])
const  route=useRoute()
const  tetitle=ref()


onMounted(()=>{
  tetitle.value=jsonData[parseInt(route.query.moduleId)].title
  jsonData[parseInt(route.query.moduleId)].data.forEach((index,item)=>{
    title.value.push(index.title)
    data.value.push(index.content)
  }
  )

})
onUpdated( ()=>{
  title.value=[]
  data.value=[]
  tetitle.value=''
  tetitle.value=jsonData[parseInt(route.query.moduleId)].title
  jsonData[parseInt(route.query.moduleId)].data.forEach((index,item)=>{
        title.value.push(index.title)
        data.value.push(index.content)
      }
  )
})

</script>
<style scoped>
#All-father{
   width: calc(100% - 300px);
  height: 500px;
  -webkit-box-shadow: 3px 3px 10px #888888;
  box-shadow: 3px 3px 10px #888888;
  position: relative;
  left: 100px;
  top:50px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .title{
    flex-basis: 100%;
    height:50px;
    text-align: center;
    line-height: 50px;
  }
  .text{
   position: relative;
    left: 10px;
    width:55%;
    height: 270px;
    .text-title{
      height:30px;
      text-align: center;
      line-height: 30px;
      font-weight: bold;
    }
  }
  .icon{
    bottom: 0;
    position:  absolute;
    flex-basis: 100%;
    width:100%;
    height: 100px ;
  }
}
.content{
  line-height: 20px;
  padding-top: 5px;
  text-indent: 1em;

}
.video{
 margin-left: 10px;
  margin-top: 30px;
  width: 40%;
  height: 240px;
}
.video video{
  width: 100%;
  height: auto;
}
span{
  font-weight: bold;
}
</style>