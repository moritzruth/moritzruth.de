<template>
  <div class="project">
    <h2 class="heading--3">
      {{ title }}
    </h2>
    <span class="project__type">{{ type }}</span>
    <div class="project__description">
      <slot/>
    </div>
    <hr class="project__divider"/>
    <div class="project__buttons">
      <GButton v-if="link" class="project__button" :href="link">
        Open
        <template v-slot:suffix>
          <ArrowRightIcon/>
        </template>
      </GButton>
      <GButton v-if="github" class="project__button" :href="`https://github.com/${github}`">
        GitHub
        <template v-slot:prefix>
          <GitHubIcon/>
        </template>
      </GButton>
      <GButton v-if="npm" class="project__button" :href="`https://www.npmjs.com/package/${npm}`">
        NPM
        <template v-slot:prefix>
          <NPMIcon style="width: 30px; top: 4px"/>
        </template>
      </GButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "~@/assets/css/variables";

  .project__type {
    margin-top: -1rem;
    margin-bottom: 1rem;
    display: block;
  }

  .project__description {
    font-size: 1.2rem;
  }

  .project__divider {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 175px;
    height: 1px;
    background-color: black;

    border: none;
  }

  .project__buttons {
    display: flex;
  }

  .project__button {
    &:not(:last-child) {
      margin-right: $small-gutter;
    }
  }

  .project__button-icon {
    width: 10px;
    display: inline;
  }
</style>

<script>
  import ArrowRightIcon from "@/assets/icons/arrow_right.svg";
  import GitHubIcon from "@/assets/icons/github.svg";
  import NPMIcon from "@/assets/icons/npm.svg";
  import GButton from "@/components/GButton";

  export default {
    name: "GProject",
    components: { GButton, ArrowRightIcon, GitHubIcon, NPMIcon },
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      link: {
        type: String,
        default: null
      },
      github: {
        type: String,
        default: null
      },
      npm: {
        type: String,
        default: null
      }
    }
  };
</script>
