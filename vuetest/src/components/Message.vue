<template>
    <div class="wrap">
        <div class="article">
            <swiper class="swiper" :options="swiperOption__1">
                <swiper-slide class="swiperSlide">
                    <div class="slide__item">
                        <h1>문자발송</h1>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiperSlide">
                    <div class="slide__item">
                        <h1>주소록</h1>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiperSlide">
                    <div class="slide__item">
                        <h1>발송함</h1>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiperSlide">
                    <div class="slide__item">
                        <h1>충전소</h1>
                    </div>
                </swiper-slide>
            </swiper>
            <swiper class="swiper__banner" :options="swiperOption__2">
                <swiper-slide class="swiperSlide__banner">
                    <div class="slide__banner">
                        <img src="https://static.welaaa.co.kr/images/20606-6-1622003027838.jpg">
                    </div>
                </swiper-slide>
                <swiper-slide class="swiperSlide__banner">
                    <div class="slide__banner">
                        <img src="https://static.welaaa.co.kr/images/20606-6-1622003027838.jpg">
                    </div>
                </swiper-slide>
                <swiper-slide class="swiperSlide__banner">
                    <div class="slide__banner">
                        <img src="https://static.welaaa.co.kr/images/20606-6-1622003027838.jpg">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Message',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption__1: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption__2: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.article {
    width: 100%;
    height: 100%;
}
.swiperSlide {
    display: flex;
    height: 400px;
    justify-content: center;
    align-items: center;
}
.slide__item {
    display: flex;
    width: 45%;
    height: 85%;
    background-color: darkorange;
    border-radius: 5%;
    justify-content: center;
    align-items: center;
}
.swiper__banner {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.swiperSlide__banner {
}
</style>
