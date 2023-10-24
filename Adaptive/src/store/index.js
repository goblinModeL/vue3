import {createStore} from 'vuex'
import {store1} from "./mode/demo1.js";
import {store2} from "./mode/demo2.js";

const store = createStore({
    modules: {
        namespace: true,
        demo1:store1,
        demo2:store2, // 假设你也导入了 store2 模块
    }
});
export default store
