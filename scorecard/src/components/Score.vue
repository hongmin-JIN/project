<template>
  <div class="section">
      <div class="background">
      </div>
      <div class="modal" @click="cancle">
          <div class="modal__contents">
              <div class="modal__contents__box">
                  <div class="modal__contents__box__top">
                    <button v-for="(item) in 5" :key="item" @click="scoreClick(item - 5)">{{ item - 5 }}</button>
                  </div>
                  <div class="span">
                    <span>깽짱러이</span>
                  </div>
                  <div class="modal__contents__box__bottom">
                    <button v-for="(item) in 5" :key="item" @click="scoreClick(item)">{{ item }}</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    callback: Function,
    backgroundEvent: Function
  },
  data () {
    return {
    }
  },
  methods: {
    scoreClick (value) {
      this.callback(value)
    },
    cancle () {
      console.log('cancle')
      this.backgroundEvent()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
}
.background {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
    position: absolute;
}
.modal {
    width: 100%;
    height: 100%;
    position: absolute;
}
.modal__contents {
    width: 20%;
    height: 10%;
    background: #fff;
    position: absolute;
    left: 40%;
    top: 40%;
    background: #529e60;
}
.modal__contents__box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.modal__contents__box__top {
    display: flex;
    justify-content: space-between;
}
.modal__contents__box__bottom {
    display: flex;
    justify-content: space-between;
}
button {
    width: 20%;
    height: 100%;
}
.span {
  width: 100%;
  text-align: center;
}
.span > span {
  font-size: 14px;
  color: #fff;
  font-weight: bold;
}
</style>
