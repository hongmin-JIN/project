<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html, body {
  width: 100%;
  height: 100%;
}
ul {
  list-style-type: none;
}
.wrap {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  font-family: "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
