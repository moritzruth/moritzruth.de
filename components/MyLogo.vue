<template>
  <div class="logo">
    <img src="@/assets/images/logo.svg" draggable="false"/>
    <transition name="fade" mode="out-in">
      <span class="name" :key="debouncedName">{{ debouncedName }}</span>
    </transition>
  </div>
</template>

<style scoped lang="scss">
  .fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .fade-leave-active {
    transition: all 0.3s ease-in;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .logo {
    height: 40%;
    user-select: none;
    pointer-events: none;

    & > img {
      height: 90%;
      display: block;
      margin: 0 auto;
    }

    .name {
      height: 10%;
      display: block;
      text-align: center;

      font-size: 1.5rem;
      font-family: "Raleway", monospace;
      letter-spacing: 4px;
      word-spacing: 6px;
    }

    padding-bottom: 20px;
  }
</style>

<script>
  import _debounce from "lodash.debounce";

  export default {
    name: "MyLogo",
    props: {
      name: String
    },
    data() {
      return {
        debouncedName: this.name
      };
    },
    watch: {
      name: _debounce(function(value) {
        this.debouncedName = value;
      }, 100)
    }
  };
</script>
