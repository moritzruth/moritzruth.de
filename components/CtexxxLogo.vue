<template>
  <div>
    <transition name="slide-vertical" mode="out-in">
      <div class="logo" :key="debouncedLogoText">
        <span class="text">{{ debouncedLogoText }}</span>
        <div class="underline full-width"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  import _debounce from "lodash.debounce";

  const debounceLogoText = _debounce((self, newValue) => {
    self.debouncedLogoText = newValue;
  }, 100);

  export default {
    name: "CtexxxLogo",
    created() {
      this.debouncedLogoText = this.text || "ctexxx";
    },
    props: {
      text: String
    },
    data() {
      return {
        debouncedLogoText: ""
      }
    },
    watch: {
      text(newValue) {
        debounceLogoText(this, newValue || "ctexxx");
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_responsive";
  @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates');

  .slide-vertical-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-vertical-leave-active {
    transition: all 0.3s ease-in;
  }

  .slide-vertical-enter-to {
    opacity: 1;
  }

  .slide-vertical-enter, .slide-vertical-leave-to {
    opacity: 0;
  }

  .logo {
    user-select: none;

    margin: 0 auto;
    width: fit-content;

    & > .text {
      font-family: 'Montserrat Alternates', sans-serif;

      font-size: 5em;

      color: #c34545;
      text-shadow: 0 0 60px rgba(0, 0, 0, 0.5);

      @include desktop {
        font-size: 12em;
      }
    }

    & > .underline {
      transform: translateY(-0.7em);

      height: 3px;

      background: white;
      box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.75);

      @include desktop {
        transform: translateY(-2em);

        height: 5px;
      }

      margin: 0 auto;
    }
  }
</style>
