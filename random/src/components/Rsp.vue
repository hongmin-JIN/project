<template>
  <div class="wrap">
    <div class="article">
      <div class="modal__section" :class="{'active': modal }">
        <div class="modal__back"></div>
          <div class="modal">
            <span class="modal__a action">{{win === 0 ? '패' : win === 1? '무' : '승'}}</span>
            <div class="check">
            <button @click="back">확인</button>
          </div>
        </div>
      </div>
      <div class="section__score" :class="{'active1': modal1 }">
          <div class="score__back"></div>
          <div class="score__modal">
            <ul>
              <li v-for="(item, index) in items" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="check">
            <button @click="back1">확인</button>
          </div>
        </div>
      <div class="section__top">
        {{ start ? list[computer] : '' }}
      </div>
      <div class="section__line">
        <h1>VS
        </h1>
      </div>
      <div class="section__middle">
        {{ start ? list[my] : '' }}
      </div>
      <div class="section__bottom">
        <div class="section__bottom__item">
          <div class="section__bottom__items">
            <div class="section__bottom__action">
              <button @click="go(0)">가위</button>
              <button @click="go(1)">바위</button>
              <button @click="go(2)">보자기</button>
            </div>
            <div class="section__bottom__score">
              <button @click="score">스코어</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rsp',
  data () {
    return {
      modal: false,
      start: false,
      modal1: false,
      computer: 0,
      my: 0,
      win: 0,
      list: ['가위', '바위', '보'],
      items: []
    }
  },
  methods: {
    go (myValue) {
      // 자료 구조 int string boolean array map
      this.start = true
      this.computer = Math.floor(Math.random() * 3)
      this.my = myValue
      // 값을 비교
      this.check()
      this.modal = true
    },
    check () {
      // 0: 가위, 1: 바위, 2: 보
      if ((this.computer === 0 && this.my === 2) ||
          (this.computer === 1 && this.my === 0) ||
          (this.computer === 2 && this.my === 1)) {
        this.win = 0
        this.items.push('패')
      } else if ((this.computer === 0 && this.my === 0) ||
          (this.computer === 1 && this.my === 1) ||
          (this.computer === 2 && this.my === 2)) {
        this.win = 1
        this.items.push('무')
      } else {
        this.win = 2
        this.items.push('승')
      }
    },
    back () {
      this.modal = false
    },
    score () {
      this.modal1 = true
    },
    back1 () {
      this.modal1 = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  height: 100%;
}
.article {
  display: inherit;
  flex-direction: column;
  position: relative;
  min-width: 370px;
  max-width: 600px;
  background: #f7f7f7;
}
.section__top {
  height: 40%;
  display: inherit;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  font-weight: bold;
}
.section__line {
  height: 5%;
  text-align: center;
}
.section__middle {
  height: 40%;
  display: inherit;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  font-weight: bold;
}
.section__bottom {
  height: 15%;
  display: inherit;
}
.section__bottom__item {
  width: 100%;
  display: inherit;
  align-items: center;
}
.section__bottom__items {
  width: 100%;
  height: 100%;
  display: inherit;
  flex-direction: column;
  justify-content: space-around;
}
.section__bottom__items button {
  height: 50px;
  border-radius: 5px;
  border: 0px;
  background: #f09329;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.section__bottom__action {
  text-align: center;
}
.section__bottom__action > button {
  width: 60px;
}
.section__bottom__score {
  text-align: center;
}
.section__bottom__score > button {
  width: 300px;
}
.modal__section {
  display: none;
}
.modal__section.active {
  display: block;
  transition: .5s;
}
.modal__back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.9;
}
.modal {
  position: absolute;
  width: 80%;
  height: 30%;
  top: 25%;
  left: 10%;
  transition: 1.2s;
}
.modal__a {
  display: none;
}
.modal__a.action {
  display : block;
  position: absolute;
  top: 5%;
  left: 33%;
  font-size: 100px;
  font-weight: bold;
  color: #f7f7f7;
}
.check > button {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 0px;
  background: #ccc;
  bottom: 15%;
  left: 43%;
  cursor: pointer;
}
.section__score {
  display: none;
}
.section__score.active1 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: .5s;
}
.score__back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.9;
}
.score__modal {
  position: absolute;
  background: #f7f7f7;
  width: 90%;
  height: 50%;
  top: 5%;
  left: 5%;
  top: 15%;
  transition: 1.2s;
  overflow-y: scroll;
}
ul {
  position: absolute;
  list-style: none;
  width: 100%;
}
li {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
