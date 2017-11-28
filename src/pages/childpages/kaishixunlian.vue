<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../../assets/images/6yundong/back.png" alt="" /></div>
			<h1>开 始 训 练</h1>
			<p>添加课程</p>
		</div>
		<div class="container">
			<p>已选课程</p>
			<router-link tag="div" :to="{path:'jishi'}" class="container_slide" v-for="con in result" 
				v-bind:style="{ 'background-image': 'url(' +con.img+ ')','background-repeat':'no-repeat','background-size':'cover' }">
				<h1>{{con.practice_Name}}</h1>
				<p>{{con.practice_Time}}</p>
			</router-link>
		</div>
		
		<!--<div class="foot">
			<img class="array" src="../../assets/images/9kaishixunlian/putdown.png" alt=""  />
			<p>下滑查看推荐教程</p>
		</div>-->
	</div>
</template>

<script>
	export default{
		name:'kaishixunlian',
		data(){
			return {
				result:[]
			}
		},
		created(){
			var curent=this.$HOST+'/data/myjson.json'
			this.$axios.get(curent)
			.then(res => {
				this.result=res.data.kaiShiXunLian[0].list
				console.log(this.result)
			})
			.catch(error =>{
				console.log(error)
			})
		}
//		methods:{
//
//			onclick:function(event){
//				
//			}
//		}
	}
</script>

<style scoped lang="less">
	
/*头部开始*/

.head{
	background: -webkit-linear-gradient(left, #6257FD, #9D4DFE);
	height: 1rem;
	line-height: 1rem;
	display: flex;
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

/*内容开始*/

.container{
	background-color: #F8F8F8;
	padding: 3%;
}
.container>p{
	font-size: 0.36rem;
	color: #9B6EFE;
	margin: 1% 0 3% 2%;
}
.container .container_slide{
	background: url("../../assets/images/9kaishixunlian/01up.png") no-repeat;
	background-size: 100% 100%;
	box-sizing: border-box;
	padding: 10% 8%;
	border-radius: 2%;
	box-shadow: 0px 0px 7px #888888 ;
	margin-top: 3%;
}
.container_slide>h1{
	color: #757576;
	font-size: 0.4rem;
	font-weight: 500;
	text-align: left;
}
.container_slide>p{
	color: #757576;
	margin-top: 5%;
	font-size: 0.22rem;
	text-align: left;
}

/*内容结束*/

/*尾部开始*/
/*.foot{
	text-align: center;
	box-sizing: border-box;
	padding: 2% 0;
}
.foot .array{
	width: 5%;
}
.foot>p{
	box-sizing: border-box;
	margin-top: 2%;
	color: #BDBDBD;
}*/
/*尾部结束*/

</style>