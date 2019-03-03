<template>
  <a id="root" rel="noopener" :href="to" target="_blank"
     @mouseenter="$store.commit('setLogoText', username)"
     @mouseleave="$store.commit('resetLogoText', username)"
  >
    <div class="box" :style="{'background-color': '#' + simpleIcon.hex}">
      <div class="icon" v-html="simpleIcon.svg" :class="{inverted: invert}">
      </div>
    </div>
    <span class="title">{{ simpleIcon.title }}</span>
  </a>
</template>

<script>
  const requireIcon = require.context("simple-icons/icons/", false, /(instagram|github|twitter|keybase)\.js/);

  console.log(requireIcon.keys());
  export default {
    name: "SocialIcon",
    props: {
      icon: String,
      to: String,
      username: String,
      invert: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        simpleIcon: requireIcon(`./${this.icon}.js`)
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_mq";

  #root {
    display: inline-block;

    margin: 5px;
    text-decoration: none;
    height: 50px;
    width: 50px;

    @include mq($from: tablet) {
      height: 70px;
      width: 70px;
    }

    .box {
      border-radius: 50px;
      padding: 10px;
      height: 100%;
      width: 100%;

      transition: 0.5s ease-out;
      transform: scale(1);

      .icon {
        height: 100%;
        width: auto;

        // Hide tooltips
        pointer-events: none;

        &.inverted {
          filter: invert(1);
        }
      }
    }

    .title {
      display: inline-block;
      white-space: nowrap;
      width: 200%;
      text-align: center;

      opacity: 0;
      transition: opacity 0.5s ease-out;

      color: #ffffff;

      position: relative;
      top: 13px;
      left: -50%;
    }

    &:hover {
      .box {
        transform: scale(1.1);
      }

      .title {
        opacity: 1;
      }
    }
  }
</style>
