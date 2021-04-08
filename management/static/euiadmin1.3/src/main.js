import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/style/Style.js'
import '@/eui/unit/Unit.js'
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')