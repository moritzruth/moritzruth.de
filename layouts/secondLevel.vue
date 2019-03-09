<template>
    <div id="layout">
      <nuxt-link class="button" to="/"></nuxt-link>
      <div class="content">
        <nuxt/>
      </div>
    </div>
</template>

<script>
  export default {
    name: "secondLevel"
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_responsive";
  @import "~@/assets/_colors";
  @import "~@/assets/_mixins";

  #layout {
    .button {
      &::before {
        content: "";
        display: inline-block;
        margin-right: -5px;
        @include arrow(12px, -90deg, white);
      }

      &:hover {
        &::before {
          border-color: $c-background;
        }
      }

      position: fixed;
      top: 10px;
      left: 10px;

      @include desktop {
        position: fixed;
        top: 5vh;
        left: 10vw;
      }
    }

    .content {
      width: 100%;
      padding: 65px 10px 0;

      @include desktop {
        width: 50%;
        margin: 0 auto;
        padding-top: 20px;
      }
    }
  }
</style>
