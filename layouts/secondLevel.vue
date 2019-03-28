<template>
  <div id="layout">
    <div class="top-bar">
      <nuxt-link class="button" to="/">Back</nuxt-link>
    </div>
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
    .top-bar {
      @include mobile {
        background-color: darken($c-background, 1);
        width: 100%;
        position: sticky;
        top: 0;
        right: 0;
      }

      .button {
        @include mobile {
          margin: 10px 10px;
        }

        @include desktop {
          position: fixed;
          top: 40px;
          left: 40px;
        }

        &::before {
          content: "";
          display: inline-block;
          margin-right: 5px;
          @include arrow(12px, -90deg, white);

          transition: border-color 400ms;
        }

        &:hover {
          &::before {
            border-color: $c-background;
          }
        }
      }
    }

    .content {
      width: 100%;
      padding: 0 10px;

      @include desktop {
        width: 70vw;
        margin: 0 auto;
        padding-top: 20px;
      }
    }
  }
</style>
