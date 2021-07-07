<template>
  <div class="wrap">
    <h2>Modal</h2>
    <div class="mainSection">
      <input v-model="modalText">
      <button @click="addModal(true)">모달</button>
      <div class="modalSection">
        <div class="background" v-if="background"></div>
        <div class="modal" v-if="modal">{{ modalText }}</div>
        <button class="checkButton" v-if="checkButton" @click="addModal(false)">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      modalText: '',
      text: '',
      background: false,
      modal: false,
      checkButton: false
    }
  },
  methods: {
    addModal (value) {
      this.background = value
      this.modal = value
      this.checkButton = value
    }
  }
}
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 600px;
  }
  .mainSection{
    width: 100%;
    height: 100%;
  }
  .mainSection input{
    margin-top: 300px;
  }
  .modalSection{
    width: 100%;
    height: 100%;
  }
  .background{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
  }
  .modal{
    position: absolute;
    top:0;
    margin-top: 285px;
    margin-left: 800px;
    width: 300px;
    height: 100px;
    background-color: cornsilk;
    border-radius: 20px;
    padding-top: 80px;
  }
  .checkButton{
    position: absolute;
    left: 938px;
    z-index: 1;
  }

</style>
