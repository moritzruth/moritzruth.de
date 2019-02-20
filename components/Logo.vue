<template>
  <div class="full-width">
    <transition name="slide-vertical" mode="out-in">
      <div class="logo" :key="debouncedLogoText">
        <span class="text">{{ debouncedLogoText }}</span>
        <div class="underline full-width"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import _debounce from "lodash.debounce";

  const debounceLogoText = _debounce((self, newValue) => {
    self.debouncedLogoText = newValue;
  }, 100);

  export default {
    name: "Logo",
    created() {
      this.debouncedLogoText = this.$store.state.logoText;
    },
    data() {
      return {
        debouncedLogoText: ""
      }
    },
    computed: {
      ...mapState(["logoText"])
    },
    watch: {
      logoText(newValue) {
        debounceLogoText(this, newValue);
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_mq.scss";

  .slide-vertical-enter-active {
    transition: all 0.5s ease-out;
  }

  .slide-vertical-leave-active {
    transition: all 0.5s ease-in;
  }

  .slide-vertical-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .slide-vertical-enter {
    transform: translateY(-100px);
    opacity: 0;
  }

  .slide-vertical-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }

  .logo {
    margin: 0 auto;
    width: fit-content;

    & > .text {
      font-family: 'Montserrat Alternates', sans-serif;

      font-size: 5em;

      color: #c34545;
      text-shadow: 0 0 60px rgba(0, 0, 0, 0.5);

      @include mq($from: tablet) {
        font-size: 12em;
      }
    }

    & > .underline {
      transition: width 1s ease-in-out;

      transform: translateY(-0.7em);

      height: 3px;

      background: white;
      box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.75);

      @include mq($from: tablet) {
        transform: translateY(-2em);

        height: 5px;
      }
    }
  }
</style>
