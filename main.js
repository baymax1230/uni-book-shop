import App from './App'
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'





const app = new Vue({
    ...App
})

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

require('@/config/request')(app)

// http接口API集中管理引入部分
import httpApi from '@/config/http.api.js'
Vue.use(httpApi, app)



app.$mount()
