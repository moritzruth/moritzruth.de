<template>
  <div class="default-layout fill-screen">
    <div class="content default-layout__content">
      <nuxt/>
    </div>
    <footer class="content default-layout__footer">
      <nuxt-link
        v-for="link in $options.footer"
        :key="link.to"
        class="default-layout__footer-link"
        :to="link.to"
      >
        {{ link.label }}
      </nuxt-link>
    </footer>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/variables";
  @import "~@/assets/css/mobile";

  .default-layout__content {
    margin-top: var(--navbar-height);
    margin-bottom: 50px;
  }

  .default-layout__footer {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    @include mobile {
      flex-direction: column;
    }
  }

  .default-layout__footer-link {
    color: #606060;
    text-decoration: none;
    flex-shrink: 0;

    margin: 10px;

    transition: 100ms linear color;
    &:hover {
      color: $blue;
    }
  }
</style>

<script>
  import { footer } from "@/assets/js/footer";

  export default {
    name: "DefaultLayout",
    components: {},
    footer
  };
</script>
