<style scoped lang="scss">
  @use "~@/assets/styles/colors";

  .my-button {
    position: relative;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

    padding: 8px 12px 8px 20px;
    border-radius: 4px;

    height: 30px;

    background-color: transparent;
    border: none;
    text-decoration: none;
    font: inherit;
    color: inherit;
    cursor: default;

    transition: 140ms ease background-color;
    &:hover, &:focus {
      &:not(.my-button--disabled) {
        background: transparentize(colors.$background-c, 0.94);
      }
    }

    &.my-button--disabled, &.my-button--loading {
      &::before {
        pointer-events: auto;
        opacity: 0.6;
      }
    }

    &.my-button--loading {
      &::after {
        opacity: 1;
      }
    }

    &.my-button--center {
      justify-content: center;
    }
  }

  .my-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    pointer-events: none;
    background-color: colors.$background;

    opacity: 0;
    transition: 100ms linear opacity;
  }

  .my-button::after {
    $size: 20px;

    pointer-events: none;
    opacity: 0;
    transition: 100ms linear opacity;

    content: "";
    position: absolute;
    top: calc(50% - #{$size} / 2 + 2px);
    left: calc(50% - #{$size} / 2);
    width: $size;
    height: $size;

    border: 2px solid var(--colors-background-c);
    border-left-color: transparent;
    border-radius: 50%;

    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0)
    }

    to {
      transform: rotate(360deg);
    }
  }

  .my-button__text {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
    pointer-events: none;
  }

  .my-button__prefix {
    display: inline-flex;
    margin-right: 10px;
    margin-left: -5px;

    justify-content: center;

    & > * {
      height: 20px;
    }
  }

  .my-button__suffix {
    display: inline-flex;
    margin-left: 10px;

    justify-content: center;

    & > * {
      height: 20px;
    }
  }
</style>

<script>
  export default {
    name: "MyButton",
    props: {
      to: { type: String, default: "" },
      href: { type: String, default: "" },
      loading: { type: Boolean },
      disabled: { type: Boolean },
      isSubmit: { type: Boolean },
      center: { type: Boolean }
    },
    computed: {
      isExternalLink: vm => Boolean(vm.href),
      isInternalLink: vm => Boolean(vm.to)
    },
    methods: {
      onClick(event) {
        if (!this.disabled && !this.loading)
          this.$emit("click", event)
      }
    },
    render(h) {
      const children = []

      if (this.$slots.prefix) {
        children.push(h("div", {
          class: "my-button__prefix"
        }, this.$slots.prefix))
      }

      children.push(h("div", {
        class: "my-button__text"
      }, this.$slots.default))

      if (this.$slots.suffix) {
        h("div", {
          class: "my-button__suffix"
        }, this.$slots.suffix)
      }

      const baseOptions = {
        class: ["my-button", {
          "my-button--loading": this.loading,
          "my-button--disabled": this.disabled,
          "my-button--center": this.center
        }],
        on: {
          click: this.onClick
        },
        directives: [
          {
            name: "ripple",
            modifiers: {
              click: true,
              400: true
            },
            value: "rgba(0, 0, 0, 0.2)"
          }
        ],
        attrs: {
          tabindex: this.disabled || this.loading ? "-1" : "0"
        }
      }

      if (this.isInternalLink) {
        return h("nuxt-link", {
          ...baseOptions,
          props: {
            to: this.to
          }
        }, children)
      } else if (this.isExternalLink) {
        return h("a", {
          ...baseOptions,
          attrs: {
            ...baseOptions.attrs,
            href: this.href,
            rel: "noopener"
          }
        }, children)
      }

      return h("button", {
        ...baseOptions,
        attrs: {
          ...baseOptions.attrs,
          disabled: this.disabled,
          type: this.isSubmit ? "submit" : "button"
        }
      }, children)
    }
  }
</script>
