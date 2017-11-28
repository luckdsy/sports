<template>
		
		<div class="foot">
			<ul>
				<router-link tag='li' :to="{path:'yundong'}"><img src="../assets/images/6yundong/yundong_04.png"/></router-link>
				<router-link tag='li' :to="{path:'jiaocheng'}"><img src="../assets/images/6yundong/yundong_09.png"/></router-link>
				<router-link tag='li' :to="{path:'fenxiang'}" ><img src="../assets/images/6yundong/yundong_05.png"/></router-link>
				<router-link tag='li' :to="{path:'wo'}"><img src="../assets/images/6yundong/yundong_06.png"/></router-link>
			</ul>
		</div>
</template>

<script>
	
	export default{
		name:'footer',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang='less'>
/*尾部开始*/
.foot{
	height: 1.2rem;
	width:100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #F6F6F6;
	border-top: 0.03rem solid #E3E3E3;
}
.foot ul{
	overflow: hidden;
}
.foot ul li{
	float: left;
	width: 25%;
	height: 1.2rem;
	text-align: center;
	padding: 3%;
	box-sizing: border-box;
}
.foot ul li img{
	display: inline-block;
	width: 0.5rem;
	height: 0.8rem;
}
/*尾部结束*/
</style>