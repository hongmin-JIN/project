<template>
    <div class='wrap'>
        <div class="menu" v-bind:class="{ active: aa }">
            <ul class="menuLeft">
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
                <li>sdasd</li>
            </ul>
            <button class="button" @click="button">{{ menuButton }}</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      aa: false,
      menuButton: '>'
    }
  },
  methods: {
    button () {
      this.aa = !this.aa
    }
  }
}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
}
.menu{
    position: absolute;
    display: block;
    left: -300px;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}
.menu.active{
    left: 0px;
}
.menuLeft{
    position: absolute;
    display: block;
    width: 300px;
    height: 100%;
    border: 3px solid gray;
    border-radius: 10px;
}
.button{
    position: absolute;
    left:305px;
    top:0;
    width: 50px;
    height: 50px;
}
</style>
