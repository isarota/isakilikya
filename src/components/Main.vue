<template>
  <div class="container">
    <img alt="Vue logo" src="@/assets/cover.jpg">
    <br> <br>
    <h1>{{ msg }}</h1>
    <p>
      I am a Software Engineer worked on Django Web Projects and on Java SOAP Projects.
    </p>
    <p>
      I'm 25 years old and I live in Istanbul.
    </p>
    <h3>Top Skills</h3>
    <ul>
      <li v-for="skill in topSkills" v-bind:key="skill.name"><a href="#" target="" rel="noopener">{{skill.name}}</a></li>
    </ul>
    <hr>
    <router-link to="/information" class="btn btn-outline-success">More Information</router-link>
  </div>
</template>

<script>
export default {
  name: 'Main',
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
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: underline;
}
</style>
