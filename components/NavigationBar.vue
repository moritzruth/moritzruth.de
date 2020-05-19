<template>
  <div class="navigation-bar" :class="classes">
    <div class="navigation-bar__placeholder"></div>
    <nav class="navigation-bar__content">
      <div class="navigation-bar__title-container">
      <span
        class="navigation-bar__title"
        :class="{ 'navigation-bar__title--show': showTitle }"
      >
        {{ title }}
      </span>
      </div>
      <div class="navigation-bar__toggle" @click="open = !open">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="navigation-bar__links">
        <div
          v-for="item in $options.items"
          class="navigation-bar__link-container"
          :key="item.label"
        >
          <nuxt-link
            v-if="item.to"
            class="navigation-bar__link"
            :to="item.to"
            @click.native.passive="open = false"
          >
            {{ item.label }}
          </nuxt-link>
          <a
            v-else
            class="navigation-bar__link"
            rel="noopener"
            :href="item.href"
            @click.passive="open = false"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
  @use "~@/assets/styles/screenSize";
  @use "~@/assets/styles/colors";
  @use "~@/assets/styles/content";
  @use "~@/assets/styles/z-indexes";

  body {
    --navigation-bar-height: 80px;
  }

  .navigation-bar__placeholder {
    height: var(--navigation-bar-height);
  }

  .navigation-bar__content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: z-indexes.$navigation-bar;

    height: var(--navigation-bar-height);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    .navigation-bar--show-background & {
      background: colors.$background;
    }
  }

  .navigation-bar__toggle {
    position: relative;
    z-index: 1;

    & > span {
      display: block;
      background-color: colors.$background-c;

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

  .navigation-bar__title-container {
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .navigation-bar__title {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    display: block;

    opacity: 0;
    transform: translateY(10px);
    transition: 200ms ease;
    transition-property: opacity, transform;

    &.navigation-bar__title--show {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .navigation-bar__links {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;

    width: 100vw;
    height: 100vh;

    background: colors.$background;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    opacity: 0;
    pointer-events: none;
    transition: 200ms ease opacity;
    border: none;
  }

  .navigation-bar__link-container {
    position: relative;
    background: white;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background: linear-gradient(135deg, colors.$blue 25%, colors.$pink, colors.$blue 75%);
      background-size: 400% 400%;
      animation: 2s infinite linear reverse navigation-bar__gradient;

      pointer-events: none;
      mix-blend-mode: multiply;

      opacity: 0;
      transition: 200ms opacity ease;
    }

    &:hover, &:focus-within {
      &::before {
        opacity: 1;
      }

      .navigation-bar__link {
        $offset: -3px;

        outline: none;
        transform: translate($offset, $offset);
      }
    }
  }

  .navigation-bar__link {
    display: block;
    color: colors.$background-c;
    text-decoration: none;
    font-size: 2rem;

    background: colors.$background;
    padding: 10px;

    transition: 200ms transform cubic-bezier(.5,.06,.07,1.69);
  }

  @keyframes navigation-bar__gradient {
    from {
      background-position: 0 0;
    }

    to {
      background-position: 100% 100%;
    }
  }

  .navigation-bar--open {
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

    .navigation-bar__links {
      opacity: 1;
      pointer-events: auto;
    }
  }

  @include screenSize.notMobile {
    body {
      --navigation-bar-height: 100px;
    }

    .navigation-bar__content {
      @include content.content(40px);
    }

    .navigation-bar__title {
      font-size: 2.5rem;
    }

    .navigation-bar__toggle {
      display: none;
    }

    .navigation-bar__links {
      position: static;
      width: auto;
      height: auto;
      opacity: 1;
      pointer-events: auto;

      flex-direction: row;

      background: transparent;
    }

    .navigation-bar__link-container:not(:last-child) {
      margin-bottom: 0;
      margin-right: 40px;
    }

    .navigation-bar__link {
      font-size: 1.3rem;
    }
  }
</style>

<script>
  import { toModifierClasses } from "@/assets/js/toModifierClasses";

  const ITEMS = [
    {
      label: "Start",
      to: "/"
    },
    {
      label: "Projects",
      to: "/projects"
    }
  ];

  export default {
    name: "NavigationBar",
    props: {
      backgroundAfterScroll: {
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
      showTitle: vm => vm.scrollPosition > 60,
      showBackground: vm => vm.backgroundAfterScroll ? vm.scrollPosition > 0 : true,
      classes() {
        const { open, showBackground } = this;

        return toModifierClasses("navigation-bar", {
          open,
          showBackground
        });
      }
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
    },
    items: ITEMS
  };
</script>
