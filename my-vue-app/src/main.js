import { createApp } from 'vue'
import  router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'

import  elementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { DatePicker } from 'ant-design-vue';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(DatePicker);
app.use(router).use(elementPlus)
    .mount('#app')
