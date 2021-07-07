<template>
    <div class="head">
      <div class="head__top">
        <div class="head__total">
          <div class="head__login">
            <div class="user__image">
                <img src=https://www.welaaa.com/static/images/web-ic-person.png>
            </div>
            <div class="login">로그인</div>
              <span class="before__bar">ㅣ</span>
            <div class="join">윌라계정만들기</div>
            </div>
            <div class="head__logo"><img src="https://www.welaaa.com/static/images/web-welaaa-logo-kr.png"></div>
            <div class="head__engine">
              <img src="https://www.welaaa.com/static/images/icons/cart.svg">
              <div class="head__engine__button">
              <input type="text" class="engine__input" placeholder="키워드 혹은 강사/저자를 입력">
              <button>
                <img src="https://www.welaaa.com/static/images/web-ic-search.png">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="head__footer">
        <div class="footer__navigation">
          <div class="footer__navigation__left">
            <a href="#">윌라 소개</a>
            <a href="#">클래스</a>
            <a href="#">오디오북</a>
            <a href="#">마이윌라</a>
            <span>ㅣ</span>
            <button>{{ menu }}</button>
          </div>
          <div class="footer__navigation__right">
            <a href="#">기업교육서비스</a>
            <a href="#">윌라 멤버십 소개</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menu: '전체메뉴'
    }
  }
}
</script>

<style scoped>
.head {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 200px;
}
.head__top {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.head__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}
.head__login {
  display: flex;
  align-items: center;
  width: 20%;
  font-size: 13px;
  margin-top: 20px;
  font-weight: bold;
  color: #555555;
}
.user__image {
  width: 63px;
  margin-right: 30px;
}
.login {
  width: 70px;
}
.before__bar {
  width: 50px;
}
.join {
  width: 125px;
}
.head__logo {
  position: relative;
  width: 55%;
}
.head__logo img {
  position: absolute;
  top: -25px;
  left: 355px;
  width: 90px;
}
.head__engine {
  display: flex;
  width: 25%;
}
.head_engine img {
  width: 20%;
}
.head__engine__button {
  width: 80%;
  margin-top: 3px;
  margin-left: 10px;
  position: relative;
}
.head__engine__button input{
  margin-top: 3px;
  width: 90%;
  height: 80%;
  border-width: 1px;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
}
.head__engine__button button {
  position: absolute;
  left: 80%;
  top: 10%;
  width: 15%;
  height: 80%;
  border: 0px;
  background-color: transparent;
}
.head__footer {
  width: 100%;
  height: 40%;
  justify-content: right;
  background-color: #00c73c;
}
.footer__navigation {
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer__navigation a {
  text-decoration: none;
  color: #ffffff;
  margin-right: 20px;
}
.footer__navigation__left {
  font-size: 19px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  color: #ffffff;
}
.footer__navigation__left button {
  font-size: 19px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  color: #ffffff;
  border: 0px;
  background-color: transparent;
  margin-left: 20px;
}
.footer__navigation__right {
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #ffffff;
}
</style>
