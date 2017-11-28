<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../assets/images/6yundong/back.png" alt="" /></div>
			<h1>分 享</h1>
			<p></p>
		</div>
		
	
	    <div class="block">
           <swiper :options="swiperOption">
                <swiper-slide>
                    <img class="lunbo" :src="result.container_Top[0].img" alt="">
                </swiper-slide>
                 <swiper-slide>
                    <img class="lunbo" :src="result.container_Top[1].img" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img class="lunbo" :src="result.container_Top[2].img" alt="">
                </swiper-slide> 
      
      	<div class="swiper-pagination"  slot="pagination"></div>
    		</swiper>
        </div>
  		
  		<div class="container">
        <div class="Body" v-for="list in result.container_Bottom">
        	<div class="Body-1">
        		<img class="touxiang" :src="list.touXiang[0].img" alt="" />
        		<span class="names">{{list.name[0].name_Top}}</span>
        		<span class="time">{{list.date[0].date_Bottom}}</span>
        		<p class="qianming">{{list.talk[0].talk_Con}}</p>
        		<div class="shaitu">
        			<img :src="list.picture[0].picture_left" alt="" />
        			<img :src="list.picture[0].picture_center" alt="" />
        			<img :src="list.picture[0].picture_right" alt="" />
        		</div>
        		<img class="zhuanfa" src="../assets/images/14fenxiangjiemian/fenxiangjiemian_09.gif" alt="" />
        		<span class="num-zhuanfa">27</span>
        		<img class="pinglun" src="../assets/images/14fenxiangjiemian/fenxiangjiemian_11.gif" alt="" />
        		<span class="num-pinglun">237</span>
        		<img class="zan" @click="attetion"   src="../assets/images/14fenxiangjiemian/fenxiangjiemian_10.gif" alt="" />
        		<span class="num-zan">{{zanNum}}</span>
        		
            </div>
            
            <div class="Body-1">
            	<img class="touxiang" :src="list.touXiang[1].img" alt="" />
        		<span class="names">{{list.name[1].name_Top}}</span>
        		<span class="time">{{list.date[1].date_Bottom}}</span>
        		<p class="qianming">{{list.talk[1].talk_Con}}</p>
        		<div class="shaitu">
        			<img :src="list.picture[1].picture_left" alt="" />
        			<img :src="list.picture[1].picture_center" alt="" />
        			<img :src="list.picture[1].picture_right" alt="" />
        		</div>
        		<img class="zhuanfa"  src="../assets/images/14fenxiangjiemian/fenxiangjiemian_09.gif" alt="" />
        		<span class="num-zhuanfa">27</span>
        		<img class="pinglun" src="../assets/images/14fenxiangjiemian/fenxiangjiemian_11.gif" alt="" />
        		<span class="num-pinglun">237</span>
        		<img class="zan" @click="attetion"  src="../assets/images/14fenxiangjiemian/fenxiangjiemian_10.gif" alt="" />
        		<span class="num-zan">{{zanNum}}</span>
            </div>
            </div>
            
            <Footers/>
        </div>
      
        
	</div>
</template>
<script>
	import Footers from '../components/footer.vue'
	
	export default{
		name:'fenxiang',
		data(){
			return{
				zanNum:123,
                flag:true,
	            swiperOption: {
		          // swiper options 所有的配置同swiper官方api配置
		          autoplay: 3000,
		          grabCursor: true,
		          setWrapperSize: true,
		          autoHeight: true,
		          pagination: '.swiper-pagination',
		          paginationClickable: true,
		          prevButton: '.swiper-button-prev',
		          nextButton: '.swiper-button-next',
		          mousewheelControl: true,
		          observeParents: true,
		          loop:true,
		          // swiper callbacks
		          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
		          onTransitionStart (swiper) {
		            console.log(swiper.activeIndex)
		          }
	          // more Swiper configs and callbacks...
	          // ...
	        	},
	            result:[],
	            touxiang:[]
			}
			
		},
		components:{
			Footers
		},
		created(){
			/*var curent=this.$HOST+'/data/myjson.json'*/
			this.$axios.get('./static/myjson.json')
			.then(res => {
				this.result=res.data[0].fenXiang[0]
				console.log(this.result)
				
			})
			.catch(error =>{
				console.log(error)
			})
		},
		methods:{
            attetion(){
            	this.flag=!this.flag
            	this.zanNum=parseInt(this.zanNum);
            	if(this.flag){
                   this.zanNum-=1
            	}else{
            		this.zanNum+=1
            	}
            }
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
	/*轮播图---------------*/
  .lunbo{
  	width: 750/2/50rem;
  	height: 400/2/50rem;
  }
  /*------------------------*/
 .container{
 	margin-bottom: 16%;
 	box-sizing: border-box;
 }
 .Body-1{
 	width: 715/2/50rem;
 	height: 475/2/50rem;
 	/*border: 1px solid gold;*/
 	margin-top: 0.1rem;
 	margin-left:17.5/2/50rem;
 	background: url(../assets/images/bei_05.png);
 	background-size: 715/2/50rem 475/2/50rem;
 	position: relative;
 	box-sizing: border-box;
 }

 .touxiang{
 	width: 90/2/50rem;
 	height: 90/2/50rem;
 	position: absolute;
 	top: 45/2/50rem;
 	left: 20/50rem;
 }
 .names{
 	position: absolute;
 	top: 55/2/50rem;
 	left: 155/2/50rem;
 	font-size: 14px;
 }
 .time{
 	position: absolute;
 	left: 155/2/50rem;
 	font-size: 12px;
 	top: 100/2/50rem;
 }
 .qianming{
 	position: absolute;
 	top: 150/2/50rem;
 	left: 60/2/50rem;
 	font-size: 12px;
 }
 .shaitu{
 	width: 650/2/50rem;
 	height:175/2/50rem ;
 	position: absolute;
 	top: 195/2/50rem;
 	left: 60/2/50rem;
 }
 .shaitu img{
 	width: 175/2/50rem;
 	height:175/2/50rem ;
 	display: inline;
 	margin-right: 35/2/50rem;
 	box-sizing: border-box;
 }
 .zhuanfa{
 	width: 15/50rem;
 	height: 15/50rem;
 	position: absolute;
 	top: 400/2/50rem;
 	left: 100/2/50rem;
 }
 .pinglun{
 	width: 15/50rem;
 	height: 15/50rem;
 	position: absolute;
 	top: 400/2/50rem;
 	left: 325/2/50rem;
 }
 .zan{
 	width: 15/50rem;
 	height: 15/50rem;
 	position: absolute;
 	top: 400/2/50rem;
 	left: 540/2/50rem;
 }
 .num-zhuanfa{
 	left: 140/2/50rem;
 	top: 400/2/50rem;
 	position: absolute;
 }
 .num-pinglun{
 	left: 360/2/50rem;
 	top: 400/2/50rem;
 	position: absolute;
 }
 .num-zan{
 	left: 580/2/50rem;
 	top: 400/2/50rem;
 	position: absolute;
 }
 /*.Body-2{
 	width: 715/2/50rem;
 	height: 475/2/50rem;
 	border: 1px solid gold;
 	margin-top: -4/50rem;
 	margin-left:18/2/50rem;
 	background: url(../assets/images/bei_2.png);
 	background-size: 715/2/50rem 475/2/50rem;
 	box-sizing: border-box;
 }*/
 
</style>
