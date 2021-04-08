import Vue from 'vue'
import '@/eui/unit/VueSocketIo'
import components from '@/eui/unit/component/Component'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component('v' + name, components[key])
})