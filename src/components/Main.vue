<template>
  <div class="hello">
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
    <h3>Essential Links</h3>
    <ul>
      <li v-for="link in links" v-bind:key="link.name"><a href={{link.url}} target="_blank" rel="noopener">{{link.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String,
    topSkills: Array,
    links: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
