<template>
    <div class="wrap">
        <div class="hidden__list" :class="{ get: menu }">
                <div class="hidden__head">
                    <div class="hidden__head__gnb">
                        <div class="hidden__head__gnb--logo">
                            <a @click="loadEvent"><img class="logo" src="./img/itech.png"></a>
                        </div>
                        <button class="button__close" @click="menuClick">×</button>
                    </div>
                </div>
                <div class="hidden__section">
                    <div class="hidden__section__gnb">
                        <ul class="section__box">
                            <li class="section__boxlist">
                                <a href="#">
                                    <img src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65779d87017800001.png">
                                    <span class="section__boxlist__span">아이테크</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/657726a1017800001.png">
                                    <span>뉴스</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6575c56d017800001.png">
                                    <span>기술과 서비스</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/657759fa017800001.png">
                                    <span>약속과 책임</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <div class="wrap__section">
            <div class="head">
                <div class="head__gnb">
                    <div class="head__gnb--logo">
                        <a @click="loadEvent"><img class="logo" src="./img/itech.png"></a>
                    </div>
                    <div class="head__gnb--navigation">
                        <nav><a href="#">아이테크</a></nav>
                        <nav><a href="#">뉴스</a></nav>
                        <nav><a href="#">기술과 서비스</a></nav>
                        <nav><a href="#">약속과 책임</a></nav>
                    </div>
                    <div class="head__gnb--function">
                        <button class="head__gnb--function--icon--search"></button>
                        <button class="head__gnb--function--icon--dark"></button>
                        <button class="head__gnb--function--icon--list" @click="menuClick"></button>
                    </div>
                </div>
            </div>
            <div class="article">
                <div class="section">
                    <div class="section__1">
                        <div class="section__1__title">
                            <img src="https://www.kakaocorp.com/page/ico_tit_culture.gif">
                            <h1>문화</h1>
                        </div>
                        <span class="section__1__title__sentence">더 나은 세상을 만드는 아이테크</span>
                        <div class="section__1--video">
                            <video src="https://www.kakaocorp.com/page/culture/vod_culture_top_210531.mp4" autoplay loop muted></video>
                            <div class="section__1--video__contents">
                                <span class="section__1--video__contents__title">존재이유</span>
                                <span class="section__1--video__contents__sentence">기술과 사람이 만드는<br>더 나은 세상</span>
                            </div>
                        </div>
                    </div>
                    <div class="section__2">
                        <strong class="section__2__title">아이테크스럽나요?</strong><br>
                        <span class="section__2__sentence">아이테크 크루는 종종 이렇게 묻곤합니다.<br> 우리의 관점, 행동하는 방법, 지향하는 목표까지 카카오스러움은 이미 우리 안에<br>스며들어 있습니다. 우리가 더 나은 세상을 만들기 위해 고민하면서 자연스럽게 체득한<br>태도이자 본질이기 때문입니다. 앞으로도 우리는 카카오스러움에서 고민을 시작하고,<br>답을 찾을 것입니다.</span>
                    </div>
                    <div class="info__section">
                        <div class="inner__section" :class="{ change: description[0] }">
                            <div class="inner__section__contents" :class="{ change: description[0] }">
                                <strong class="inner__section__contents__title">가보지 않은 길을<br>두려워 하지 않습니다.</strong>
                                <span class="inner__section__contents__writer">Willing to Venture</span>
                                <span  class="inner__section__contents__sentence"> "가보지 않은 길은 위험하잖아?"<br>배는 정박해 있을 때 가장 안전하지만 그것은 배의 존재<br>이유가 아닙니다. 가보지 않은 길은 실패의 위험이<br>따르지만 우리는 개선보다 혁신의 길을 가는 사람들입니다.<br>문제 자체를 다시 정의하고 새로운 해답을 찾는 것에<br>집중합니다. 도전이 두렵기만 하다면 카카오를 떠날<br>때입니다.</span>
                                <div class="inner__section__contents__tag">
                                    <span>#개선아닌혁신</span>
                                    <span>#도전은거침없이</span>
                                </div>
                            </div>
                            <div class="inner__section__img" :class="{ change: description[0] }">
                                <video src="https://www.kakaocorp.com/page/culture/vod_culture1.mp4" autoplay loop muted></video>
                            </div>
                            <div class="transition" :class="{ change: description[0] }">
                                <button class="transition__button" :class="{ change: description[0] }" @click="transition(0)">{{ patch }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="info__section">
                        <div class="inner__section active" :class="{ change: description[1] }">
                            <div class="inner__section__contents" :class="{ change: description[1] }">
                                <strong class="inner__section__contents__title">무슨 일이든 본질만<br>남기고 처음부터<br>다시 생각해 봅니다.</strong>
                                <span class="inner__section__contents__writer">Back to Basic</span>
                                <span  class="inner__section__contents__sentence">"원래 그게 당연한거 아냐?"<br>불편하고 복잡한 게 당연할 리 없습니다. 그래서 우리는<br>본질에서 출발합니다. 시작부터 다르게 질문합니다.<br>끊임없이 ‘왜?’라는 물음을 던집니다. 그렇게 익숙한 것을<br>새롭게, 가치 있게 만듭니다.</span>
                                <div class="inner__section__contents__tag">
                                    <span>#본질에서출발</span>
                                    <span>#생각에당연함없이</span>
                                </div>
                            </div>
                            <div class="inner__section__img" :class="{ change: description[1] }">
                                <video src="https://www.kakaocorp.com/page/culture/vod_culture2.mp4" autoplay loop muted></video>
                            </div>
                            <div class="transition" :class="{ change: description[1] }">
                                <button class="transition__button" :class="{ change: description[1] }" @click="transition(1)">{{ patch }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="info__section">
                        <div class="inner__section" :class="{ change: description[2] }">
                            <div class="inner__section__contents" :class="{ change: description[2] }">
                                <strong class="inner__section__contents__title">나보다 동료의 생각이<br>더 옳을 수 있다는<br>믿음을 가집니다.</strong>
                                <span class="inner__section__contents__writer">Trust to Trust</span>
                                <span  class="inner__section__contents__sentence">"내가 항상 정답일까?"<br>개인의 완벽함에 기대기 보다 동료와 함께 완성해<br>나갑니다. 격렬한 토론과 논쟁 속에서도 서로에 대한<br>신뢰가 있다면 반드시 더 나은 답을 찾을 수 있습니다.<br>신뢰를 받기 위해서 상대방을 먼저 존중하세요. 혼자 가면<br>빨리 갈 수 있지만, 함께 가면 멀리 갈 수 있습니다.</span>
                                <div class="inner__section__contents__tag">
                                    <span>#신뢰충돌헌신</span>
                                    <span>#존중은편견없이</span>
                                </div>
                            </div>
                            <div class="inner__section__img" :class="{ change: description[2] }">
                                <video src="https://www.kakaocorp.com/page/culture/vod_culture3.mp4" autoplay loop muted></video>
                            </div>
                            <div class="transition" :class="{ change: description[2] }">
                                <button class="transition__button" :class="{ change: description[2] }" @click="transition(2)">{{ patch }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="info__section">
                        <div class="inner__section active" :class="{ change: description[3] }">
                            <div class="inner__section__contents" :class="{ change: description[3] }">
                                <strong class="inner__section__contents__title">스스로 몰입하고<br>주도적으로 일합니다.</strong>
                                <span class="inner__section__contents__writer">Act for Yourself</span>
                                <span  class="inner__section__contents__sentence">"왜 이 일을 할까?"<br>카카오 크루라면 가장 먼저 해야 하는 질문입니다. 우리는<br>일의 원동력을 스스로 만들어냅니다. 내가 시켜서 하는<br>나의 일인거죠. 일에 끌려다니지 않고 끌고 가기 위해서<br>언제나 내가 먼저 생각하고, 질문하고, 움직입니다.</span>
                                <div class="inner__section__contents__tag">
                                    <span>#내가시킨내일</span>
                                    <span>#할일은스스럼없이</span>
                                </div>
                            </div>
                            <div class="inner__section__img" :class="{ change: description[3] }">
                                <video src="https://www.kakaocorp.com/page/culture/vod_culture4.mp4" autoplay loop muted></video>
                            </div>
                            <div class="transition" :class="{ change: description[3] }">
                                <button class="transition__button" :class="{ change: description[3] }" @click="transition(3)">{{ patch }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="info__section">
                        <div class="inner__section" :class="{ change: description[4] }">
                            <div class="inner__section__contents" :class="{ change: description[4] }">
                                <strong class="inner__section__contents__title">세상을 선하게바꾸려고 노력합니다.</strong>
                                <span class="inner__section__contents__writer">Tech for Good</span>
                                <span  class="inner__section__contents__sentence">"너무 거창한 이야기 아냐?"<br>사회를 지속적으로 변화시킬 수 있는 가장 효율적인 조직은<br>기업입니다. 기업은 건강한 생태계를 만들어야하는 책임이<br>있습니다. 카카오 또한 사회에 의미있는 변화를 만들기<br>위해 최선을 다합니다. 서비스 하나에도 그런 생각과<br>노력들이 담겨있습니다.<br>그렇게 우리는 오늘보다 더 나은 세상을 만듭니다.</span>
                                <div class="inner__section__contents__tag">
                                    <span>#사회적인책임</span>
                                    <span>#놀라움은끊임없이</span>
                                </div>
                            </div>
                            <div class="inner__section__img" :class="{ change: description[4] }">
                                <video src="https://www.kakaocorp.com/page/culture/vod_culture5.mp4" autoplay loop muted></video>
                            </div>
                            <div class="transition" :class="{ change: description[4] }">
                                <button class="transition__button" :class="{ change: description[4] }" @click="transition(4)">{{ patch }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div type="button" class="button__top">↑</div>
            </div>
            <div class="footer">
                <div class="footer__gnb">
                    <div class="footer__gnb--top">
                        <div class="footer__gnb--top__navigation">
                            <strong>아이테크</strong>
                            <ul>
                                <li>아이테크 문화</li>
                                <li>공동체</li>
                                <li>히스토리</li>
                            </ul>
                        </div>
                        <div class="footer__gnb--top__navigation">
                            <strong>뉴스</strong>
                        </div>
                        <div class="footer__gnb--top__navigation">
                            <strong>기술과 서비스</strong>
                            <ul>
                                <li>기술</li>
                                <li>서비스</li>
                            </ul>
                        </div>
                        <div class="footer__gnb--top__navigation">
                            <strong>약속과 책임</strong>
                            <ul>
                                <li>ESG</li>
                                <li>소셜임팩트</li>
                                <li>디지털 권리</li>
                                <li>AI 윤리</li>
                            </ul>
                        </div>
                        <div class="footer__gnb--top__navigation">
                            <strong>투자정보</strong>
                            <ul>
                                <li>기업지배구조</li>
                                <li>주가정보</li>
                                <li>재무정보</li>
                                <li>IR행사</li>
                                <li>공시정보</li>
                                <li>공고</li>
                            </ul>
                        </div>
                        <div class="footer__gnb--top__navigation">
                            <strong>고객센터</strong>
                            <ul>
                                <li>아이테크 고객센터</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__gnb--bottoms">
                        <nav class="footer__gnb--bottom">
                            <a href="" class="footer__gnb--bottom__navigation">이용약관</a>
                            <a href="" class="footer__gnb--bottom__navigation">위치기반서비스이용약관</a>
                            <a href="" class="footer__gnb--bottom__navigation">개인정보처리방침</a>
                            <a href="" class="footer__gnb--bottom__navigation">운영정책</a>
                            <a href="" class="footer__gnb--bottom__navigation">청소년보호정책</a>
                            <a href="" class="footer__gnb--bottom__navigation">권리침해신고안내</a>
                            <a href="" class="footer__gnb--bottom__navigation">공지사항</a>
                            <a href="" class="footer__gnb--bottom__navigation__relation">관련사이트</a>
                        </nav>
                        <span class="footer__gnb--bottom__navigation">©<a href="">Itech Corp.</a> All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Itech',
  data () {
    return {
      description: [false, false, false, false, false],
      menu: false,
      patch: '＋'
    }
  },
  methods: {
    loadEvent: function () {
      this.$router.go(this.$router.currentRoute)
    },
    transition (index) {
      const setItem = [...this.description]
      setItem[index] = !setItem[index]
      this.description = setItem
    },
    menuClick () {
      this.menu = !this.menu
    }
  }
}
</script>

<style scoped>
body {
    width: 100%;
    height: 100%;
}
.wrap {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    overflow: hidden;
}
.hidden__list {
    position: absolute;
    top: 0;
    right: -100%;
}
.wrap__section {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.head {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
}
.head__gnb {
    display: flex;
    justify-content: space-between;
    width: 1300px;
    height: 80px;
    align-items: center;
}
.head__gnb--logo a {
    display: block;
    cursor: pointer;
}
.logo {
    width: 120px;
}
.head__gnb--navigation {
    display: flex;
    height: 80px;
    justify-content: left;
    align-items: center;
}
.head__gnb--navigation a {
    text-decoration: none;
    color: #000000;
}
.head__gnb--navigation nav:nth-child(n) {
    font-size: 17px;
    font-weight: 600;
    font-family: "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0px 25px;
}
.head__gnb--function {
    display: flex;
    width: 100px;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
}
.head__gnb--function button {
    width: 24px;
    height: 24px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
}
.head__gnb--function--icon--search {
    display: none;
}
.head__gnb--function--icon--dark {
    display: none;
}
.head__gnb--function--icon--list {
    display: none;
}
.article {
    display: flex;
    position: relative;
    justify-content: center;
    padding-bottom: 100px;
}
.section__1 {
    box-sizing: border-box;
    padding-top: 120px;
    text-align: left;
}
.section__1__title {
    display: flex;
    width: 1300px;
    align-items: center;
}
.section__1__title img {
    width: 5%;
}
.section__1__title h1 {
    font-size: 45px;
    padding-left: 10px;
}
.section__1__title__sentence {
    font-size: 30px;
    font-weight: 500;
}
.section__1--video {
    position: relative;
    height: 730px;
    border-radius: 20px;
    margin-top: 70px;
}
.section__1--video video {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.section__1--video__contents {
    position: absolute;
    display: flex;
    width: 100%;
    flex-direction: column;
    color: #ffffff;
    text-align: center;
    top: 40%
}
.section__1--video__contents__title {
    font-size: 22px;
    font-weight: 700;
}
.section__1--video__contents__sentence {
    font-size: 42px;
    font-weight: 700;
    margin-top: 10px;
}
.section__2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-top: 250px;
}
.section__2__title {
    font-size: 45px;
}
.section__2__sentence {
    font-size: 18px;
}
.info__section {
    display: flex;
    height: 721px;
    justify-content: center;
}
.inner__section {
    position: relative;
    display: flex;
    margin-bottom: 100px;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: 3px 3px 3px 3px #c2c2c2;
    border-radius: 20px;
    overflow: hidden;
}
.inner__section.active {
    flex-direction: row-reverse;
}
.inner__section__contents {
    display: flex;
    flex-direction: column;
    width: 530px;
    justify-content: space-between;
    text-align: left;
    box-sizing: border-box;
    padding: 5%;
}
.inner__section__contents__title {
    font-size: 36px;
}
.inner__section__contents__writer {
    font-size: 18px;
    color: #919191;
}
.inner__section__contents__sentence {
    font-size: 16px;
}
.inner__section__contents__tag {
    font-size: 16px;
    color: #919191;
}
.inner__section__img {
    width: 530px;
}
.inner__section__img video{
    width: 100%;
}
.transition {
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 5%;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-right: 20px;
}
.transition__button {
    display: none;
    cursor: pointer;
}
.button__top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 35px;
    right: 295px;
    width: 50px;
    height: 50px;
    color: #ffffff;
    font-size: 25px;
    background-color: black;
    border-radius: 50%;
}
.footer {
    display: flex;
    justify-content: center;
    border-top: 1px solid #ebebeb;
}
.footer__gnb {
    position: relative;
    width: 1300px;
    box-sizing: border-box;
    padding: 40px 0px 50px
}
.footer__gnb--top {
    display: flex;
    justify-content: space-between;
}
.footer__gnb--top__navigation {
    text-align: left;
    font-size: 14px;
}
.footer__gnb--top__navigation li {
    margin-top: 10px;
    color: #888;
}
.footer__gnb--bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
}
.footer__gnb--bottom__navigation {
    color: #888;
    text-decoration: none;
    font-size: 12px;
}
.footer__gnb--bottom__navigation a {
    text-decoration: none;
    color: #888;
    text-align: left;
}
.footer__gnb--bottom__navigation__relation{
    display: flex;
    width: 170px;
    height: 40px;
    border: 1px solid gray;
    font-size: 12px;
    color: #000000;
    border-radius: 20px;
    align-items: center;
    text-decoration: none;
    background-color: #ececec;
    box-sizing: border-box;
    padding: 20px;
}
@media screen and (max-width: 1200px) {
    .wrap__section {
        position: relative;
    }
    .head__gnb--function--icon--list {
        display: block;
        background: url("./img/list-button.png");
        background-size: cover;
    }
    .hidden__list {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        right: -100%;
        background-color: #ffffff;
        z-index: 1;
        transition: all 0.8s;
    }
    .hidden__list.get {
        right: 0%;
    }
    .hidden__head {
        display: flex;
        justify-content: center;
    }
    .hidden__head__gnb {
        display: flex;
        justify-content: space-between;
        width: 500px;
        height: 60px;
        align-items: center;
    }
    .hidden__head__gnb--logo a {
        cursor: pointer;
    }
    .hidden__section {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
    }
    .hidden__section__gnb {
        display: flex;
        width: 500px;
        height: 100%;
        justify-content: left;
        text-align: left;
        box-sizing: border-box;
        padding: 47px 0px 66px;
    }
    .hidden__section__gnb img {
        width: 48px;
        height: 48px;
    }
    .hidden__section__gnb {
        text-decoration: none;
        color: black;
    }
    .hidden__section__gnb li:nth-child(n+2){
        margin-top: 45px;
    }
    .section__box a {
        display: block;
        text-decoration: none;
    }
    .section__box img {
        vertical-align: top;
    }
    .section__box span {
        color: #000000;
        font-size: 30px;
        font-weight: 700;
        margin-left: 15px;
        line-height: 48px;
    }
    .button__close {
        display: flex;
        width: 28px;
        height: 28px;
        background-color: transparent;
        border: 0px;
        font-size: 28px;
        box-sizing: border-box;
        align-items: center;
        cursor: pointer;
    }
    .head {
        height: 60px;
    }
    .head__gnb {
        width: 700px;
        height: 60px;
    }
    .head__gnb--navigation {
        display: none;
    }
    .section {
        width: 700px;
    }
    .section__1__title {
        width: 700px;
    }
    .section__1__title h1 {
        font-size: 35px;
        padding-left: 5px;
    }
    .section__1__title__sentence {
        font-size: 25px;
        font-weight: 500;
    }
    .section__1--video {
        height: 500px;
    }
    .section__1--video video {
        height: 396px;
        border-radius: 20px;
    }
    .section__1--video__contents {
        top: 25%;
    }
    .section__1--video__contents__title {
        width: 700px;
        font-size: 18px;
    }
    .section__1--video__contents__sentence {
        width: 700px;
        font-size: 30px;
    }
    .section__2 {
        margin-top: 0px;
        height: 300px;
    }
    .section__2__title {
        font-size: 40px;
    }
    .section__2__sentence {
         font-size: 17px;
    }
    .inner__section {
        transition: all 0.5s linear;
    }
    .inner__section.change {
        transform: rotateY(180deg);
    }
    .inner__section__contents {
        display: none;
    }
    .inner__section__contents.change {
        display: flex;
        justify-content: space-between;
        transform: rotateY(180deg);
    }
    .inner__section__img.change {
        display: none;
    }
    .transition.change {
        transform: rotateY(180deg);
    }
    .transition__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border: none;
        border-radius: 50%;
        font-size: 30px;
        cursor: pointer;
    }
    .transition__button.change {
        transform: rotate(45deg);
        box-sizing: border-box;
        padding-bottom: 3px;
    }
    .button__top {
        width: 40px;
        height: 40px;
        right: 50%;
    }
    .footer__gnb {
        width: 700px;
        padding-bottom: 70px;
    }
    .footer__gnb--bottom__navigation__relation{
        position: absolute;
        width: 300px;
        right: 0px;
        bottom: 45px;
    }
    .footer__gnb--bottoms {
        text-align: left;
    }
}
@media screen and (max-width: 770px) {
    .hidden__list {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        right: -100%;
        background-color: #ffffff;
        z-index: 1;
        transition: all 0.8s;
        overflow-y: hidden;
    }
    .hidden__list.get {
        right: 0%;
    }
    .hidden__head {
        display: flex;
        justify-content: center;
    }
    .hidden__head__gnb {
        display: flex;
        justify-content: space-between;
        width: 280px;
        height: 60px;
        align-items: center;
    }
    .hidden__section {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
    }
    .hidden__section__gnb {
        display: flex;
        width: 280px;
        height: 100%;
        justify-content: left;
        text-align: left;
        box-sizing: border-box;
        padding: 47px 0px 66px;
    }
    .hidden__section__gnb img {
        width: 48px;
        height: 48px;
    }
    .hidden__section__gnb {
        text-decoration: none;
        color: black;
    }
    .hidden__section__gnb li:nth-child(n+2){
        margin-top: 45px;
    }
    .section__box a {
        display: block;
        text-decoration: none;
    }
    .section__box img {
        vertical-align: top;
    }
    .section__box span {
        color: #000000;
        font-size: 30px;
        font-weight: 700;
        margin-left: 15px;
        line-height: 48px;
    }
    .head {
        height: 60px;
    }
    .head__gnb {
        width: 320px;
        height: 60px;
    }
    .head__gnb--navigation {
        display: none;
    }
    .article {
        padding-bottom: 60px;
    }
    .section {
        width: 320px;
    }
    .section__1 {
        padding-top: 30px;
    }
    .section__1__title {
        width: 320px;
    }
    .section__1__title h1 {
        font-size: 27px;
        padding-left: 5px;
    }
    .section__1__title__sentence {
        font-size: 17px;
        font-weight: 500;
    }
    .section__1--video {
        margin-top: 0px;
        height: 192px;
    }
    .section__1--video video {
        height: 181px;
        border-radius: 20px;
        margin-top: 30px;
    }
    .section__1--video__contents {
        top: 40%;
    }
    .section__1--video__contents__title {
        width: 320px;
        font-size: 15px;
    }
    .section__1--video__contents__sentence {
        width: 320px;
        font-size: 18px;
    }
    .section__2 {
        margin-top: 50px;
        height: 300px;
    }
    .section__2__title {
        font-size: 35px;
    }
    .section__2__sentence {
         font-size: 15px;
    }
    .info__section {
        height: 500px;
    }
    .inner__section {
        transition: all 0.5s linear;
        margin-bottom: 50px;
        height: 375px;
    }
    .inner__section.change {
        transform: rotateY(180deg);
    }
    .inner__section__contents {
        display: none;
    }
    .inner__section__contents.change {
        display: flex;
        justify-content: space-between;
        transform: rotateY(180deg);
    }
    .inner__section__contents__title {
        font-size: 25px;
    }
    .inner__section__contents__writer {
        font-size: 18px;
    }
    .inner__section__contents__sentence {
        font-size: 13px;
    }
    .inner__section__contents__tag {
        font-size: 13px;
    }
    .inner__section__img.change {
        display: none;
    }
    .transition.change {
        transform: rotateY(180deg);
    }
    .transition__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 50%;
        font-size: 30px;
        cursor: pointer;
    }
    .transition__button.change {
        transform: rotate(45deg);
        box-sizing: border-box;
        padding-bottom: 3px;
    }
    .button__top {
        width: 30px;
        height: 30px;
        right: 50%;
    }
    .footer__gnb {
        width: 320px;
    }
    .footer__gnb--top {
        display: none;
    }
    .footer__gnb--bottom {
        display: none;
    }
    .footer__gnb--bottom__navigation__relation{
        position: absolute;
        width: 300px;
        right: 0px;
        bottom: 45px;
    }
    .footer__gnb--bottoms {
        text-align: center;
    }
}
</style>
