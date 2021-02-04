<template>
  <section>
    <div class="row">
      <div class="col-4">
        <img alt="Isa Kilikya" src="@/assets/isa_cv.png">
      </div>
      <div class="col-6">
        <h3>About</h3>
        <p>İsa Kilikya (Software Developer)</p>
        <p>In this page, my <strong>Skills</strong> and <strong>Contact Informations</strong> are listed.</p>
        <p>After I graduated<i>(in 2019)</i> from <strong>Computer Engineering</strong><i>(with Bachelor's Degree)</i> department of Cukurova University, I moved to Istanbul and started to work.</p>
        <p>I make great efforts on projects.</p>
        <p>I'm proficient in <strong>English</strong> with C2 Course Certificate given by American Culture Language Schools.</p>
      </div>
      <div class="col-2">
        <router-link to="/" class="btn btn-outline-success">Home Page</router-link>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-12">
        <h3>Skills</h3>
      </div>
      <div class="col-12">
        <p>
          Firstly I started working as a Full Stack Developer. 
          In my first year I used Django Framework in Backend and jQuery in Frontend.
        </p>
        <p>
          I'm in my second job I'm working as a Java Middleware Developer.
        </p>
      </div>
      <div class="col-6">
        <h4>As Full Stack Developer</h4>
        <ul>
          <li v-for="job in firstJobSkills" :key="job">{{job}}</li>
        </ul>
      </div>
      <div class="col-6">
        <h4>As Java Developer</h4>
        <ul>
          <li v-for="job in secondJobSkills" :key="job">{{job}}</li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-12">
        <h3>Contact</h3>
      </div>
      <div class="col-6">
        <ul>
          <li>Email: isakilikya@gmail.com</li>
          <li>Hackerrank: <a href="https://www.hackerrank.com/isakilikya">isakilikya</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "information",
    data() {
      return {
        firstJobSkills: ["Python3", "Django", "JavaScript", "jQuery", "SQL", "MySQL", "Git", "GitLab", "Ubuntu Server", "AWS", "Bootstrap"],
        secondJobSkills: ["Java", "Eclipse", "Bitbucket", "Jira", "Confluence", "PL/SQL", "Scrum"],
      }
    },
}
</script>

<style scoped>
h3 {
  margin: 0.5em;
}
a {
  color: #42b983;
  text-decoration: underline;
}
</style>