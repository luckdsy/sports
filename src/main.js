// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueHighcharts from 'vue-highcharts'

import { Collapse,
		CollapseItem,
		Tabs,
  	TabPane,}
from 'element-ui'

Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.config.productionTip = false
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(VueHighcharts);

Vue.prototype.$axios=Axios
Vue.prototype.$HOST='/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods:{
 
    

  }
})
