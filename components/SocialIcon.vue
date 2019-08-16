<template>
  <a id="root" rel="noopener" :href="`https://go.ctexxx.dev/${name}`" target="_blank" @touchstart="onTouch">
    <div class="box" :style="{'background-color': '#' + simpleIcon.hex}">
      <div class="icon" v-html="simpleIcon.svg" :class="{inverted: invert}">
      </div>
    </div>
    <span class="title">{{ simpleIcon.title }}</span>
  </a>
</template>

<script>
  const requireIcon = require.context("simple-icons/icons/", false, /(instagram|github|twitter|keybase|npm)\.js/);

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
    },
    methods: {
      onTouch(e) {
        if (document.activeElement !== this.$el) {
          e.preventDefault();
          this.$el.focus();
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/css/_responsive";

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

      transition: box-shadow 0.2s linear;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

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

    &:hover, &:focus {
      .title {
        opacity: 1;
      }

      .box {
        box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }
</style>
