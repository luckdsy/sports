<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../assets/images/6yundong/back.png" alt="" /></div>
			<h1>我</h1>
			<p></p>
		</div>
		
		<div class="Body">
			<img class="img-1" src="../assets/images/15wo/wo_03.png" alt="" />
			<div class="Top">
				<img class="Top-touxiang" src="../assets/images/14fenxiangjiemian/fenxiangjiemian_12.gif" alt="" />
				<span class="name">小苹果</span>
				<span class="num-fensi">169</span>
				<span class="fensi">粉丝</span>
				<span class="num-guanzhu">5</span>
				<span class="guanzhu">关注</span>
				<span class="num-fenxiang">69</span>
				<span class="fenxiang">分享</span>
				<p class="qianming">生活像永不停转的磨盘，一点点碾碎希望</p>
			</div>
			
			<el-collapse v-model="activeNames">
				<el-collapse-item title="个人动态" name="1" class="grdt">
					<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
					<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				</el-collapse-item>
				<el-collapse-item title="运动等级" name="2">
					<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
					<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
				</el-collapse-item>
				<el-collapse-item title="我的勋章" name="3">
					<div>简化流程：设计简洁直观的操作流程；</div>
					<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
					<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</el-collapse-item>
			
			</el-collapse>
			
		</div>
		<!---------------Foot------------------->
		<Footers/>
	</div>
</template>

<script>
	import Footers from '../components/footer.vue'
	
	export default{
		name:'jishi',
		data(){
			return{
                activeNames: []   
			}
		},
		components:{
			Footers
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
	/*------------Body---------------*/
	.Body{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		position: relative;
	}
	.img-1{
		width: 100%;
		
	}
	.Top{
		width: 710/2/50rem;
		height: 200/2/50rem;
		background-color: #FFFFFF;
		position: absolute;
		top:205/2/50rem;
		left: 18/2/50rem;
		border-radius:6px;
		box-shadow:0 0 3px #D0D0D0 ;
	}
	.Top-touxiang{
		width: 90/2/50rem;
 	    height: 90/2/50rem;
	 	position: absolute;
	 	top: 35/2/50rem;
	 	left: 20/50rem;
	}
	.name{
		position: absolute;
	 	top: 45/2/50rem;
	 	left: 155/2/50rem;
	 	font-size: 14px;
	}
	.num-fensi{
		position: absolute;
	 	top: 90/2/50rem;
	 	left: 155/2/50rem;
	 	font-size: 12px;
	}
	.fensi{
		position: absolute;
	 	top: 90/2/50rem;
	 	left: 200/2/50rem;
	 	font-size: 12px;
	}
	.num-guanzhu{
		position: absolute;
	 	top: 90/2/50rem;
	 	left: 280/2/50rem;
	 	font-size: 12px;
	}
	.guanzhu{
		position: absolute;
	 	top: 90/2/50rem;
	 	left: 300/2/50rem;
	 	font-size: 12px;
	}
	.num-fenxiang{
		position: absolute;
	 	top: 90/2/50rem;
	 	left: 380/2/50rem;
	 	font-size: 12px;
	}
	.Top .fenxiang{
		position: absolute;
	 	top: 90/2/50rem;
	 	left: 410/2/50rem;
	 	font-size: 12px;
	}
	.qianming{
 	position: absolute;
 	top: 135/2/50rem;
 	left: 155/2/50rem;
 	font-size: 12px;
 }
 
 /*----------------------element-------------------*/
    .el-collapse {
    	position: absolute;
    	top: 430/2/50rem;
		left: 18/2/50rem;
    	width: 710/2/50rem;
		height: 88/2/50rem;
    }
    .el-collapse-item__header{
    	padding-left: 40/2/50rem;
    }
    /*----------------------element-------------------*/
 
 
	
</style>