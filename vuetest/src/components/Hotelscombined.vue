<template>
    <div class="wrap">
        <div class="head">
            <div class="head__top">
                <div class="head__top__gnb">
                    <div class="">
                        <img src="./img/hotels.png">
                    </div>
                    <div class="head__top__gnb--login">
                        <span>마이트립</span>
                        <span>로그인</span>
                        <img src="./img/korea.png">
                        <span>₩</span>
                    </div>
                </div>
            </div>
            <div class="head__section">
                <div class="head__section--left">
                </div>
                <div class="head__section--right">
                    <div>
                        <span></span>
                        <div>
                            <img src="">
                            <img src="">
                            <img src="">
                            <img src="">
                            <img src="">
                        </div>
                        <img src="">
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Hotelscombined',
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
.head {
    width: 100%;
    height: 450px;
    background-color: rgb(0 174 240);
}
.head__top {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
}
.head__top__gnb {
    display: flex;
    width: 1020px;
    height: 60px;
    align-items: center;
}
.head__top__gnb--logo {
    width: 165px;
    height: 60px;
}
.head__top__gnb--login {
    display: flex;
    width: 885px;
    height: 60px;
    justify-content: flex-end;
    align-items: center;
}
.head__top__gnb--login span {
    font-size: 14px;
    font-family: "HelveticaNeue-Bold","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold;
    color: #ffffff;
    margin: 0px 10px;
}
.head__top__gnb--login img {
    width: 18px;
    height: 14px;
    margin: 0px 10px;
}
</style>
