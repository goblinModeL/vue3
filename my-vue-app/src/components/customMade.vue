<template>
  <div class="custom">
    <div class="child-left">
      <div class="child-right-title">体制辨析表</div>
      <div class="subtitle">
        <span>名称</span>
        <span>满分</span>
      </div>
      <el-scrollbar height="450px">
        <div class="slider-demo-block" v-for="(item,index) in score">
          <span class="demonstration" :title="name[index]">{{ name[index] }}</span>
          <el-slider v-model="score[index]" max="10" size="small" :marks="marks"/>
        </div>
        <el-button type="success" @click="accumulation">提交</el-button>
        <el-button type="danger" @click="clearScore">清空</el-button>
      </el-scrollbar>
    </div>
    <div class="child-right">
      <div class="child-right-title">个人信息</div>
      <el-form
          ref="FormRef"
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 460px"
          :rules=rules
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formLabelAlign.name"/>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="formLabelAlign.age"/>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="formLabelAlign.area" placeholder="选填"/>
        </el-form-item>
        <el-form-item label="电话" prop="num">
          <el-input v-model="formLabelAlign.num"/>
        </el-form-item>
        <el-form-item label="左侧得分">
          <el-input v-model="formLabelAlign.totalPoints" disabled placeholder="选填(左侧表单得分自动替换)"/>
        </el-form-item>
      </el-form>
      <el-button type="success" @click="refer(FormRef)">提交</el-button>
      <el-button type="danger" @click="resetForm(FormRef)">清空</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {reactive, ref} from 'vue'
import {FormInstance, ElMessage} from "element-plus";
import type {CSSProperties} from 'vue'

const labelPosition = ref('top')
const FormRef = ref<FormInstance>()
const formLabelAlign = reactive({
  name: '',
  age: '',
  num: '',
  area: '',
  totalPoints: 0,
})

interface Mark {
  style: CSSProperties
  label: string
}

const score = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
const name = ref([
  '手脚发凉?',
  '腰膝部怕冷吗?',
  '您比别人容易患感冒吗?',
  '您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉东西吗？',
  '你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？',
  '您感到怕冷、衣服比别人穿得多吗？',
  '内容太多，够用了，先这样吧',
  'wj',
  'ly',
  'dd'])
type Marks = Record<number, Mark | string>
const marks = reactive<Marks>({
  0: '0',
  5:'5',
  10:'10'
})
const ageRule = (rule, value, callback) => {
  if (parseInt(value) < 10 || parseInt(value) > 150) {
    callback("输入不合法")
  }
  callback()
}
const rules = reactive({
  name: [{
    required: true, message: '请输入姓名', trigger: 'submit'
  }],
  age: [{
    required: true, message: '请输入年龄', trigger: 'submit'
  }, {
    validator: ageRule, trigger: 'submit'
  }],
  num: [{
    required: true, message: '请输入电话', trigger: 'submit'
  }],

})
const refer = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        message: '提交成功',
        type: 'success',
      })
      formEl.resetFields()
      formLabelAlign.area = '';
      formLabelAlign.totalPoints = 0;
    } else {
      console.log(fields)
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  formLabelAlign.area = '';
  formLabelAlign.totalPoints = 0;
}
const  accumulation=()=>{
  formLabelAlign.totalPoints=0;
  score.value.forEach((item)=>{
    formLabelAlign.totalPoints+=item;
  })
}
const clearScore=()=>{
  for(let i in score.value){
    score.value[i]=0;
  }
}
</script>
<style scoped>
.custom {
  position: relative;
  top: 50px;
  left: 10px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  .child-left {
    max-height: 500px;
    width: 45%;
    padding: 20px;
    -webkit-box-shadow: 3px 3px 10px #888888;
    box-shadow: 3px 3px 10px #888888;
    overflow: hidden;
  }

  .child-right {
   max-height: 500px;
    width: 45%;
    padding: 20px;
    -webkit-box-shadow: 3px 3px 10px #888888;
    box-shadow: 3px 3px 10px #888888;

  }
}
.child-right-title {
  height: 30px;
  border-bottom: 1px black dashed;
  margin-bottom: 10px;
  line-height: 30px;
}
.subtitle{
  display: flex;
  justify-content: space-between;
}
.slider-demo-block {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.slider-demo-block .el-slider {
  margin-top: 20px;
  flex: 1;
}

.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
  margin-top: 20px;
}

.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>