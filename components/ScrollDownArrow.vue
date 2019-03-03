<template>
  <div class="scroll-down-arrow">
    <div id="arrow-container" @click="onClick">
      <div id="left-line"></div>
      <div id="right-line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ScrollDownArrow",
    mounted() {
      this.$nextTick(() => {
        this.elm = document.querySelector(this.to);

        if(!this.elm) {
          throw new Error("No matching element found");
        }
      });
    },
    data: () => ({
      elm: null
    }),
    props: {
      to: String,
      container: String
    },
    methods: {
      onClick() {
        const container = this.container ? document.querySelector(this.container) : window;

        container.scrollTo({
          'behavior': "smooth",
          'left': 0,
          'top': this.elm.offsetTop
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  .scroll-down-arrow {
    height: 40px;

    position: absolute;
    bottom: 10px;
    right: 0;
    left: 0;

    display: table;
    margin: 0 auto;

    animation: moveVertical 2s alternate linear infinite;
  }

  #arrow-container {
    position: relative;

    margin: 0 auto;
    width: fit-content;
  }

  #left-line, #right-line {
    width: 20px;
    height: 2px;
    background-color: white;
    display: inline-block;
  }

  #left-line {
    transform: rotate(45deg) translateX(9px);
  }

  #right-line {
    transform: rotate(-45deg) translateX(-9px);
  }

  @keyframes moveVertical {
    0% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }
</style>
