<template>
  <router-link tag="div" :to="{path:'/yindaoye/'}" class="hello">
      
   <img src="../assets/images/1qidongye/qidongye_03.png"  alt="">
   <p class="start">千里之行 始于i动</p>
   <p class="foot">idong@ 2017 week.com.All rights reserved</p>

 </router-link>
</template>

<script>
export default {
  name: 'start',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

div{
  background-color: #895EEC;
   height: 667/50rem;
}
img{
	margin-top: 180/50rem;
	height: 86/50rem;
	width: 86/50rem;
}
.start{
	color: #fff;
	font-size: 16/50rem;
}

.foot{
	color: #fff;
	font-size: 12/50rem;
	margin-top: 5rem;
} 
.button{
  font-size: 14/50rem;
}
</style>
