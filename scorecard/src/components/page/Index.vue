<template>
  <div class="body">
    <div class="background"></div>
    <div class="wrap">
      <div class="article">
        <div class="item">
          <div class="item__section">
            <table>
              <tr>
                <th rowspan="2" width="20%">홀</th>
                <th colspan="10">전반전</th>
              </tr>
              <tr>
                <th v-for="(num, index) in numbers" :key="index">{{ num }}</th>
                <th>합</th>
              </tr>
              <tr>
                <th>Par</th>
                <td v-for="(par, index) in pars" :key="index">{{ par }}</td>
                <td>{{ parTotal }}</td>
              </tr>
              <tr v-for="(player, playerIndex) in players" :key="playerIndex + 'userA'">
                <th>
                  <span @click="editName(playerIndex)" v-if="!player.intputEdit">{{ player.name }}</span>
                  <div v-if="player.intputEdit">
                    <input type="text" v-if="player.intputEdit" v-model="player.name">
                    <button @click="editName(playerIndex)">저장</button>
                  </div>
                </th>
                <td v-for="(score, index) in scores" :key="index" @click="selectScore(playerIndex, index, true)">
                  {{players[playerIndex]['scores'][index]}}
                </td>
                <td>
                  {{totalScore(player.scores)}}
                </td>
              </tr>
              <tr>
                <th rowspan="2">홀</th>
                <th colspan="10">후반전</th>
              </tr>
              <tr>
                <th v-for="(num, index) in numbers" :key="index" width="7%">{{ num }}</th>
                <th width="8%">합</th>
              </tr>
              <tr>
                <th>Par</th>
                <td v-for="(par, index) in pars" :key="index">{{ par }}</td>
                <td>{{ parTotal }}</td>
              </tr>
              <template>
                <tr v-for="(player, playerIndex) in players" :key="playerIndex + 'userB'">
                  <th>
                    <span @click="editName(playerIndex)" v-if="!player.intputEdit">{{ player.name }}</span>
                    <div v-if="player.intputEdit">
                      <input type="text" v-if="player.intputEdit" v-model="player.name">
                      <button @click="editName(playerIndex)">저장</button>
                    </div>
                  </th>
                  <td v-for="(score, index) in scores" :key="index" @click="selectScore(playerIndex, index, false)">
                    {{players[playerIndex]['scoresB'][index]}}
                  </td>
                  <td>
                    {{totalScore(player.scoresB)}}
                  </td>
                </tr>
              </template>
            </table>
          </div>
          <div class="fuc__button">
            <button @click="add">Palyer</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="modalCheck" class="modal">
      <Score :callback="scoreCallback" :backgroundEvent="backgroundClose"/>
    </div>
  </div>
</template>

<script>
import Score from '../Score.vue'

export default {
  name: 'Index',
  components: {
    Score
  },
  data () {
    return {
      modalCheck: false,
      numbers: 9,
      pars: ['4', '4', '3', '5', '4', '4', '5', '4', '3'],
      parTotal: 36,
      players: [],
      player: 'player',
      scores: 9,
      input: false,
      setPlayer: 0,
      setPlayerScoreIndex: 0,
      half: false
    }
  },
  methods: {
    add () {
      if (this.players.length < 4) {
        this.players.push({
          name: 'player' + this.players.length,
          scores: ['', '', '', '', '', '', '', '', ''],
          scoresB: ['', '', '', '', '', '', '', '', ''],
          intputEdit: false
        })
      }
    },
    editName (playerIndex) {
      console.log(playerIndex)
      this.players[playerIndex]['intputEdit'] = !this.players[playerIndex]['intputEdit']
    },
    selectScore (player, index, half) {
      this.modalCheck = true
      this.setPlayer = player
      this.half = half
      this.setPlayerScoreIndex = index
    },
    scoreCallback (value) {
      this.modalCheck = false
      // 전반전 후반전 설정된 값의 스코어 값을 바꾼다
      this.players[this.setPlayer][this.half ? 'scores' : 'scoresB'][this.setPlayerScoreIndex] = value
    },
    backgroundClose () {
      this.modalCheck = false
    },
    totalScore (list) {
      let total = 0
      for (const i in list) {
        if (typeof list[i] === 'number') {
          total += list[i]
        }
      }
      return total
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("http://www.mkhealth.co.kr/news/photo/202009/50312_50260_1114.jpg");
  opacity: .3;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
}
.item {
  width: 600px;
  height: 100%;
}
table {
  width: 100%;
  border: 2px solid #000;
  border-collapse: collapse;
}
th, td {
  text-align: center;
  border: 2px solid #1e602a;
  font-size: 13px;
  font-weight: bold;
  height: 25px;
  box-sizing: border-box;
  padding: 2px;
}
.fuc__button {
  text-align: right;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>
