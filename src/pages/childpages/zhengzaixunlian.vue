<template>	
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../../assets/images/6yundong/back.png" alt="" /></div>
			<h1>正在训练</h1>
			<p></p>
		</div>
		<div class="fuwocheng" v-for='list in result'>
			<div class="yangwohoucheng">
				<img src="../../assets/images/11jiaochengbofang/jiaochengbofang_01.png" alt="" />
				<span>{{list.title}}</span>
			</div>
			<div class="fwc-video">
				<video controls="controls"  :poster="list.poster"  loop="loop">
					<source :src="list.source"/>
				</video>
			</div>
			<div class="fwc-wenzi">
				<p>{{list.text1}}</p>
				<p>{{list.text2}}</p>
				<p>{{list.text3}}</p>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'zhenggzaixunlian',
		data(){
			return{
				result:[]
				
			}
		},
		created(){
			/*var curent=this.$HOST+'/data/myjson.json'*/
			this.$axios.get('./static/myjson.json')
			.then(res => {
				
				this.result=res.data[0].ZhengZaiXunLian[0].video
				console.log(this.result)
			})
			.catch(error =>{
				console.log(error)
			})
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

.fuwocheng{
	background: #fff;
	margin: 22/50rem 10/50rem;
}
.fuwocheng .yangwohoucheng{
	box-sizing: border-box;
	padding: 13/50rem 0;
	position: relative;
}
.fuwocheng .yangwohoucheng img{
	position: absolute;
	top: 20/50rem;
	left: 0;
	width: 80/50rem;
	height: 30/50rem;
}
.fuwocheng .yangwohoucheng span{
	color: #fff;
	position: absolute;
	font-size: 16/50rem;
	left: 5/50rem;
	top: 28/50rem;
}
.fuwocheng .fwc-video{
	margin-top: 0.8rem;
	
}
.fuwocheng .fwc-video video{
	width: 100%;
	height: 240/50rem;
}
.fwc-wenzi{
	padding: 35/50rem 0;
	text-align: center;
	
}
.fwc-wenzi p{
	line-height:34/50rem;
	font-size: 14/50rem;
}
.fwc-wenzi p:nth-child(2){
	font-size: 22/50rem;
	color: #9D4BFE;
}
</style>