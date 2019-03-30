<template>
  <div class="image-card">
    <template v-if="link">
      <a :href="link" target="_blank">
        <img :src="image" class="image" :alt="title"/>
      </a>
    </template>
    <template v-else>
      <img :src="image" class="image" :alt="title"/>
    </template>
    <div class="content">
      <span class="type">{{ type }}</span>
      <span class="title">{{ title }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageCard",
    props: {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      type: String,
      link: String
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/css/_mixins";
  @import "~@/assets/css/_colors";

  .image-card {
    @include hoverShadow;

    margin: 20px;
    height: fit-content;
    border: 1px solid $c-background-darker;
    border-radius: 5px;
    width: 400px;
    padding: 20px;

    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 100%;
    grid-column-gap: 10px;

    .image {
      grid-column-start: 1;
      grid-column-end: 2;

      height: auto;
      width: 100px;
    }

    .content {
      grid-column-start: 2;
      grid-column-end: 3;

      .type {
        display: block;
        font-size: 20px;
      }

      .title {
        display: block;
        font-size: 30px;
        font-weight: bold;

      }
    }
  }
</style>
