<template>
<div class="wrap">
    <div>
      <div class="button">
        <button v-for="(year, index) in yearButton" :key="index" @click="yearClick(year)">{{ year }}</button>
        <button @click="yearClick('all')">전체</button>
      </div>
      <div>
        <table>
          <tr>
            <th>No.</th>
            <th>년도</th>
            <th>이름</th>
            <th>결과</th>
          </tr>
          <template v-for="(yearData, index) in yearParsing">
            <tr :key="index" v-if="(index +1) >= pageItem * 10 - 9 && (index + 1) <= pageItem * 10 ">
              <td>{{ index +1 }}</td>
              <td>{{ yearData.year }}</td>
              <td>{{ yearData.name }}</td>
              <td>{{ change(yearData.result) }}</td>
            </tr>
          </template>
        </table>
        <div class="paging">
          <div @click="pagingTest(true)">A</div>
          <template v-for="(pageItem, index) in list" >
            <div :key="index" v-if="pageItem > min && pageItem < max">
                <div @click="paging(pageItem)" :class="{active: current === pageItem}">{{ pageItem }}</div>
            </div>
          </template>
          <div @click="pagingTest(false)">B</div>
        </div>
      </div>
        <div class="button">
            <button v-for="(name, index) in nameParsing.names" :key="index" @click="nameLoad(name)">{{ name }}</button>
            <button @click="nameLoad('all')">전체</button>
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
          <template v-for="(name, index) in nameParsing.names">
            <tr :key="index" v-if="(pasingSelect === 'all') || (pasingSelect !== 'all' && pasingSelect === name)">
              <td>{{ name }}</td>
              <td>{{ nameParsing[name].win }}</td>
              <td>{{ nameParsing[name].draw }}</td>
              <td>{{ nameParsing[name].lose }}</td>
              <td>{{ (nameParsing[name][2019] / nameParsing.total[2019] * 100).toFixed(2) }}  %</td>
              <td>{{ (nameParsing[name][2020] / nameParsing.total[2020] * 100).toFixed(2) }}  %</td>
              <td>{{ (nameParsing[name][2021] / nameParsing.total[2021] * 100).toFixed(2) }}  %</td>
              <td>{{ (nameParsing[name].win / nameParsing.total['all'] * 100).toFixed(2) }}  %</td>
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
      yearButton: [],
      yearParsing: [],
      nameParsing: [],
      pageList: [],
      pageItem: 1,
      current: 1,
      list: 0,
      min: 0,
      max: 4,
      pasingSelect: 'all'
    }
  },
  methods: {
    nameLoad (load) {
      this.pasingSelect = load
    },
    paging (next) {
      // 현재 클릭한 index 가 이전 값보다 클때
      if (next > this.current) {
        if (next >= 3 && next + 1 <= this.list) {
          this.min += 1
          this.max += 1
        }
        // 현재 클릭한 index 가 이전 값보다 작을때
      } else {
        if (this.min - 1 >= 0 && next <= (this.list - 2)) {
          this.min -= 1
          this.max -= 1
        }
      }

      this.pageItem = next
      this.current = next
      // 이거 코드가 이상해요 list 는 BOOLEAN 인데
      // this.list = this.pageItem >= 1 && this.pageItem <= 3
      // if (next) {
      //   // 이건 숫자?
      //   this.list = next + 1
      // }
    },
    pagingTest (type) {
      if (type) {
        this.min = 0
        this.max = 4
        this.pageItem = 1
        this.current = 1
      } else {
        this.min = this.list - 3
        this.max = this.list + 1
        this.pageItem = this.list
        this.current = this.list
      }
    },
    yearClick (check) {
      this.yearParsing = []
      if (check === 'all') {
        this.yearParsing = this.indexData
      } else {
        for (let d = 0; d < this.indexData.length; d++) {
          const yearString = this.indexData[d].year
          if (check === Number(yearString)) {
            this.yearParsing.push(this.indexData[d])
          }
        }
      }
      this.pageItem = 1
      this.current = 1
      this.list = Math.ceil(this.yearParsing.length / 10)
    },
    change (text) {
      let result = ''
      if (text === 'win') {
        result = '승'
      } else if (text === 'draw') {
        result = '무'
      } else {
        result = '패'
      }
      return result
    },
    parsingData (data) {
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
            win: this.resultData('win', item.result),
            lose: this.resultData('lose', item.result),
            draw: this.resultData('draw', item.result)
          }
        } else {
          creatData[item.name].win += this.resultData('win', item.result)
          creatData[item.name].lose += this.resultData('lose', item.result)
          creatData[item.name].draw += this.resultData('draw', item.result)
        }
        if (!creatData[item.name][item.year]) {
          creatData[item.name][item.year] = this.resultData('win', item.result)
        } else {
          creatData[item.name][item.year] += this.resultData('win', item.result)
        }
        if (!creatData.total[item.year]) {
          creatData.total[item.year] = 1
          creatData.total['all'] += 1
        } else {
          creatData.total[item.year] += 1
          creatData.total['all'] += 1
        }
      }
      this.nameParsing = creatData
    },
    resultData (result, value) {
      return (result === value) ? 1 : 0
    }
  },
  created () {
    this.$axios.get('https://web.peachkor.com/api/result'
    ).then(res => {
      const yearData = res.data.data.year
      const listData = res.data.data.list
      for (let a = 0; a < yearData.length; a++) {
        this.yearButton.push(yearData[a])
        console.log(yearData[a])
      }
      for (let b = 0; b < listData.length; b++) {
        this.yearParsing.push(listData[b])
        this.list = Math.ceil(listData.length / 10)
      }
      this.parsingData(listData)
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

.paging > div > div {
  cursor: pointer;
}

.paging > div > div.active {
  font-weight: bold;
  color: red;
}
</style>
