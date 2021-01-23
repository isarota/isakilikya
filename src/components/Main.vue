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
      <li><a href="#" target="" rel="noopener">Django Framework</a></li>
      <li><a href="#" target="" rel="noopener">jQuery</a></li>
      <li><a href="#" target="" rel="noopener">SQL</a></li>
      <li><a href="#" target="" rel="noopener">Git</a></li>
      <li><a href="#" target="" rel="noopener">Linux CLI</a></li>
      <li><a href="#" target="" rel="noopener">Java</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://www.linkedin.com/in/isa-imadoglu/" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="https://github.com/isakilikya" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://twitter.com/isakilikya" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
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
}
</style>
