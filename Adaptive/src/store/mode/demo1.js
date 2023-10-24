import { createStore } from 'vuex'
export  const store1=({
    namespaced: true,
  state:{
      name:'',
      age:''
  },
   mutations:{
      setName(state,name){
          state.name=name
      },
      setAge(state,age){
          state.age=age
      }
   } ,
    actions:{
     addname({commit},da){
      commit('setName',da)
     },
     addage({commit},da){
      commit('setAge',da)
     }
    }
})