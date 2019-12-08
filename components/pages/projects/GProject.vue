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
    <div class="project__buttons flex-with-gutter">
      <KButton v-if="link" :href="link">
        Open
        <template v-slot:suffix>
          <ArrowRightIcon/>
        </template>
      </KButton>
      <KButton v-if="github" :href="`https://github.com/${github}`">
        GitHub
        <template v-slot:prefix>
          <GitHubIcon/>
        </template>
      </KButton>
      <KButton v-if="npm" :href="`https://www.npmjs.com/package/${npm}`">
        NPM
        <template v-slot:prefix>
          <NPMIcon style="width: 30px; top: 4px"/>
        </template>
      </KButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
    & > *:not(:last-child) {
      margin-right: 5px;
    }
  }
</style>

<script>
  import KButton from "kiste/components/KButton";
  import ArrowRightIcon from "@/assets/icons/arrow_right.svg";
  import GitHubIcon from "@/assets/icons/github.svg";
  import NPMIcon from "@/assets/icons/npm.svg";

  export default {
    name: "GProject",
    components: { KButton, ArrowRightIcon, GitHubIcon, NPMIcon },
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
