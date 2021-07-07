<template>
<div class="wrap">
    <div>
      <div class="button">
        <button v-for="(yearButton, index) in years" :key="index" @click="page(yearButton)">{{ yearButton }}</button>
        <button @click="page('all')">전체</button>
      </div>
      <div>
        <table>
          <tr>
            <th>No.</th>
            <th>년도</th>
            <th>이름</th>
            <th>결과</th>
          </tr>
          <template v-for="(data, index) in items">
            <tr :key="index" v-if="(index + 1) >= pageItem * 10 - 9 && (index + 1) <= pageItem * 10">
              <td>{{ index + 1 }}</td>
              <td>{{ data.year }}</td>
              <td>{{ data.name }}</td>
              <td>{{ change(data.result) }}</td>
            </tr>
          </template>
        </table>
        <div class="paging">
          <div v-for="(pageItem, index) in pageList" :key="index">
              <div class="click" @click="next(pageItem)">{{ pageItem }}</div>
          </div>
        </div>
      </div>
        <div class="button">
            <button v-for="(nameButton, index) in list.names" :key="index" @click="name(nameButton)">{{ nameButton }}</button>
            <button @click="name('all')">전체</button>
        </div>
        <table>
            <tr>
              <th>이름</th>
              <th>승</th>
              <th>무</th>
              <th>패</th>
              <th>2019년(%)</th>
              <th>2020년(%)</th>
              <th>2021년(%)</th>
              <th>승률(%)</th>
            </tr>
          <template v-for="(nameData, index) in list.names">
            <tr :key="index" v-if="(parsingSelect === 'all') || (parsingSelect !== 'all' && parsingSelect === nameData)">
              <td>{{ nameData }}</td>
              <td>{{ list[nameData].win }}</td>
              <td>{{ list[nameData].draw }}</td>
              <td>{{ list[nameData].lose }}</td>
              <td>{{ (list[nameData][2019] / list.total[2019] * 100).toFixed(2) }}  %</td>
              <td>{{ (list[nameData][2020] / list.total[2020] * 100).toFixed(2) }}  %</td>
              <td>{{ (list[nameData][2021] / list.total[2021] * 100).toFixed(2) }}  %</td>
              <td>{{ (list[nameData].win / list.total.all * 100).toFixed(2) }} %</td>
            </tr>
          </template>
            <template>
              <tr>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
            </template>
        </table>
        <div class="paging">
          <div>
              <div></div>
          </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Data',
  components: {
  },
  data () {
    return {
      years: [],
      items: [],
      pages: [],
      list: {},
      pageList: 0,
      pageItem: 1,
      parsingSelect: 'all'
    }
  },
  methods: {
    change (text) {
      let result = ''
      if (text === 'win') {
        result = '승'
      } else if (text === 'lose') {
        result = '패'
      } else {
        result = '무'
      }
      return result
    },
    nameButton (data) {
      const creatData = {
        names: [],
        total: {
          all: 0
        }
      }
      for (let c = 0; c < data.length; c++) {
        const item = data[c]
        if (creatData.names.indexOf(item.name) === -1) {
          creatData.names.push(item.name)
        }

        if (!creatData[item.name]) {
          creatData[item.name] = {
            win: this.resultReturn('win', item.result),
            lose: this.resultReturn('lose', item.result),
            draw: this.resultReturn('draw', item.result)
          }
        } else {
          const beforeData = creatData[item.name]
          beforeData.win = beforeData.win + this.resultReturn('win', item.result)
          beforeData.lose += this.resultReturn('lose', item.result)
          beforeData.draw += this.resultReturn('draw', item.result)
        }

        if (!creatData[item.name][item.year]) {
          creatData[item.name][item.year] = this.resultReturn('win', item.result)
        } else {
          creatData[item.name][item.year] += this.resultReturn('win', item.result)
        }
        if (!creatData.total[item.year]) {
          creatData.total[item.year] = 1
          creatData.total['all'] += 1
        } else {
          creatData.total[item.year] += 1
          creatData.total['all'] += 1
        }
      }
      this.list = creatData
    },
    resultReturn (result, value) {
      return (result === value) ? 1 : 0
    },
    page (page) {
      this.items = []
      if (page === 'all') {
        this.items = this.indexData
      } else {
        for (let e = 0; e < this.indexData.length; e++) {
          const yearString = this.indexData[e].year
          if (page === Number(yearString)) {
            this.items.push(this.indexData[e])
          }
        }
      }
      this.pageList = Math.ceil(this.items.length / 10)
      this.pageItem = 1
      console.log(this.pageitem)
    },
    next (next) {
      this.pageItem = next
    },
    name (tt) {
      this.parsingSelect = tt
    }
  },
  created () {
    this.$axios.get('https://web.peachkor.com/api/result'
    ).then(res => {
      const listData = res.data.data.list
      const buttonData = res.data.data.year
      for (let a = 0; a < buttonData.length; a++) {
        const yearData = buttonData[a]
        this.years.push(yearData)
      }
      for (let b = 0; b < listData.length; b++) {
        const dataList = listData[b]
        this.items.push(dataList)
        this.pageList = Math.ceil(listData.length / 10)
      }
      this.nameButton(listData)
      this.buttonData = listData
      this.indexData = listData
    }).catch(error => {
      console.log('failed', error)
    })
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
    width: 100%;
    justify-content: center;
}
table {
    width: 800px;
    border: 1px solid #f7f7f7;
    margin-top: 30px;
}
th {
    border: 1px solid #ccc;
    height: 30px;
}
.button > button {
    margin: 20px 5px 5px 5px;
}
.click {
    cursor: pointer;
}
.paging {
  display: flex;
  width: 100%;
  justify-content: space-evenly
}
</style>
