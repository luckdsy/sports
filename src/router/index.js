require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue from 'vue'
import Router from 'vue-router'
import BaiduMap from 'vue-baidu-map'

import Footers from '@/components/footer'

import Start from '@/pages/start'
import Yindaoye from '@/pages/yindaoye'
import Login from '@/pages/login'
import Reg from '@/pages/reg'
import Yundongguiji from "@/pages/yundongguiji"


import Yundong from '@/pages/yundong'
import JiaoCheng from '@/pages/jiaocheng'
import Fenxiang from '@/pages/fenxiang'
import Wo from '@/pages/wo'


import Yundongjilu from '@/pages/childpages/yundongjilu'
import Tiaozhanjilu from '@/pages/childpages/tiaozhanjilu'
import Kaishixunlian from '@/pages/childpages/kaishixunlian'

import ZhengZaiXunLian from '@/pages/childpages/zhengzaixunlian'
import PK from '@/pages/childpages/PK'
import Music from '@/pages/childpages/music'
import Jishi from '@/pages/jishi'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key 

 for details about app key. */
  ak: 'KU7dHiWqTNMXfVVnNnFj9wPoYy2vDUVX'
})

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/yindaoye',
      name: 'Yindaoye',
      component: Yindaoye
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
  	{
      path: '/yundong',
      name: 'yundong',
      component: Yundong
    },
    {
      path: '/jiaocheng',
      name: 'jiaocheng',
      component: JiaoCheng,
      children:[
      	
      ]
    },
    {
      path: '/fenxiang',
      name: 'fenxiang',
      component: Fenxiang
    },
    {
    	path: '/wo',
      name: 'wo',
      component: Wo
    },
    
    
    {
      path: '/kaishixunlian',
      name: 'kaishixunlian',
      component: Kaishixunlian
    },
    {
      path: '/yundongjilu',
      name: 'yundongjilu',
      component: Yundongjilu
    },
     {
      path: '/yundongguiji',
      name: 'yundongguiji',
      component: Yundongguiji
    },

    {
      path: '/tiaozhanjilu',
      name: 'tiaozhanjilu',
      component: Tiaozhanjilu
    },
    
    {
      path: '/jishi',
      name: 'jishi',
      component: Jishi
    },
    
    {
		  path: '/zhengzaixunlian',
		  name: 'zhengzaixunlian',
		  component:ZhengZaiXunLian
		},
		{
		  path: '/pk',
		  name: 'PK',
		  component:PK
		},
		{
		  path: '/music',
		  name: 'music',
		  component:Music
		}
    
  ]
})
