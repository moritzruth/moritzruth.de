<template>
  <footer class="my-footer">
    <nuxt-link
      v-for="item in $options.items"
      class="my-footer__link"
      :key="item.label"
      :to="item.to"
      @click.native.passive="open = false"
    >
      {{ item.label }}
    </nuxt-link>
  </footer>
</template>

<style lang="scss">
  @use "~@/assets/styles/screenSize";
  @use "~@/assets/styles/colors";

  .my-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100px;

    opacity: 0.8;
    transition: 200ms opacity linear;

    &:hover {
      opacity: 1;
    }
  }

  .my-footer__link {
    color: colors.$background-c;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @include screenSize.mobile {
    .my-footer {
      flex-direction: column;
      margin-bottom: 10px;
    }

    .my-footer__link:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
</style>

<script>
  import { footerItems } from "@/assets/js/footerItems";

  export default {
    name: "MyFooter",
    items: footerItems
  };
</script>
