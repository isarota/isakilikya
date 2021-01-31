<template>
  <img alt="Vue logo" src="./assets/cover.jpg">
  <br> <br>
  <Main msg="İsa Kilikya (Developer)" :topSkills="topSkills" :links="links"/>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  data() {
    return {
      msg: "İsa Kilikya (Developer)",
      topSkills: [
        {name: "Django Framework"},
        {name: "jQuery"},
        {name: "SQL"},
        {name: "Git"},
        {name: "Linux CLI"},
        {name: "Java"}
      ],
      links: [
        {name: "LinkedIn", url: "https://www.linkedin.com/in/isa-imadoglu/"},
        {name: "GitHub", url: "https://github.com/isakilikya"},
        {name: "Twitter", url: "https://twitter.com/isakilikya"}
      ]
    }
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
  margin-top: 40px;
}
</style>
