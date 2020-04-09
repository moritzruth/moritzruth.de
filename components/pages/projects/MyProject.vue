<template>
  <div class="my-project">
    <h2 class="my-project__title">
      {{ title }}
    </h2>
    <span class="my-project__kind">{{ kind }}</span>
    <div class="my-project__description">
      <slot/>
    </div>
    <div class="my-project__links" v-if="github || npm || url">
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
</template>

<style lang="scss">
  @use "~@/assets/styles/colors";
  @use "~@/assets/styles/screenSize";

  .my-project {
    background: #090909;
    border: 1px solid colors.$green;
    padding: 20px;
    margin: 10px;
    font-size: 1.1rem;
    width: 400px;
    flex-grow: 1;

    display: flex;
    align-items: stretch;
    flex-direction: column;

    &:nth-child(3n+1) {
      border-color: colors.$blue;
    }

    &:nth-child(3n+2) {
      border-color: colors.$pink;
    }
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

    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    margin-top: 10px;
  }

  .my-project__link {
    height: 30px;
    margin: 2px;
  }

  .my-project__link-icon {
    height: 25px!important;
  }

  @include screenSize.mobile {
    .my-project__links {
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
    }
  }
</style>

<script>
  import MyButton from "@/components/MyButton";
  import GitHubIcon from "@/assets/icons/github.svg";
  import NPMIcon from "@/assets/icons/npm.svg";
  import PointerRightIcon from "@/assets/icons/pointer-right.svg";

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
  };
</script>
