<template>
  <div id="index">
    <section class="section section-hero vertically-centered-container">
      <div class="vertically-centered">
        <Logo/>
        <div class="horizontally-centered">
          <SocialIcon icon="github" to="https://github.com/ctexxx" username="ctexxx" invert/>
          <SocialIcon icon="twitter" to="https://twitter.com/cte3x" username="cte3x" invert/>
          <SocialIcon icon="instagram" to="https://instagram.com/cte3x" username="cte3x" invert/>
          <SocialIcon icon="keybase" to="https://keybase.io/ctexxx" username="cte3x"/>
        </div>
      </div>
      <ScrollDownArrow to=".section-1" container="#index"/>
    </section>
    <section class="section section-1">
      <div class="vertically-centered-container">
        <div class="vertically-centered">
          <div class="horizontally-centered">
            <h1>Hi, I’m Moritz</h1>
            <p>
              I create code and photos.
            </p>
          </div>
          <div class="projects">
            <div class="horizontally-centered">
              <h2>pzl</h2>
              <p>
                <a href="https://github.com/ctexxx/pzl" rel="noopener">GitHub</a>
                 |
                <a href="https://www.npmjs.com/package/@ctexxx/pzl" rel="noopener">NPM</a></p>
              A pretty zero-configuration console logger
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Logo from "@/components/Logo";
  import SocialIcon from "@/components/SocialIcon";
  import ScrollDownArrow from "@/components/ScrollDownArrow";

  export default {
    name: "index",
    components: { ScrollDownArrow, SocialIcon, Logo }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_mq.scss";

  #index {
    scroll-snap-type: y mandatory;

    overflow-y: scroll;
  }

  .section {
    position: relative;

    scroll-snap-align: start;
  }

  .section-hero {
    background-color: #1C1C1C;
  }

  .section-1 {
    background-color: #202020;
    color: white;

    padding: 20px;

    h1 {
      font-size: 50px;

      @include mq($from: tablet) {
        font-size: 80px;
      }
    }

    h2 {
      font-size: 35px;

      @include mq($from: tablet) {
        font-size: 50px;
      }

      margin-bottom: 10px;
    }

    p {
      font-size: 18px;

      @include mq($from: tablet) {
        font-size: 20px;
      }
    }

    .projects {
      text-align: center;
      margin-top: 100px;

      .horizontally-centered {
        width: 75%;
      }
    }
  }
</style>
