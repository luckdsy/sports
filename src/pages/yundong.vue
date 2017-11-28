<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../assets/images/6yundong/back.png" alt="" /></div>
			<h1>运 动</h1>
			<p></p>
		</div>
		<div class="container">
			<div class="top_lunbo">
				<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
				    <swiper-slide><img :src="result[0].lunBoImg" alt="" /></swiper-slide>
				    <swiper-slide><img :src="result[1].lunBoImg" alt="" /></swiper-slide>
				    <swiper-slide><img :src="result[2].lunBoImg" alt="" /></swiper-slide>
				    <div class="swiper-scrollbar"   slot="scrollbar"></div>
				 </swiper>
			</div>
			<router-link tag="div" :to="{path:'yundongjilu'}" class="middle_yundong"><img src="../assets/images/6yundong/yundong_07.png" alt="" /></router-link>
			<router-link tag="div" :to="{path:'tiaozhanjilu'}" class="bottom_tiaozhan"><img src="../assets/images/6yundong/yundong_10.png" alt="" /></router-link>
			<router-link tag="div" :to="{path:'kaishixunlian'}" class="kaishi">开始训练</router-link>
		</div>
		<Footers/>
	</div>
</template>

<script>
	import Footers from '../components/footer'
	export default{
		name:'yundong',
		data(){
			return {
				result:[],
				// notNextTick: true,
			    swiperOption: {
			          // swiper options 所有的配置同swiper官方api配置
			        autoplay: 3000,
			        grabCursor: true,
			        setWrapperSize: true,
			        autoHeight: true,
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        // prevButton: '.swiper-button-prev',
			        // nextButton: '.swiper-button-next',
			        // scrollbar: '.swiper-scrollbar',
			        // mousewheelControl: true,
			        observeParents: true,
			        loop:true
			    }

			}
		},
		components:{
			Footers
		},
		created(){
			/*var curent=this.$HOST+'/data/myjson.json'*/
			this.$axios.get('./static/myjson.json')
			.then(res => {
				console.log(res.data)
				this.result=res.data[0].yunDong[0].yunDong_lunBo
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
	box-sizing: border-box;
}
.head_img{
	display: inline-block;
	height: 0.5rem;
	width: 1rem;
	flex-grow: 1;
	text-align: center;
	margin-left: -5.5%;
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
	flex-grow: 1;
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
	height: 11.14rem; 
	background-color: #F8F8F8;
}
.top_lunbo{
	box-sizing: border-box;
	padding-top: 0.3rem;
	text-align: center;
	margin-bottom: 0.2rem;
}
.top_lunbo img{
	display: inline-block;
	width: 90%;
	height: 4rem;
}
.middle_yundong{
	box-sizing: border-box;
	text-align: center;
}
.middle_yundong>img{
	display: inline-block;
	width: 95%;
	height: 2.5rem;
	border-radius: 3%;
	box-shadow: 0px 0px 7px #888888;
}
.bottom_tiaozhan{
	box-sizing: border-box;
	text-align: center;
}
.bottom_tiaozhan>img{
	display: inline-block;
	width: 95%;
	margin-top: 0.15rem;
	height: 2.5rem;
	border-radius: 3%;
	box-shadow: 0px 0px 7px #888888 ;
}
.kaishi{
	width: 80%;
	text-align: center;
	margin:0.25rem auto;
	padding: 0.2rem 0rem;
	box-sizing: border-box;
	border: 0.03rem solid #A38BDA;
	border-radius: 0.2rem;
	color:#A38BDA;
	font-size: 0.42rem;
}

/*内容结束*/

</style>