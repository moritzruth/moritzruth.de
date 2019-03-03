<template>
  <div class="project horizontally-centered">
    <h2>{{ title }}</h2>
    <p>
      <template v-for="(name, index) in Object.keys(links)">
        <a :href="links[name]" rel="noopener">
          {{ name }}
        </a>
        <template v-if="index + 1 < Object.keys(links).length"> | </template>
      </template>
    </p>
    <div class="line"></div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Project",
    props: {
      title: String,
      links: Object
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_mq.scss";

  .project {
    width: 75vw;

    h2 {
      font-size: 40px;

      @include mq($from: tablet) {
        font-size: 50px;
      }

      margin-bottom: 10px;
    }

    .line {
      width: 150px;
      height: 1px;
      background-color: white;
      margin: 5px auto 10px;
    }
  }
</style>
