import { createRouter, createWebHistory } from 'vue-router'
import Reminder from "../components/Reminder.vue";


const  routes = [
    // 注意这里使用路由path:'/'，Home, 如果你在app.vue  已经加载了首页，要删除app.vue中的组件，不然会重复加载
    {
        path:'/',
        component:Reminder,

    },
    {
        path: '/home',
        component: () => import('../components/Home.vue'),
        children: [
            {
                path:'',
                component:()=>import('../components/index.vue')
            },
            {
                path:'ALLRight',
                component:()=>import('../components/ALLRight.vue')
            },

            {
                path: 'Session',
                component: () => import('../components/session.vue')
            },{
                path: 'customMade',
                component: () => import('../components/customMade.vue')
            }

         ]
    },



]
const routerHistory = createWebHistory()
const routers = createRouter({
    history: routerHistory,
    routes: routes
})
export default routers
