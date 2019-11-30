<style scoped lang="scss">
  @import "~@/assets/css/variables";

  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 8px 15px;
    border-radius: 4px;

    height: 42px;

    text-decoration: none;
    color: $blue;

    transition: 140ms ease background-color;
    &:hover {
      background: transparentize($blue, 0.9);
    }
  }

  .button__text {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .button__prefix > * {
    position: relative;
    top: 2px;
    margin-right: 6px;
    width: 20px;
  }

  .button__suffix > * {
    position: relative;
    top: 2px;
    margin-left: 6px;
    width: 20px;
  }
</style>

<script>
  export default {
    name: "GButton",
    props: {
      to: {
        type: String,
        default: ""
      },
      href: {
        type: String,
        default: ""
      }
    },
    computed: {
      isExternalLink: vm => Boolean(vm.href),
      isInternalLink: vm => Boolean(vm.to)
    },
    methods: {
      onClick(e) {
        this.$emit("click", e);
      }
    },
    render(h) {
      const children = [
        h("div", {
          class: "button__prefix"
        }, this.$slots.prefix),
        h("div", {
          class: "button__text"
        }, this.$slots.default),
        h("div", {
          class: "button__suffix"
        }, this.$slots.suffix)
      ];

      const baseOptions = {
        class: "button",
        on: {
          click: this.onClick
        },
        directives: [
          {
            name: "ripple",
            value: "rgba(0, 0, 0, 0.2)"
          }
        ]
      };

      if (this.isInternalLink) {
        return h("nuxt-link", {
          ...baseOptions,
          props: {
            to: this.to
          }
        }, children);
      } else if (this.isExternalLink) {
        return h("a", {
          ...baseOptions,
          attrs: {
            href: this.href,
            rel: "noopener"
          }
        }, children);
      } else {
        return h("div", {
          ...baseOptions,
          attrs: {
            role: "button"
          }
        }, children);
      }
    }
  };
</script>
