<template>
  <div class="yindaoye">
      <swiper :options="swiperOption">
            <swiper-slide>
              <img src="../assets/images/2yindaoye1/引导页1_03.png"   alt="">
        <h3>科学锻炼</h3>
        <p>多位资深教练亲力师范动作，并运用科学的时间，强度安排，为您定制适合的课程。</p>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/3yindaoye2/引导页2_03.png"   alt="">
        <h3>挑战系统</h3>
        <p>进入挑战模式，与其他i动运动者一起挑战跑步极限，尽享运动带来的非凡感受。</p>
            </swiper-slide>
          
            <swiper-slide>
            
              <img src="../assets/images/4yindaoye3/引导页3_03.png"   alt="">
        <h3><router-link  :to="{path:'/login/'}" class="button">加入 i 动 </router-link></h3>
          
        <p>丰富的勋章系统，令您在完成运动目标的同时，增加一枚属于您自己的"军功章"。</p>

       
            </swiper-slide>
          
            <div class="swiper-pagination circles"  slot="pagination"></div>
           
          </swiper>
     <!-- <div class="banner1">
        <img src="../assets/images/images/2yindaoye1/引导页1_03.png"   alt="">
        <h3>科学锻炼</h3>
        <p>多位资深教练亲力师范动作，并运用科学的时间，强度安排，为您定制适合的课程。</p>
         </div> -->
  </div>
</template>

<script>
export default {
  name: 'yindaoye',
  data () {
    return {
     swiperOption: {
            autoplay: 5000,
            grabCursor: true,
            setWrapperSize: true,
            autoHeight: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            observeParents: true,
            loop:false,
          }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.yindaoye{
    height: 667/50rem;
}
img{
  width: 220/50rem;
  height: 170/50rem;
  margin-top: 130/50rem;
}
h3{
  margin-top: 130/50rem;
  font-size: 26/50rem;
  font-weight: normal;
  color: #C8C8C8;
}

p{
  color: #C8C8C8;
  font-size: 12/50rem;
  width: 250/50rem;
  margin: 0 auto;
  margin-top: 20/50rem;
  line-height: 15/50rem;
}
.button{
  border: 3px solid #D7B3BE;
  border-radius: 20px;
  margin-top: 80/50rem;
  font-size: 26/50rem;
  font-weight: normal;
  color: #fff;
  padding: 5px 20px;
  text-decoration: none;
 background-color: #895EEC;
  margin: 0 auto;
}
.circles{
position: relative;
top:11/50rem;
height: 30/50rem;
margin-top: 60/50rem;
}
</style>
