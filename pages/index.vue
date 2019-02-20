<template>
  <div class="hero full-width">
    <div id="centered">
      <Logo/>

      <div id="social-icons">
        <SocialIcon icon="github" to="https://github.com/ctexxx" username="ctexxx" invert/>
        <SocialIcon icon="twitter" to="https://twitter.com/cte3x" username="cte3x" invert/>
        <SocialIcon icon="instagram" to="https://instagram.com/cte3x" username="cte3x" invert/>
        <SocialIcon icon="keybase" to="https://keybase.io/ctexxx" username="cte3x"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from "../components/Logo";
  import SocialIcon from "@/components/SocialIcon";

  export default {
    name: "index",
    components: { SocialIcon, Logo }
  };
</script>

<style scoped lang="scss">
  .hero {
    height: 100vh;
    background-color: #1C1C1C;

    display: table;
  }

  #centered {
    display: table-cell;
    vertical-align: middle;
  }

  #social-icons {
    margin: 0 auto;
    width: fit-content;
  }
</style>
