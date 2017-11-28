<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../assets/images/6yundong/back.png" alt="" /></div>
			<h1>教 程</h1>
			<p></p>
		</div>
		<div>
			<img src="../assets/images/10jiaocheng/jiaocheng_01.png" class="jc-logo">
		</div>
		
		<div class="jc-list">
			<router-link :to='{path:"zhengzaixunlian"}' tag='div'>
				<img src="../assets/images/10jiaocheng/jiaocheng_02.png" alt="" />
				<h3>定制</h3>
			</router-link>
			<router-link :to='{path:"music"}' tag='div'>
				<img src="../assets/images/10jiaocheng/jiaocheng_04.png" alt="" />
				<h3>音乐库</h3>
			</router-link>
			<router-link :to='{path:"pk"}' tag='div'>
				<img src="../assets/images/10jiaocheng/jiaocheng_03.png" alt="" />
				<h3>挑战</h3>
			</router-link>
		</div>
		
		<div class="jc-all">
			<h2>全部课程</h2>
			<div class="jc-fenlei">
				<router-link tag="div" :to="{path:'zhengzaixunlian'}"><img src="../assets/images/10jiaocheng/jiaocheng_05.png" alt="" /></router-link>
				<router-link tag="div" :to="{path:'jishi'}"><img src="../assets/images/10jiaocheng/jiaocheng_06.png" alt="" /></router-link>
				<router-link tag="div" :to="{path:'zhengzaixunlian'}"><img src="../assets/images/10jiaocheng/jiaocheng_06.png" alt="" /></router-link>
				<router-link tag="div" :to="{path:'zhengzaixunlian'}"><img src="../assets/images/10jiaocheng/jiaocheng_06.png" alt="" /></router-link>
				<router-link tag="div" :to="{path:'jishi'}"><img src="../assets/images/10jiaocheng/jiaocheng_06.png" alt="" /></router-link>
				<router-link tag="div" :to="{path:'jishi'}"><img src="../assets/images/10jiaocheng/jiaocheng_06.png" alt="" /></router-link>
				
			</div>
		</div>
		<Footers/>
	</div>
	
</template>

<script>
	import Footers from '../components/footer.vue'

	export default{
		name:'jiaocheng',
		data(){
			return{

			}
		},
		components:{
			Footers
		}
	}
</script>

<style scoped lang='less'>
/*头部开始*/

.head{
	background: -webkit-linear-gradient(left, #6257FD, #9D4DFE);
	height: 1rem;
	line-height: 1rem;
	display: flex;
	box-sizing: border-box;
}
.head_img{
	display: inline-block;
	flex-grow: 1;
	text-align: center;
}
.head_img>img{
	display: inline-block;
	width: 0.5rem;
	height: 0.5rem;
	vertical-align: middle;
}
.head>h1{
	display: inline-block;
	color: white;
	font-size: 0.37rem;
	flex-grow: 5;
	text-align: center;
}
.head>p{
	display: inline-block;
	flex-grow: 1;
	text-align: center;
	color: #D8B7FE;
	font-size: 0.28rem;
}

/*头部结束*/

.jc-logo{
	width: 100%;
}
.jc-list{
	 padding-bottom: 0.2rem;
	 padding-top: 0.2rem;
	 box-sizing: border-box;
	 overflow: hidden;
	 display: flex;
}
.jc-list div{
	float: left;
	margin:0 0.85rem;
	flex-grow: 1;
}
.jc-list div img{
	display: block;
	margin-bottom: 0.2rem;
	width: 33/50rem;
	height: 33/50rem;
}
.jc-list div:nth-child(2) img{
	margin-left: 7/50rem;
}
.jc-list div h3{
	font-size: 16/50rem;
	text-align: left;
}
.jc-all{
	margin: 0 0.2rem;
	background: #FFFFFF;
	box-sizing: border-box;
}
.jc-all h2{
	text-align: center;
	padding: 13/50rem 0;
	color:#9D4BFE ;
	font-size: 20/50rem;
	
}
.jc-all .jc-fenlei{
	overflow: hidden;
	height: 470/50rem;
}
.jc-all .jc-fenlei div{
	box-sizing: border-box;
	padding: 0 0.2rem 0.2rem 0.2rem;
	width: 50%;
	height: 2.7rem;
	display: flex;
	float: left;	
}
.jc-all .jc-fenlei div img {
	width: 100%;
}


</style>