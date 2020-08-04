<style lang="scss">

</style>

<script>
  export default {
    name: "NavBarTitle",
    mounted() {
      this.$root.$emit("navbar-title", this.$slots.default[0].text)
    },
    beforeDestroy() {
      this.$root.$emit("navbar-title", "")
    },
    render(createElement) {
      return createElement("")
    }
  }
</script>
