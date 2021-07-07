<template>
<div class=wrap>
    <div class="todo">
        <div class="todo__top">
            <h1>TODOLIST</h1>
        </div>
        <div class="todo__bottom">
            <div class="list__section">
                <div class="list">
                    <div class="list__top">
                        <div>
                            <input v-model="input" type="text" @keyup.enter="addButton" autofocus>
                            <button @click="addButton">추가</button>
                        </div>
                    </div>
                    <div class="list__bottom">
                        <ul>
                            <li v-for="(item, index) in items" :key="index">
                                <span v-if="!item.editInput">{{ item.title }}</span>
                                <input class="editInput" v-if="item.editInput" v-model="item.title" @keyup.enter="editB" autofocus>
                                <div>
                                    <button @click="editB(index)">{{ item.e ? '수정' : '저장' }}</button>
                                    <button @click="delB(index)">{{ del }}</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <button class="load" @click="load">불러오기</button>
        </div>
    </div>
    <div class="load__section" :class="{'active': modal }">
        <div class="load__back" >
        </div>
        <div class="load__modal">
            <h1>저장된 내용</h1>
            <div class="laod__data" :class="{'active': modal }">
                <ul>
                    <li v-for="(item, index) in list" :key="index">
                        <span v-if="!item.editInput">{{ item.title }}</span>
                    </li>
                </ul>
            </div>
            <button class="check__button" @click="back">확인</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      input: '',
      span: '',
      del: '삭제',
      items: [],
      list: [],
      modal: false
    }
  },
  methods: {
    addButton () {
      if (this.input.length > 0) {
        const inputValue = {
          title: this.input,
          editInput: false,
          e: true
        }
        this.items.push(inputValue)
      }
      this.input = ''
    },
    delB (index) {
      this.items.splice(index, 1)
    },
    editB (index) {
      console.log(this.items[index], index)
      this.items[index].editInput = !this.items[index].editInput
      this.items[index].e = !this.items[index].e
    },
    load () {
      this.modal = true
    },
    back () {
      this.modal = false
    }
  },
  mounted () {
    this.$axios.get('https://web.peachkor.com/api/todoData')
      .then(res => {
        // 배열 이다
        const loadData = res.data.data
        for (let a = 0; a < loadData.length; a++) {
          // 내 데이터 값
          const dd = {
            title: loadData[a].titile,
            editInput: false
          }
          console.log(dd)
          this.list.push(dd)
        }
      })
  }
}

</script>

<style scoped>
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
.todo {
    width: 500px;
    height: 800px;
    background: linear-gradient(0deg, rgba(249,142,20,1) 42%, rgba(179,72,245,1) 94%);
    border-radius: 10px;
}
.todo__top {
    padding-top: 20px;
    box-sizing: border-box;
}
.todo__top > h1 {
    color:#2c1838;
}
.todo__bottom {
    position: relative;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
}
.list__section {
    width: 90%;
    height: 90%;
    margin-top: 10%;
    background: #fff;
    border-radius: 10px;
}
.list {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.list__top {
    width: 100%;
    display: flex;
    justify-content: center;
}
.list__top > div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.list__top > div > input {
    width: 85%;
    height: 30px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.list__top > div > button {
    width: 10%;
    border-radius: 5px;
    border: 1px;
    cursor: pointer;
}
.list__bottom {
    width: 100%;
    display: flex;
    justify-content: center;
}
.list__bottom > ul {
    border: 1px solid #ccc;
    width: 90%;
    height: 575px;
    margin-top: 10px;
    border-radius: 5px;
    overflow-y: scroll;
}
.list__bottom > ul > li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #000;
    padding: 5px 5px 5px 20px;
}
.list__bottom > ul > li > div > button {
    width: 40px;
    height: 30px;
    border-radius: 5px;
    border: 0px;
    background: #efefef;
    cursor: pointer;
}
.load {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 15%;
    border-radius: 5px;
    border: 1px;
    cursor: pointer;
}
.editInput {
    width: 70%;
}
.load__section {
    transform: scale(0);
}
.load__section.active {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 0.5s;
}
.load__back {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
}
.load__modal {
    position: absolute;
    width: 20%;
    height: 60%;
    top: 15%;
    left: 40%;
    background: #f7f7f7;
    border-radius: 10px;
}
.laod__data {
    background: #ccc;
    width: 80%;
    height: 80%;
    margin: 20px auto 0px;
    border-radius: 10px;
}
.check__button {
    margin-top: 7px;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    border: 0px;
    background: #ccc;
    cursor: pointer;
}
</style>
