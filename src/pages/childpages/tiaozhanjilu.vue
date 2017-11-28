<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../../assets/images/6yundong/back.png" alt="" /></div>
			<h1>挑 战 记 录</h1>
			<p></p>
		</div>
		
		<div class="container">
			<div class="container_top">
					<p>好友月排行</p>
					<div class="first"><img :src="result[0].img" alt="" /></div>
					<div class="container_paiming">
						<p class="container_left">你的排名</p>
						<p class="container_center">{{result[0].id+1}}</p>
						<p class="container_right">挑战成功: {{result[0].value}}</p>
					</div>
			</div>
			<div class="container_bottom">
				<div class="detail"  v-for="lists in result">
					<p class="left">{{lists.id+1}}</p>
					<img class="detail_img" :src="lists.img" alt="" />
					<p class="left">{{lists.name}}</p>
					<p class="right detail_tiaozhannum">{{lists.value}}</p>
					<p class="right detail_tiaozhan">挑战成功:</p>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'tiaozhanjilu',
		data(){
			return {
				result:[]
			}
		},
		created(){
			/*var curent=this.$HOST+'/data/myjson.json'*/
			this.$axios.get('./static/myjson.json')
			.then(res => {
				console.log(res.data)
				this.result=res.data[0].tiaoZhanJiLu[0].list
				console.log(this.result)
			})
			.catch(error =>{
				console.log(error)
			})
		}
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
	padding: 5% 3% 0;
	box-sizing: border-box;
	background: #F8F8F8;
}
.container_top{
	border: 1px solid #D5D5D5;
	box-shadow: 0px 1px 2px #888888;
	background: #FEFEFE;
	padding-top: 2%;
	box-sizing: border-box;
}
.container_top>p{
	color:#848484;
	font-size: 0.3rem;
}
.container_top>.first{
	padding:  2% 0;
	box-sizing: border-box;
}
.container_top>.first>img{
	width: 1rem;
	margin-left: -4%;
	box-sizing: border-box;
} 
.container_paiming{
	display: flex;
	box-sizing: border-box;
	margin-bottom: 1%;
}
.container_paiming>.container_left,
.container_paiming>.container_center,
.container_paiming>.container_right{
	flex-grow: 1;
	color: #848484;
}
.container_paiming>.container_center{
	font-size: 0.35rem;
	box-sizing: border-box;
	margin-left: 4%;
}

.container_bottom{
	border:1px solid #D9D9D9;
	box-sizing: border-box;
	padding: 0 7%;
}
.container_bottom .detail{
	border-bottom: 1px solid #E7E7E7;
}
.detail{
	overflow: hidden;
	margin-top: 2%;
	box-sizing: border-box;
}
.detail .left{
	float: left;
	display: block;
	height: 1.2rem;
	padding: 0.4rem 0;
	box-sizing: border-box;
}
.detail>img{
	display: block;
	height: 1.2rem;
	float: left;
}
.detail_tiaozhan,.detail_tiaozhannum{
	float: right;
	display: block;
	height: 1.2rem;
	padding: 0.4rem 0;
	box-sizing: border-box;
}


/*内容结束*/

</style>