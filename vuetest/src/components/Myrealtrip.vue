<template>
    <div class="wrap">
        <div class="header">
            <div class="header__top">
                <div class="header__top__gnb">
                    <div class="header__top__gnb--logo">
                        <img src="https://dffoxz5he03rp.cloudfront.net/build/production/1e7b90ea4c072e6c305cd011e827f384d2b23f3b/203bb94a1437a3d33bca75e5e77ab705.png">
                    </div>
                    <div class="header__top__gnb--engine">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPHBhdGggZD0iTTguNjY3IDE0LjU4M2E1LjkxNSA1LjkxNSAwIDAgMCA1LjkxNi01LjkxNkE1LjkxNSA1LjkxNSAwIDAgMCA4LjY2NyAyLjc1IDUuOTE1IDUuOTE1IDAgMCAwIDIuNzUgOC42NjdhNS45MTUgNS45MTUgMCAwIDAgNS45MTcgNS45MTZ6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTMuMTExIDEzLjExMWw0LjQ0NSA0LjQ0NSIvPgogICAgPC9nPgo8L3N2Zz4K">
                        <input type="text" placeholder="도시나 상품을 검색해보세요">
                    </div>
                    <div class="header__top__gnb--login">
                        <div class="header__top__login--partner">파트너 등록하기</div>
                        <div class="header__top__login--login">로그인</div>
                        <a class="header__top__login--join">회원가입</a>
                    </div>
                </div>
            </div>
            <div class="header__bottom">
                <div class="header__bottom__gnb">
                    <nav class="header__bottom__gnb--menu">
                        <a href="#">
                        <img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/49_original_1608700445.png?1608700445">
                        <span>항공권</span>
                        </a>
                    </nav>
                    <nav class="header__bottom__gnb--menu">
                        <img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/50_original_1608701561.png?1608701561">
                        <span>숙소</span>
                    </nav>
                    <nav class="header__bottom__gnb--menu">
                        <img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/52_original_1608701643.png?1608701643">
                        <span>렌터카・교통</span>
                    </nav>
                    <nav class="header__bottom__gnb--menu">
                        <img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/18_original_1592284955.png?1592284955">
                        <span>투어・티켓</span>
                    </nav>
                    <div class="header__bottom__gnb--menu--blank"></div>
                    <nav class="header__bottom__gnb--menu">
                        <span>랜선투어</span>
                    </nav>
                    <nav class="header__bottom__gnb--menu">
                        <span>할인혜택</span>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Welaaa',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
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
}
.header {
    border-bottom: 1px solid #c6c6c6;
    border-width: 100%;
}
.header__top {
    display: flex;
    width: 100%;
    height: 80px;
}
.header__top__gnb {
    display: flex;
    width: 1100px;
    height: 80px;
    margin: auto;
    align-items: center;
}
.header__top__gnb--logo {
    width: 20%;
}
.header__top__gnb--logo img {
    width: 130px;
    height: 30px;
}
.header__top__gnb--engine {
    width: 35%;
    position: relative;
    margin-left: 24px;
    padding: 0px 16px 0px 48px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #f5f6f7;
}
.header__top__gnb--engine img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 16px;
    top: 12px;
}
.header__top__gnb--engine input {
    outline: none;
    width: 260px;
    height: 45px;
    border: 0px;
    border-radius: 8px;
    background-color: transparent;
    font-family: "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.header__top__gnb--login {
    display: flex;
    width: 45%;
    height: 90px;
    justify-content: flex-end;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    color: #666d75;
    font-family: "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.header__top__gnb--login div {
    margin-right: 8px;
    padding: 0px 15px 0px;
}
.header__top__gnb--login a {
    border: 1px solid #cbe7fd;
    color: #2b96ed;
    padding: 8px 32px;
}
.header__bottom {
    display: flex;
    margin: auto;
    width: 1100px;
    height: 50px;
    align-items: center;
}
.header__bottom__gnb {
    display: flex;
    width: auto;
    height: 50px;
    justify-content: right;
    align-items: center;
}
.header__bottom div:nth-child(1) {
    margin-left: 0px;
}
.header__bottom__gnb--menu {
    font-size: 16px;
    font-weight: 600;
    font-family: "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0px 12px;
    align-items: center;
}
.header__bottom__gnb--menu img {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
}
.header__bottom__gnb--menu--blank {
    width: 1px;
    height: 20px;
    margin: 0px 12px;
    background-color: #e9ecef;
}
</style>
