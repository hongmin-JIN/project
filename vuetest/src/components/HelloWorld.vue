<template>
  <div>
    <Header/>
    <h1 @click="testclick">{{ msg }}</h1>
    <h2 v-bind:style="styleOb" v-if="check">{{ aa }}</h2>
    <h2 @click="tt">{{ bb }}</h2>
    <h3>{{ cc }}</h3>
    <div v-if="checking">{{ qq }}</div>
    <input v-model="cc">
    <ul id="v-for-object" class="demo">
        <li v-for="(value, name, index) in styleOb" v-bind:key="index">
          {{ index }}. {{ name }} : {{ value }}
        </li>
    </ul>
    <input v-model="gg">
    <button>+</button>
    <ul>
      <li>{{ gg }}</li>
    </ul>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'HelloWorld',
  components: {
    Header
  },
  data () {
    return {
      check: true,
      checking: false,
      msg: 'VUE TEST',
      aa: '홍희루',
      bb: '니얼굴',
      cc: '',
      qq: '안녕하세요',
      gg: '',
      styleOb: {
        color: 'red',
        fontSize: '50px',
        margin: '100px',
        display: 'block'
      }
    }
  },
  methods: {
    testclick () {
      this.msg = 'test 4444444444444444444444444'
    },
    dd () {
      this.cc = this.cc.split('').reverse().join('')
    },
    tt () {
      this.styleOb.fontSize = '100px'
      this.check = false
      this.bb = '내 얼굴'
      this.checking = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
