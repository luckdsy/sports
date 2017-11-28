<template>
  <div class="map" id="box">
    <div class="head">
      <div class="head_img"><img onclick="window.history.go(-1)" src="../assets/images/6yundong/back.png" alt="" /></div>
      <h1>运 动 轨 迹</h1>
      <p></p>
      </div>
     <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15"  :scroll-wheel-zoom="true">
 
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-view style="position: absolute; top: 50px; bottom: 320px; left: 10px; right: 10px"></bm-view>
     
    </baidu-map>
    <div class="my">
      <div class="user">
      <img src="../assets/images/99ditu/map01.png"  alt="">
 
      <a href="#">一夜北风吹</a>
      <span>24岁 北京</span>
      </div>
      <div class="jilu">
       <img src="../assets/images/99ditu/map03.png"   alt=""><b>5.15km</b><br>
       <div class="sc">
         <div><p>20:12</p><span>时长</span></div>
         <div><p>08.28</p><span>平均速度(km/h)</span></div>
         <div><p>15.28</p><span>最高速度(km/h)</span></div>
         
       </div>
      <router-link :to="{path:'fenxiang'}" href="javascript:;" class="share">分享</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'map',
  data () {
    return {
     
     }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.map{
  height: 300px;



}

.my{
  background-color: #fff;
  color: #B4B4B4;
    .user{
      img{
        width: 65px;
        height: 65px;
        border: 12px solid #fff;
        border-radius: 50%;
        border-bottom: none;
        margin-top: -20px;
        position: relative;
        z-index: 666;
      }
      span,a{
        display: block;
        padding: 5px 0;
      }
      span{
        font-size: 12px;
      }
    }
  .jilu{
    height: 165px;
    width: 100%;
    background-color: #8C58FF;
    img{
      border:none;
      width: 35px;
      height: 31px;
      margin-top: 20px;
    }
    b{
      font-size: 30px;
      line-height: 30px;
      color: #fff;
      position: relative;
      top: -5px;
      margin-left: 5px;
    }

  }
  .sc{
    height: 55px;
    div{
      display: inline-block;
      text-align: center;
      padding:0 15px; 
      p{
        color: #fff;
        font-size: 18px;
      }
      span{
        font-size: 12px;
        color: #D2BDFE;
        
      }
    }
  }
  .share{
    display: block;
    width: 300px;
    height: 40px;
    background-color: #fff;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    border-radius: 5px;

  }
}

</style>
