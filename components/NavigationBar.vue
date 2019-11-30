<template>
  <nav class="navigation-bar" :class="{ 'show-background': showBackground, open, scrolled }">
    <div class="navigation-bar__toggle" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="navigation-bar__container-1">
      <span class="navigation-bar__title">{{ title }}</span>
      <div class="navigation-bar__container-2">
        <div class="navigation-bar__links">
          <template v-for="item in $options.navigationItems">
            <nuxt-link
              v-if="item.to"
              :key="item.to"
              :to="item.to"
              @click.native.passive="open = false"
            >
              {{ item.label }}
            </nuxt-link>
            <a
              v-else
              :key="item.to"
              rel="noopener"
              :href="item.href"
              @click.native.passive="open = false"
            >
              {{ item.label }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/mobile";

  .navigation-bar {
    height: var(--navbar-height);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.1rem;
    text-transform: uppercase;

    background-color: transparent;

    &.show-background {
      background-color: white;
    }

    &.scrolled {
      .navigation-bar__title {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .navigation-bar__toggle {
    display: none;
  }

  .navigation-bar__title {
    font-size: 1.5rem;
    font-weight: bold;

    transition: 200ms ease;
    transition-property: opacity, transform;

    opacity: 0;
    transform: translateY(10px);

    @include notMobile {
      font-size: 2rem;
    }
  }

  .navigation-bar__container-1 {
    margin: 0 auto;
    max-width: 100%;
    width: 1000px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation-bar__container-2 {
    width: 100%;
  }

  .navigation-bar__links {
    float: right;

    a {
      display: inline-block;
      margin-left: 40px;
      position: relative;

      text-decoration: none;
      color: black;

      &::after {
        content: "";
        position: absolute;
        top: 30px;
        left: 0;
        background-color: black;
        height: 2px;
        width: 100%;

        opacity: 0;
        transition: 200ms linear opacity;
      }

      &:hover {
        &::after {
          opacity: 1;
        }
      }
    }
  }

  @include mobile {
    .navigation-bar__toggle {
      display: block;

      position: relative;
      left: 30px;
      z-index: 2;

      & > span {
        display: block;

        background-color: black;

        width: 30px;
        height: 2px;

        transition: 200ms linear;
        transition-property: opacity, transform;

        &:nth-child(2) {
          margin-top: 8px;
        }

        &:nth-child(3) {
          margin-top: 8px;
        }
      }
    }

    .navigation-bar__container-1 {
      margin-left: 50px;
    }

    .navigation-bar__container-2 {
      pointer-events: none;
      background-color: white;

      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;

      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: var(--navbar-height);

      opacity: 0;
      transition: 200ms ease-out opacity;
    }

    .navigation-bar__links {
      float: none;

      & > a {
        display: block;
        width: fit-content;
        margin: 0 auto 20px;
        font-size: 1.5rem;

        transform: translateX(-100%);
        opacity: 0;
        transition: 400ms ease-out;
        transition-property: opacity, transform;

        &:after {
          top: 35px;
        }
      }
    }

    .navigation-bar.open {
      .navigation-bar__toggle > span {
        &:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }
      }

      .navigation-bar__container-2 {
        pointer-events: auto;
        opacity: 1;
      }

      .navigation-bar__links > a {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
</style>

<script>
  const NAVIGATION_ITEMS = [
    {
      label: "Home",
      to: "/"
    },
    {
      label: "Projects",
      to: "/projects"
    }
  ];

  export default {
    name: "NavigationBar",
    navigationItems: NAVIGATION_ITEMS,
    props: {
      showBackground: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      }
    },
    data: () => ({
      open: false,
      scrollPosition: 0
    }),
    computed: {
      scrolled: vm => vm.scrollPosition > 80
    },
    mounted() {
      const scrollListener = () => {
        this.scrollPosition = window.scrollY;
      };

      window.addEventListener("scroll", scrollListener, { passive: true });

      this.$on("hook:beforeDestroy", () => {
        window.removeEventListener("scroll", scrollListener);
      });

      scrollListener();
    }
  };
</script>
