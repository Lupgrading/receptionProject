<template>
  <!--banner轮播-->
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    //监听bannnerList数据的变化：因为这条数据发生过变化----由空数组变为数据里面有四个元素
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        //现在咱们通过watch监听bannerList属性的属性值的变化
        //如果执行handler方法，代表组件实例身上这个属性的属性已经有了【数组：四个元素】
        //当前这个函数执行：智能保证bannerList数据已经有了，但是你没办法保证v-for已经执行结束了
        //v-for执行完毕，才有结构【你现在在watch当中没办法保证的】
        //nextTick：
        this.$nextTick(() => {
          //当执行这个回调的时候：保证服务器数据回来了，v-for执行完毕了【轮播图的结构已经有了】
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            loop: true,
            //如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //短句小球的时候也切换图片
              clickable: true,
            }, //如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped></style>
