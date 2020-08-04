<template>
  <div class="projects-page">
    <NavBarTitle>Projects</NavBarTitle>
    <main class="content">
      <div class="projects-page__projects">
        <MyProject
          v-for="project in $options.projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
  @use "~@/assets/styles/colors";

  .projects-page {
    padding-top: 20px;
    padding-bottom: 50px;
  }

  .projects-page__projects {
    display: grid;
    grid-auto-flow: row;
    gap: 20px;
  }
</style>

<script>
  import MyProject from "@/components/pages/projects/MyProject"
  import NavBarTitle from "~/components/NavBarTitle"

  const projects = [
    {
      title: "log-groups",
      type: "Node.js package",
      emoji: "🍱",
      description: "Log messages ... in groups.",
      links: {
        github: "moritzruth/log-groups",
        npm: "log-groups"
      }
    },
    {
      title: "shaped.js",
      type: "JavaScript package",
      emoji: "🍭",
      description: "Generate cool moving shapes using a canvas element. You can see it in action on the home page.",
      links: {
        github: "moritzruth/shaped.js",
        npm: "shaped.js"
      }
    },
    {
      title: "node-enttec-open-dmx-usb",
      type: "Node.js package",
      emoji: "🔌",
      description: "A Node.js library for interacting with the Enttec Open DMX USB Interface.",
      links: {
        github: "moritzruth/node-enttec-open-dmx-usb",
        npm: "enttec-open-dmx-usb"
      }
    },
    {
      title: "eslint-config-awzzm",
      type: "ESLint configurations",
      emoji: "⚙️",
      description: "ESLint configurations for JavaScript, TypeScript, Node.js, Vue.js and Nuxt.js.",
      links: {
        github: "moritzruth/eslint-config-awzzm",
        npm: "eslint-config-awzzm"
      }
    },
    {
      title: "spigot-ttt",
      type: "Spigot plugin",
      emoji: "🔫",
      description: "Trouble in Terrorist Town, ported to Minecraft as a Spigot plugin. I'll provide downloads soon.",
      links: {
        github: "moritzruth/spigot-ttt"
      }
    }
  ]

  export default {
    name: "ProjectsPage",
    components: { NavBarTitle, MyProject },
    head: () => ({ title: "Projects" }),
    projects
  }
</script>
