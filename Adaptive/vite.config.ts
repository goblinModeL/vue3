import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-plugin-px2rem'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [
                px2rem({
                    // 配置插件的选项  // 以设计稿宽度为 750px 为例，1rem = 75px // // 如果你的设计稿宽度不同，可以相应地调整这里的值
                    rootValue: 192,
                    propList: ['*'],
                    minPixelValue: 1,
                }),
                // 其他的 PostCSS 插件可以在这里配置
            ],
        }
    }

})
