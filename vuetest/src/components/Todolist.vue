<template>
    <div class=wrap>
        <div class="section">
            <h1>TODOLIST</h1>
            <div class="inputSection">
                <div class="inputSectionButton">
                    <input v-model="input" @keyup.enter="addButton" autofocus>
                    <button @click="addButton">+</button>
                </div>
            </div>
            <div class=listSection>
                <ul class="itemBox">
                    <li v-for="(item, index) in items" :key="index">
                        <span v-if="!item.editInput">{{ item.title }}</span>
                        <input class="editInput" v-if="item.editInput" v-model="item.title">
                        <button @click="delB(index)">D</button>
                        <button @click="editB(index)">{{ item.e ? 'E' : 'S' }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Todolist',
  data () {
    return {
      input: '',
      items: []
    }
  },
  methods: {
    addButton () {
      if (this.input.length > 0) {
        const inputValue = {
          title: this.input,
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
      this.items[index].editInput = !this.items[index].editInput
      this.items[index].e = !this.items[index].e
    }
  }
}

</script>

<style scoped>
h1 {
    margin: 10px;
    color: #e3e3e3;
    letter-spacing: 15px;
}
.wrap {
    display: flex;
    width: 100%;
    height: 100%;
}
.section {
    margin: auto;
    width: 500px;
    height: 800px;
    margin-top: 80px;
    border: 2px solid gray;
    border-radius: 20px;
    background-color: #165710;
}
.section ul {
    border: 1px solid gray;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #ffffff;
    overflow-y: scroll;
}
.section ul li {
    margin: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #165710;
}
.section ul li button {
    width: 30px;
    float: right;
    height: 18px;
}
.inputSection {
    display: flex;
}
.inputSectionButton {
    margin: auto;
}
.inputSectionButton input {
    padding-left: 10px;
}
.section input {
    width: 250px;
    height: 30px;
}
.section button {
    width: 40px;
    height: 30px;
}
.listSection {
    padding: 15px;
    box-sizing: border-box;
    height: calc(100% - 97px);
}
.editInput {
    height: 10px;
    padding-left: 10px;
}

</style>
