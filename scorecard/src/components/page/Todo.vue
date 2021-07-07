<template>
  <div class="wrap">
    <div class="article">
      <div class="contents">
        <div class="contents__load" v-if="modal">
          <div class="modal__background"></div>
          <div div class="modal">
            <div class="modal__item">
              <h1>불러오기</h1>
              <div>
                <span>{{ items }}</span>
              </div>
             </div>
          </div>
        </div>
        <div class="contents__top">
          <h1>TODOLIST</h1>
          <div class="contents__top__input">
            <input type="text" v-model="input" @keyup.enter="add" autofocus>
            <button @click="add">+</button>
            <button @click="save">save</button>
            <button @click="load">load</button>
          </div>
        </div>
        <div class="contents__bottom">
          <ul class="contents__bottom__box">
            <li v-for="(item, index) in items" :key="index" class="contents__bottom__box__list">
              <span v-if="!item.editInput">{{ item.title }}</span>
              <input type="text" v-if="item.editInput" v-model="item.title" class="editInput">
              <div class="contents__bottom__box__button">
                <button @click="edit(index)">{{ item.editInput ? 'S' : 'E' }}</button>
                <button @click="del(index)">D</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  components: {
  },
  data () {
    return {
      items: [],
      input: '',
      modal: false
    }
  },
  methods: {
    add () {
      if (this.input.length > 0) {
        const inputValue = {
          title: this.input,
          editInput: false
        }
        this.items.push(inputValue)
      }
      this.input = ''
    },
    edit (index) {
      console.log(this.items[index])
      this.items[index].editInput = !this.items[index].editInput
    },
    del (index) {
      this.items.splice(index, 1)
      console.log(index)
    },
    save () {
      this.$cookies.set('Todo', JSON.stringify(this.items))
    },
    load () {
      this.items = JSON.parse(this.$cookies.get('Todo'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section {
  height: 100%;
}
.article {
  width: 350px;
  height: 570px;
  background: #fff;
  border-radius: 10px;
}
.contents__top > h1 {
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
}
.contents__top__input {
  text-align: center;
}
.contents__top__input > input {
  width: 70%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0px 10px;
  box-sizing: border-box;
}
.contents__top__input > button {
  width: 10%;
  height: 24px;
  border: 0px;
  cursor: pointer;
  border-radius: 5px;
}
.contents__bottom {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 10px;
}
.contents__bottom__box {
  border: 1px solid #ccc;
  width: 95%;
  height: 470px;
  text-align: center;
  border-radius: 10px;
  overflow-y: scroll;
}
.contents__bottom__box > li {
  width: 90%;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  margin: 5px auto 0px;
}
.contents__bottom__box__list {
  display: flex;
  justify-content: space-between;
}
.contents__bottom__box__list > span {
  width: 80%;
  text-align: left;
}
.contents__bottom__box__button {
  width: 15%;
}
.contents__load {
  width: 100%;
  height: 100%;
  position: relative;
}
.modal__background {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #000;
}
.modal__item {
  position: absolute;
  width: 300px;
  height: 400px;
  background: #f7f7f7;
  left: 37%;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal__item > h1 {
  text-align: center;
  font-size: 25px;
  margin: 10px 0px;
}
.modal__item  > div {
  width: 90%;
  height: 82%;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.editInput {
  width: 80%;
}
</style>
