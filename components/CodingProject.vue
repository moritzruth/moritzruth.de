<template>
  <div class="project">
    <span class="title">{{ title }}</span>
    <div class="links">
      <div v-for="(link, index) in links" :key="link.name" class="link">
        <a
          :href="link.to"
          rel="noopener"
          target="_blank"
        >
          {{ link.name }}
        </a>
        <div v-if="index + 1 < links.length" class="space"></div>
      </div>
    </div>
    <p class="description">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: "CodingProject",
    props: {
      title: {
        type: String,
        required: true
      },
      npm: String,
      github: String
    },
    computed: {
      links() {
        const links = [];

        if (this.npm) {
          links.push({
            name: "NPM",
            to: `https://www.npmjs.com/package/${this.npm}`
          });
        }

        if (this.github) {
          links.push({
            name: "GitHub",
            to: `https://github.com/${this.github}`
          });
        }

        return links;
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/_colors";

  .project {
    margin: 20px;
    height: fit-content;
    text-align: center;
    padding: 20px;
    border: 1px solid darken($c-background, 2);
    border-radius: 5px;
    width: 400px;

    .title {
      display: block;
      font-size: 60px;
    }

    .links {
      margin-top: 2px;

      &::after {
        content: '';
        display: block;
        width: 25px;
        height: 1px;
        margin: 6px auto 10px;
        background-color: white;
      }

      .link {
        display: inline-block;

        .space {
          display: inline-block;

          width: 10px;
          height: 1px;
        }
      }
    }

    .description {
      font-size: 18px;
    }
  }
</style>
