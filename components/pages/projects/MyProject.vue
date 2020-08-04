<template>
  <div class="my-project">
    <div class="my-project__content">
      <h2 class="my-project__title">
        {{ project.emoji }} {{ project.title }}
      </h2>
      <span class="my-project__type">{{ project.type }}</span>
      <div class="my-project__description" v-html="project.description"></div>
      <div v-if="project.links" class="my-project__links">
        <MyButton
          v-if="project.links.open"
          class="my-project__link"
          :href="project.links.open"
        >
          <template v-slot:prefix>
            <PointerRightIcon class="my-project__link-icon"/>
          </template>
          Open
        </MyButton>
        <MyButton
          v-if="project.links.github"
          class="my-project__link"
          :href="`https://github.com/${project.links.github}`"
        >
          <template v-slot:prefix>
            <GitHubIcon class="my-project__link-icon"/>
          </template>
          GitHub
        </MyButton>
        <MyButton
          v-if="project.links.npm"
          class="my-project__link"
          :href="`https://npmjs.com/${project.links.npm}`"
        >
          <template v-slot:prefix>
            <NPMIcon class="my-project__link-icon my-project__link-icon--npm"/>
          </template>
          npm
        </MyButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use "~@/assets/styles/colors";
  @use "~@/assets/styles/screenSize";

  .my-project {
    background: linear-gradient(-135deg, colors.$blue, colors.$pink 80%);
  }

  .my-project__content {
    margin: 2px;
    padding: 20px;
    background: colors.$background;
    font-size: 1.1rem;

    display: flex;
    align-items: stretch;
    flex-direction: column;
  }

  .my-project__title {
    margin: 0;

    font-weight: bold;
    font-size: 1.8rem;
  }

  .my-project__type {
    display: block;
    font-size: 1rem;

    margin-top: 5px;
    margin-bottom: 20px;
  }

  .my-project__links {
    flex-grow: 1;

    margin-top: 10px;

    display: grid;
    gap: 2px;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-auto-rows: min-content;
  }

  .my-project__link {
    height: 30px;
    width: auto;
  }

  .my-project__link-icon {
    height: 25px!important;
  }

  .my-project__link-icon--npm {
    height: 32px!important;
    position: relative;
    top: 1px;
  }

  @media (max-width: 500px) {
    .my-project__links {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
  }
</style>

<script>
  import MyButton from "@/components/MyButton"
  import GitHubIcon from "@/assets/icons/github.svg"
  import NPMIcon from "@/assets/icons/npm.svg"
  import PointerRightIcon from "@/assets/icons/pointer-right.svg"

  export default {
    name: "MyProject",
    components: { MyButton, GitHubIcon, NPMIcon, PointerRightIcon },
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
</script>
