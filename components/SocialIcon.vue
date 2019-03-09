<template>
  <a id="root" rel="noopener" :href="`https://go.ctexxx.dev/${name}`" target="_blank">
    <div class="box" :style="{'background-color': '#' + simpleIcon.hex}">
      <div class="icon" v-html="simpleIcon.svg" :class="{inverted: invert}">
      </div>
    </div>
    <span class="title">{{ simpleIcon.title }}</span>
  </a>
</template>

<script>
  const requireIcon = require.context("simple-icons/icons/", false, /(instagram|github|twitter|keybase)\.js/);

  export default {
    name: "SocialIcon",
    props: {
      name: String,
      to: String,
      username: String,
      invert: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        simpleIcon: requireIcon(`./${this.name}.js`)
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_responsive";

  #root {
    display: inline-block;

    margin: 5px;
    text-decoration: none;
    height: 50px;
    width: 50px;

    @include desktop {
      height: 70px;
      width: 70px;
    }

    .box {
      border-radius: 50px;
      padding: 10px;
      height: 100%;
      width: 100%;

      transition: 0.5s ease-out;

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
      .title {
        opacity: 1;
      }
    }
  }
</style>
