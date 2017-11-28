<template>
  <div>
    <div class="head">
      <div class="head_img"><img onclick="window.history.go(-1)" src="../../assets/images/6yundong/back.png" alt="" /></div>
      <h1>音 乐</h1>
      <p></p>
    </div>
  
    <div class="music">
      <img :src="music[musicid].img" alt="" />
      <div class="music-audio">
        <audio :src="music[musicid].url"  controls="controls"  ></audio>
        <span  class="next" @click="next">下一首</span>
      </div>
      
    </div>
     
  </div>
</template>

<script>

export default {
    name: 'music',
    data(){
        return{
          playingsongs:{},
          musicid:0,   
          "music":[
          {
            "id":1,
            "name": "Apologize",
            "singer":"Timbaland Remix",
            "img":"http://picture.youth.cn/qtdb/201607/W020160731391046696168.jpg",
            "url": "http://www.egtch.com/t_works/Vuedata/Apologize (Timbaland Remix).mp3"
          },
          {
            "id":2,
            "name": "Hero",
            "singer":"Enrique Iglesias",
            "img":"http://www.egtch.com/t_works/Vuedata/hero.jpg",
            "url": "http://www.egtch.com/t_works/Vuedata/Hero.mp3"
          },
          {
            "id":3,
            "name": "I AM YOU",
            "singer":"Kim Taylor",
            "img":"http://pic1.5442.com:82/2015/0806/06/03.jpg%21960.jpg",
            "url": "http://www.egtch.com/t_works/Vuedata/I Am You.mp3"
          }
      ]
        }
    } ,
    methods:{
      next(){
        console.log("11")
        this.musicid += 1;
        console.log(this.musicid)
        if(this.musicid>2){
          this.musicid=0
        }
      }
    } 
    
}
</script>

<style lang='less' scoped>

.music{
  width: 100%;
  height: 10rem;
  display: flexd;
}
.music img{
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
}
.music-audio{
  float: left;
  width: 100%;
  height: 48/50rem;
  position: relative;
}
.music-audio>audio{
  position: absolute;
  left:0rem;
}
.music-audio span{
  position: absolute;
  top:0.35rem;
  right:0.45rem;
}
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


</style>
