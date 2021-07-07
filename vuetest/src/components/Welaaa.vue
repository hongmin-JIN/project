<template>
  <div class="wrap">
    <Header/>
    <div class="container">
      <div class="swiper__section">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide class="swiper-slide">
            <img src="https://static.welaaa.co.kr/images/20637-6-1622109843707.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20723-6-1622419834817.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20643-6-1622161088914.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20531-6-1621816567061.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20641-6-1622160881505.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20606-6-1622003027838.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20733-6-1622445920097.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20593-6-1621987817895.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20612-6-1622073741262.jpg">
          </swiper-slide>
          <swiper-slide>
            <img src="https://static.welaaa.co.kr/images/20729-6-1622439419885.jpg">
          </swiper-slide>
        </swiper>
      </div>
      <div class="footer">
        <div class="footer__container">
          <div class="footer__title">
            <span>당신만을 위한 윌라의 선택, 추천 오디오북!</span>
          </div>
          <div class="footer__swiper">
            <swiper class="footer__swiper" :options="swiperOption__1">
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20585-2-1621916556496.jpg">
                <span>교보문고, Yes24 베스트셀러<br> 종합 1위! 전 세계를 매료시킨<br>'최소의 힐링 판타지'</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20586-2-1621916675428.jpg">
                <span>이번엔 사극이다! 윌라<br>시그니처 오디오북 최초의<br>사극</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20587-2-1621916700796.jpg">
                <span>윌라 시그니처 오디오북<br>최초의 사극</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20669-2-1622187958509.jpg">
                <span>오디오북으로 다시 만나는<br>세계적인 고전</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20211-2-1619743828331.jpg">
                <span>하나야 보석점 살인사건을<br>둘러싼 과거와 미래의 사건</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20231-2-1619744403279.jpg">
                <span>상상력의 거장 베르나르<br>베르베르가 그린"죽음"의<br>세계</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20221-2-1619744040902.jpg">
                <span>추리 소설의 절대 고전,셜록<br>홈즈 시리즈!</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20232-2-1619744441166.jpg">
                <span>상상력의 거장 베르나르<br>베르베르가 그린"죽음"의<br>세계 완결편</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20508-2-1621474487476.jpg">
                <span>오랫동안 당연하게 여겨왔던<br>가정을 의심하라</span>
              </swiper-slide>
              <swiper-slide class="footer__swiper-slide">
                <img src="https://static.welaaa.co.kr/images/20167-2-1619574212458.jpg">
                <span>국내 최초의 펀드 매니저<br>강방천의 투자 철학과</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>
<script>
import Header from './Header'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Welaaa',
  components: {
    Swiper,
    SwiperSlide,
    Header
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1.3,
        spaceBetween: 50,
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
      swiperOption__1: {
        slidesPerView: 6,
        spaceBetween: 10,
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
.wrap {
  width: 100%;
  height: 100%;
  min-width: 1920px;
}
.wrap__section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.swiper__section {
  display: flex;
  justify-content: space-around;
  height: 100%;
}
.swiper__section img {
  width: 1460px;
  height: 500px;
}
.swiper-container {
  height: 100%;
}
.footer__title {
  display: flex;
  font-size: 22px;
  font-weight: 600;
  width: 1400px;
  height: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: left;
  margin: auto;
}
.footer__title span {
  padding-top: 40px;
}
.footer__swiper {
  display: flex;
  width: 1400px;
  height: 400px;
  margin: auto;
  justify-content: space-between;
}
.footer__swiper-slide {
  width: 225px;
  height: 360px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-sizing: border-box;
}
.footer__swiper-slide img {
  width : 180px;
  height: 260px;
  padding: 15px 15px 5px
}
.footer__swiper-slide span {
  font-size: 16px;
  font-weight: bold;
  color: #656565;
}
</style>
