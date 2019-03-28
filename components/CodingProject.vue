<template>
  <div class="project">
    <span class="type">{{ type }}</span>
    <div class="padded">
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
      <div class="description">
        <slot></slot>
      </div>
      <div class="footer">
        <a v-if="liveURL" :href="liveURL" id="try-it-out" target="_blank"><span class="arrow">→</span> Try it out</a>
      </div>
    </div>
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
      github: String,
      type: {
        type: String,
        required: true
      },
      liveURL: String
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
  @import "~@/assets/_responsive";

  .project {
    margin: 20px;
    height: fit-content;
    text-align: center;
    border: 1px solid darken($c-background, 2);
    border-radius: 5px;
    width: 400px;

    .type {
      margin: 20px 0 5px;
      display: inline-block;
      font-size: 14px;
      font-family: monospace;
      width: 100%;
      text-align: center;
      background-color: darken($c-background, 2);
    }

    .padded {
      padding: 0 20px 20px 20px;
    }

    .title {
      display: block;
      font-size: 30px;

      @include desktop {
        font-size: 40px;
      }
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

    .footer {
      text-align: right;
      width: 100%;

      #try-it-out {
        font-size: 18px;

        .arrow {
          display: inline-block;
          font-size: 30px;
          transition: 800ms transform ease;
          transform: translateX(0);
        }

        &:hover {
          .arrow {
            transform: translateX(4px);
          }
        }
      }
    }

    transition: box-shadow 0.3s ease-out;

    &:hover {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
</style>
