<template>
    <div>
        <h1>[]</h1>
        <h1>{}</h1>
        <h1>()</h1>
        <span>괄호가 올바르게 쓰여졌는지를 검증하는 함수를 작성 해 주세요.</span><br>
        <span>괄호의 크기는 상관이 없습니다. (다만, 괄호의 순서(열고 닫고)는 보장이 되어야 합니다.)</span><br>
        <span>올바르게 사용 되었다면 true / 아니면 false 를 리턴</span><br>
        <button @click="test1">sdsdsdsd</button>
        <div class="test" v-for="(item, index) in list" :key="index">{{ item }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Syntax',
  components: {
  },
  data () {
    return {
      list: [],
      item: 'asdasdasdasd'
    }
  },
  methods: {
    test1 () {
    },
    pasingData (data) {
      const creatData = {
        list: [],
        names: []
      }
      if (!creatData.list[data]) {
        creatData.list.push(data)
        console.log(creatData)
      }
    }
  },
  created () {
    this.$axios.get('https://web.peachkor.com/api/payList'
    ).then(res => {
      const data = res.data.data
      for (let a = 0; a < data.length; a++) {
        const nameData = data[a].date
        this.list.push(nameData)
        this.pasingData(nameData)
      }
    })
  }
}
</script>

<style scoped>
.test {
  width: 100%;
  height: auto;
  background: #f7f7f7;
}
</style>
