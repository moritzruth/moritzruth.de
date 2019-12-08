<template>
  <div class="animated-logo">
    <div class="animated-logo__bar-1"></div>
    <div class="animated-logo__bar-2"></div>
    <MyLogo class="animated-logo__logo"/>
  </div>
</template>

<style scoped lang="scss">
  $logo-width: 270px;

  .animated-logo {
    animation: logo-width 800ms 1s ease, logo-height 600ms 1.9s ease;
    animation-fill-mode: both;

    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
  }

  @keyframes logo-width {
    from {
      width: 0;
    }

    to {
      width: $logo-width;
    }
  }

  @keyframes logo-height {
    from {
      height: 10px;
    }

    to {
      height: 230px;
    }
  }

  .animated-logo__bar-1, .animated-logo__bar-2 {
    background-color: currentColor;
    position: absolute;

    left: 0;
    right: 0;
    height: 6px;

    animation: fadeOut 400ms 2.8s ease-in both;
  }

  .animated-logo__bar-1 {
    top: 0;
  }

  .animated-logo__bar-2 {
    bottom: 0;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .animated-logo__logo {
    width: $logo-width;
    flex-shrink: 0;
  }
</style>

<script>
  import MyLogo from "@/assets/media/MyLogo.svg";

  export default {
    name: "AnimatedLogo",
    components: { MyLogo }
  };
</script>
