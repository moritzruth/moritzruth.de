<template>
  <div class="navigation-bar" :class="classes">
    <div class="navigation-bar__placeholder"></div>
    <nav class="navigation-bar__content">
      <div class="navigation-bar__title-container">
        <transition mode="out-in" name="fade">
          <span :key="title" class="navigation-bar__title">{{ title }}</span>
        </transition>
      </div>
      <div class="navigation-bar__toggle" @click="open = !open">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="navigation-bar__links">
        <nuxt-link
          v-for="item in $options.items"
          :key="item.label"
          class="navigation-bar__link"
          :exact="item.to === '/'"
          :to="item.to"
          @mouseenter.native="e => handleLinkEvent(e, true)"
          @focus.native="e => handleLinkEvent(e, true)"
          @mouseleave.native="e => handleLinkEvent(e, false)"
          @blur.native="e => handleLinkEvent(e, false)"
          @keydown.enter.native="e => handleLinkEvent(e, false)"
          @click.native="e => { open = false; handleLinkEvent(e, false) }"
        >
          <span class="navigation-bar__link-text">
            {{ item.label }}
          </span>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
  @use "~@/assets/styles/screenSize";
  @use "~@/assets/styles/colors";
  @use "~@/assets/styles/content";
  @use "~@/assets/styles/variables";
  @use "~@/assets/styles/z-indexes";

  body {
    --navigation-bar-height: 80px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 500ms;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
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
    padding: 0 30px 0 20px;

    transition: variables.$page-transition-duration variables.$page-transition-easing background;
    background: transparent;

    .navigation-bar--show-background & {
      background: transparentize(colors.$background, 0.05);
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
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
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

  .navigation-bar__link {
    position: relative;
    background: white;
    text-decoration: none;

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

    &:hover, &:focus, &.nuxt-link-active {
      &::before {
        opacity: 1;
      }

      .navigation-bar__link-text {
        $offset: -3px;
        transform: translate($offset, $offset);
      }
    }
  }

  .navigation-bar--hide-active-state {
    .navigation-bar__link.nuxt-link-active {
      &::before {
        opacity: 0;
      }

      .navigation-bar__link-text {
        transform: translate(0, 0);
      }
    }
  }

  .navigation-bar__link-text {
    display: block;
    color: colors.$background-c;
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
      font-size: 2.2rem;
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

    .navigation-bar__link:not(:last-child) {
      margin-bottom: 0;
      margin-right: 40px;
    }

    .navigation-bar__link-text {
      font-size: 1.3rem;
    }
  }
</style>

<script>
  import { toModifierClasses } from "assets/js/to-modifier-classes"

  const ITEMS = [
    {
      label: "Start",
      to: "/"
    },
    {
      label: "Projects",
      to: "/projects"
    }
  ]

  export default {
    name: "NavigationBar",
    data: () => ({
      open: false,
      hideActiveState: false,
      title: ""
    }),
    computed: {
      classes() {
        const { open, hideActiveState } = this

        return toModifierClasses("navigation-bar", {
          open,
          hideActiveState,
          showBackground: this.$route.fullPath !== "/"
        })
      }
    },
    created() {
      const handler = title => {
        this.title = title
      }

      this.$root.$on("navbar-title", handler)

      this.$on("hook:beforeDestroy", () => {
        this.$root.$off("navbar-title", handler)
      })
    },
    methods: {
      handleLinkEvent(event, hideActiveStateNow) {
        if (!event.target.classList.contains("nuxt-link-active")) this.hideActiveState = hideActiveStateNow
      }
    },
    items: ITEMS
  }
</script>
