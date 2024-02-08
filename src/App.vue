<template>
  <NavHeader />
  <div class="container">
    <AboutMe />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import NavHeader from './components/NavHeader.vue'

export default {
  name: 'App',
  components: {
    AboutMe,
    NavHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

.container {
  margin-left: 10%;
  margin-right: 10%;
}
</style>
