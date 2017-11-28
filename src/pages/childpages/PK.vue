<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../../assets/images/6yundong/back.png" alt="" /></div>
			<h1>房间201</h1>
			<p></p>
		</div>
		<div class="vs">
			<div class="vs-head">
				<img src="../../assets/images/13PKjiemian/PKjiemian_07.png" alt="" />
				<img src="../../assets/images/13PKjiemian/head01.png" alt="" />
				<img src="../../assets/images/13PKjiemian/head02.png" alt="" />
			</div>
			
			<div class="vs-people">
				<span>
					<img src="../../assets/images/13PKjiemian/PKjiemian_01.png" alt="" />	
					<b>跑步达人5人</b>
				</span>
				<img src="../../assets/images/13PKjiemian/PKjiemian_02.png" alt="" />
				<img src="../../assets/images/13PKjiemian/PKjiemian_03.png" alt="" />
				<img src="../../assets/images/13PKjiemian/PKjiemian_04.png" alt="" />
				<img src="../../assets/images/13PKjiemian/PKjiemian_05.png" alt="" />
			</div>						
		</div>
		
		<div class="vs-rule">
			<p>比赛规则</p>
			<p>1:人数要求2-5人可参赛</p>
			<p>2:在最短的时间内跑完5公里即可获得胜利</p>
			<p>(奖励:获得50点经验并赢得对手的一枚勋章)</p>
		</div>
		
		<div class="vs-over"><a href="#">结束挑战</a></div>
		
		
	</div>
</template>

<script>
	export default{
		name:'PK',
		data(){
			return{
				
			}
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
.vs{
	margin:0.4rem 0.2rem ;
	background: #fff;
}
.vs .vs-head{
	padding: 0.4rem 58/50rem;
	box-sizing: border-box;
}
.vs .vs-head img:nth-child(1){
	display: block;
	width: 100%;
	position: relative;
}
.vs .vs-head img:nth-child(2){
	width: 1.84rem;
    height: 1.84rem;
    position: absolute;
    left: 210/50rem;
    top: 15%;
}
.vs .vs-head img:nth-child(3){
	width: 1.84rem;
    height: 1.84rem;
    position: absolute;
    left: 73/50rem;
    top:35%;
}
.vs .vs-people span{
	vertical-align: top;
	display: inline-block;
	width:80/50rem;
	height: 32/50rem;
	border-radius: 0.4rem;
	background: #D8D5D0;
	margin-bottom: 15/50rem;
	position: relative;
}
.vs .vs-people span b{
	position: absolute;
	top: 4/50rem;
	font-size: 0.2rem;
}
.vs .vs-people img{
	display: inline-block;
	width: 32/50rem;
	height: 32/50rem;
}
.vs .vs-people img:first-child{
	position: absolute;
	left: 0;
}
 .vs-rule{
	width: 275/50rem;
	height: 161/50rem;
	margin: 0.15rem auto;
	background: #fff;
	text-align: left;
	padding-top:30/50rem ;
	padding-left: 45/50rem;
	box-sizing: border-box;
	font-size: 12/50rem;
	line-height: 20/50rem;
	position: relative;
	color: #A7A39E;
	
}
.vs-rule p:nth-child(1){
	text-align: center;
	line-height: 40px;
	font-weight: 700;
	font-size: 18/50rem;	
}

.vs-over a{
	display: block;
	width: 125/50rem;
	height: 33/50rem;
	border-radius: 8/50rem;
	position: absolute;
	left: 50%;
	transform:translate(-125/100rem);
	bottom: 77/50rem;
	background:#9D4BFE ;
	text-align: center;
	line-height: 33/50rem;
	font-size: 18/50rem;
	color: #fff;	
	
}

</style>