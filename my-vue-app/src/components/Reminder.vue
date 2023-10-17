

<template>
  <div class="father">
  <form class="form">
    <span class="title">获取更多信息</span>
    <p class="description">专注中老年用户身体健康，您可选择是否填写电话号码，以获得最新资讯 <span class="skip" @click="newPage">跳过</span></p>
    <div>
<!--      此处无效 需要调用 短信API-->
      <input placeholder="填写手机号" v-model="num">
      <input type="button"  class='btn' @click="present" value="提交">
    </div>
  </form>

  <el-dialog
      :modal="true"
      v-model="dialogVisible"
      title="验证码"
      width="30%"

  >
    <el-input v-model="input" placeholder="输入四位验证码" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false;input=''">取消</el-button>
        <el-button type="primary" @click="toLoad">
         确认
        </el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ElLoading } from 'element-plus'
import {nextTick, ref} from 'vue'
import { ElMessageBox } from 'element-plus'
import {useRouter} from "vue-router";
const router = useRouter()
const input = ref('')
let dialogVisible = ref(false)
const num=ref('')
let cellPhoneNumber=/^1\d{10}$/
const present=()=>{
  if(num.value===''||!cellPhoneNumber.test(num.value)){

    ElMessageBox.alert('请填写正确手机号', '提示', {
      confirmButtonText: '确定',
    })
  }
  else{
    console.log(num.value)
    dialogVisible.value=true
  }
}
const newPage = () => {
  router.push({
    path:'/home',
    query:{
      phone:num.value
    }
  })
}
const options={
  target: '.father', // 要覆盖的DOM元素
  text: '验证中...', // Loading文本
  background: 'rgba(0, 0, 0, 0.7)', // 背景颜色
  customClass: 'custom-loading-class', // 自定义样式类
  lock: true, // 锁定滚动条
}
const toLoad=()=>{

  if(input.value==''||input.value.length!=4 ){
    ElMessageBox.alert('请填写正确验证码', '提示', {
      confirmButtonText: '确定',
    })
  }
  else {
    dialogVisible.value = false
    const loadingInstance = ElLoading.service(options)
    setTimeout(() => {
      // Loading should be closed asynchronously
      loadingInstance.close()
      newPage()
    }, 2000)
  }
}
</script>

<style scoped>
.father{
  background: #fffbd5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #b20a2c, #fffbd5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #b20a2c, #fffbd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  background: #06beb6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #48b1bf, #06beb6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 20px;
  border-radius: 10px;
  max-width: 350px;
}

.title {
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #fff;
}

.description {
  line-height: 1.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  color: #fff;
}

.form div {
  display: flex;
  max-width: 28rem;
  margin-top: 1rem;
  column-gap: 0.5rem;
}

.form div input {
  outline: none;
  line-height: 1.5rem;
  font-size: 0.875rem;
  color: rgb(255 255 255 );
  padding: 0.5rem 0.875rem;
  background-color: rgb(255 255 255 / 0.05);
  border: 1px solid rgba(253, 253, 253, 0.363);
  border-radius: 0.375rem;
  flex: 1 1 auto;
}

.form div input::placeholder {
  color: rgb(216, 212, 212);
}

.form div input:focus {
  border: 1px solid rgb(99 102 241);
}

.form div .btn {
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.625rem 0.875rem;
  background-color: rgb(99 102 241);
  border-radius: 0.375rem;
  border: none;
  outline: none;
}

.skip{
  color: royalblue;
 margin-left: 30px;
  cursor:pointer;
}

</style>