<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../assets/images/6yundong/back.png" alt="" /></div>
			<h1>运 动</h1>
			<p></p>
			<router-link :to="{path:'yundongguiji'}"><img class="eye" src="../assets/images/98jishi/jishi_01.png" alt="" /></router-link>
		</div>
		<div class="Body">
			<img class="img-jishi" src="../assets/images/98jishi/jishi_02.png" alt="" />
			<span class="Time">00:{{fen}}:{{miao}}</span>
			<span class="juli">4.2km</span>
			<img class="img-bottom" src="../assets/images/98jishi/jishi_05.png" alt="" />
			<img class="img-sudu" src="../assets/images/98jishi/jishi_04.png" alt="" />
			<p class="p-sudu">7.9</p>
			<p class="p-danwei">km/h</p>
			<img class="img-zanting" src="../assets/images/98jishi/jishi_03.png" alt="" />
			<span class="zanting" @click='start'>开始</span>
			<img class="img-nengliang" src="../assets/images/98jishi/jishi_04.png" alt="" />
			<p class="p-nl">213</p>
			<p class="p-kcal">kcal</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'jishi',
		data(){
			return{
                flag:true,
                miao:0,
                fen:0,
                interval:null   
			}
		},
		methods:{
			start:function(event){
				console.log(event)
				if(event.target.innerText == '开始'){
					event.target.innerText ='暂停';
	       		  var self = this;
	       		  console.log(self)
			      this.interval = window.setInterval(function(){
			      self.miao ++;
		          if (self.miao>= 60) {
		            self.fen++;
		            self.miao=0;
		          }
		        },1000);
		
				}else{
					event.target.innerText ='开始'
					clearInterval(this.interval);
					this.interval = null;
				}
			
			}
		}
	}
</script>

<style scoped="" lang="less">
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

	.eye{
		width: 42/2/50rem;
		height: 25/2/50rem;
		position: absolute;
		right: 30/2/50rem;
		top: 30/2/50rem;
	}
	.Body{
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		position: relative;
	}
	.img-jishi{
		width: 462/2/50rem;
		height: 462/2/50rem;
		position: absolute;
		top: 185/2/50rem;
		left: 145/2/50rem;
	}
	.Time{
		font-size: 28px;
		position: absolute;
		top: 390/2/50rem;
		left: 275/2/50rem;
	}
	.juli{
		font-size: 15px;
		position: absolute;
		top: 495/2/50rem;
		left: 350/2/50rem;
	}
	.img-bottom{
		width: 100%;
		height: 273/2/50rem;
		position: absolute;
		top: 9.7rem;
		left: 0;
	}
	.img-sudu{
		width: 120/2/50rem;
		height: 120/2/50rem;
		position: absolute;
		top: 910/2/50rem;
		left: 70/2/50rem;
	}
	.p-sudu{
		position: absolute;
		top:940/2/50rem;
		left: 110/2/50rem;
		font-size: 14px;
		color: #7666FC;
	}
	.p-danwei{
		position: absolute;
		top: 990/2/50rem;
		left: 110/2/50rem;
		font-size: 12px;
		color: white;
	}
	.img-zanting{
		width: 200/2/50rem;
		height: 200/2/50rem;
		position: absolute;
		top: 830/2/50rem;
		left: 290/2/50rem;
	}
	.zanting{
		font-size: 20px;
		top: 910/2/50rem;
		left: 350/2/50rem;
		position: absolute;
		color: #FFFFFF;
	}
	.img-nengliang{
		width: 120/2/50rem;
		height: 120/2/50rem;
		position: absolute;
		top: 905/2/50rem;
		left: 565/2/50rem;
	}
	.p-nl{
		position: absolute;
		font-size: 14px;
		color: #7666FC;
		top:930/2/50rem;
		left: 605/2/50rem;
	}
	.p-kcal{
		position: absolute;
		top: 990/2/50rem;
		left: 605/2/50rem;
		font-size: 12px;
		color: white;
	}
</style>