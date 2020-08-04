<template>
  <div class="animated-logo">
    <svg class="animated-logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="76.75 182.661 358.5 146.679">
      <path
        class="animated-logo__m1"
        d=" M 121.75 182.749 L 166.75 329.339 L 76.75 329.339 L 121.75 182.749 Z "
        fill-rule="evenodd"
        fill="currentColor"
      />
      <path
        class="animated-logo__m2"
        d=" M 206.75 182.749 L 251.75 329.339 L 161.75 329.339 L 206.75 182.749 Z "
        fill-rule="evenodd"
        fill="currentColor"
      />
      <path
        class="animated-logo__r1"
        d=" M 327.25 182.705 L 372.25 329.295 L 282.25 329.295 L 327.25 182.705 Z "
        fill-rule="evenodd"
        fill="currentColor"
      />
      <path
        class="animated-logo__r2"
        d=" M 390.537 329.339 L 345.25 182.837 L 435.25 182.661 L 390.537 329.339 Z "
        fill-rule="evenodd"
        fill="currentColor"
      />
    </svg>
    <div class="animated-logo__name">
      Moritz Ruth
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "~@/assets/styles/colors";

  $scale-up-duration: 800ms;
  $slide-delay: 200ms;
  $slide-duration: 800ms;
  $fade-duration: 400ms;
  $fade-delay: $slide-delay + 300ms;
  $slide-length: 37.5%;
  $fade-name-delay: $fade-delay;
  $fade-name-duration: 300ms;

  .animated-logo {
    width: 300px;
    max-width: 60vw;
    padding: 40px 40px 30px;
  }

  .animated-logo__svg {
    width: 100%;
    color: colors.$background-c;

    margin-bottom: 20px;
    animation: scaleUp $scale-up-duration ease-out both;
  }

  .animated-logo__m1, .animated-logo__r2 {
    animation: slideFromRight $slide-duration $slide-delay ease both;
  }

  .animated-logo__r2 {
    animation-name: slideFromLeft;
  }

  .animated-logo__m2, .animated-logo__r1 {
    animation: fadeIn $fade-duration $fade-delay ease both;
    transform: translateX(5px);
  }

  .animated-logo__m2 {
    animation-delay: $fade-delay + 100ms;
  }

  .animated-logo__name {
    font-size: 2rem;
    animation: fadeIn $fade-name-duration $fade-name-delay ease both;
    text-align: center;
  }

  @keyframes scaleUp {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes slideFromRight {
    from {
      transform: translateX(#{$slide-length});
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes slideFromLeft {
    from {
      transform: translateX(#{$slide-length * -1});
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>

<script>
  export default {
    name: "AnimatedLogo"
  }
</script>
