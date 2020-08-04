<template>
  <div class="my-project">
    <div class="my-project__content">
      <h2 class="my-project__title">
        {{ title }}
      </h2>
      <span class="my-project__kind">{{ kind }}</span>
      <div class="my-project__description">
        <slot/>
      </div>
      <div v-if="github || npm || url" class="my-project__links">
        <MyButton
          v-if="url !== ''"
          class="my-project__link"
          :href="url"
        >
          <template v-slot:prefix>
            <PointerRightIcon class="my-project__link-icon"/>
          </template>
          Open
        </MyButton>
        <MyButton
          v-if="github !== ''"
          class="my-project__link"
          :href="`https://github.com/${github}`"
        >
          <template v-slot:prefix>
            <GitHubIcon class="my-project__link-icon"/>
          </template>
          GitHub
        </MyButton>
        <MyButton
          v-if="npm !== ''"
          class="my-project__link"
          :href="`https://npmjs.com/${npm}`"
        >
          <template v-slot:prefix>
            <NPMIcon class="my-project__link-icon"/>
          </template>
          NPM
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

  .my-project__kind {
    display: block;
    font-size: 1rem;

    margin-top: 5px;
    margin-bottom: 20px;
  }

  .my-project__links {
    flex-grow: 1;

    margin-top: 10px;

    display: grid;
    gap: 5px;
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
      title: {
        type: String,
        required: true
      },
      kind: {
        type: String,
        required: true
      },
      npm: {
        type: String,
        default: ""
      },
      github: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: ""
      }
    }
  }
</script>
