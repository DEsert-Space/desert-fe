import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import VueMobileDetection from 'vue-mobile-detection'

const app = createApp(App)
app.use(ElementPlus).use(VueMobileDetection).mount('#app')
