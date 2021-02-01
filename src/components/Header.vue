<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand" href="#">{{ siteName }}</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li v-for="link in links" v-bind:key="link.name" class="nav-item pr-2">
          <a :href="link.url" target="_blank" rel="noopener">
            <img :src="link.icon" :alt="link.name" width="30" height="30">
            <span>{{link.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/isa-imadoglu/", icon:"https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0/1590003577120?e=1620259200&v=beta&t=1Iq9HQPG96S_papRMhGQ_ChV6n_5BfKs7ugmAspZVNk" },
        { name: "GitHub", url: "https://github.com/isakilikya", icon:"https://pbs.twimg.com/profile_images/1338344493234286592/C_ujKIUa_400x400.png" },
        { name: "Twitter", url: "https://twitter.com/isakilikya", icon:"https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg" },
      ],
    };
  },
  props: {
    siteName: String,
  },
};
</script>

<style></style>
