<template>
<div class="wrap">
    <div class="joinSection">
      <div class="joinSection__title">
        <h2>회원가입</h2>
      </div>
      <div class="joinSection__page">
        <div class="joinSection__page__box">
          <div class="joinSection__page__box__contents">
            <h4>아이디</h4>
            <input type="text" v-model="id">
          </div>
          <div class="joinSection__page__box__contents">
            <h4>비밀번호</h4>
            <input type="text" v-model="pw">
          </div>
          <button class="join__button" @click="join">회원가입</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Join',
  components: {
  },
  data () {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    join () {
      this.$axios.post('https://study.peachkor.com/sign', {
        'user': this.id,
        'passwd': this.pw
      }).then(res => {
        const aa = res.status
        console.log(res.status)
        if (aa === 200) {
          alert('회원가입이 완료되었습니다.')
          this.$router.push('login')
        }
      }).catch(error => {
        console.log('failed', error)
      })
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    outline: none;
    list-style: none;
}
.wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.joinSection {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.joinSection__title {
  width: 850px;
  padding-bottom: 7px;
  border-bottom: 1px solid gray;
}
.joinSection__page {
  width: 850px;
  margin-top: 15px;
}
.joinSection__page__logo {
  text-align: center;
}
.joinSection__page__box {
  box-sizing: border-box;
  padding: 20px 255px;
}
.joinSection__page__box__contents h4 {
  font-size: 15px;
  font-weight: 500;
  margin: 20px 0px 10px;
}
.joinSection__page__box__contents input {
  width: 100%;
  height: 30px;
  box-sizing: border-box;
}
.phone__input {
  width: 90% !important;
}
.adduction__button {
  height: 30px;
}
.join__button {
  width: 100%;
  height: 50px;
  margin-top: 40px;
  border-radius: 10px;
  background: #009e4f;
  color: #fff;
  border: 0px;
  font-size: 18px;
  cursor: pointer;
}
</style>
