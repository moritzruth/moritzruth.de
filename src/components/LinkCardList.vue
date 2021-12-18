<template>
  <div class="relative flex flex-col justify-center space-y-4">
    <component
      :is="link.to ? 'router-link' : 'a'"
      v-for="link in links"
      :key="link.to || link.href"
      :to="link.to"
      :href="link.href || link.to"
      class="px-5 sm:px-6 py-4 bg-light-300 bg-opacity-5 rounded-lg backdrop-blur-lg flex cursor-pointer
             hover:bg-opacity-10 focus-visible:bg-opacity-10 transform hover:scale-104 transition duration-200"
    >
      <div class="flex items-center justify-center text-xl sm:text-2xl relative pr-4 sm:pr-5" :class="link.iconClasses">
        <template v-if="typeof link.icon === 'string'">
          {{ link.icon }}
        </template>
        <component :is="getSafeLinkIconComponent(link.icon)" v-else/>
      </div>
      <div class="flex-grow">
        <div class="text-lg font-bold">
          {{ link.label }}
        </div>
        <div class="text-gray-400 -sm:text-sm">
          {{ link.description }}
        </div>
      </div>
    </component>
  </div>
</template>

<style module>

</style>

<script lang="ts">
  import { Component, ComponentCustomOptions, PropType } from "vue"

  export type Link = {
    label: string
    description: string
    iconClasses?: string
    icon: Component | string
  } & ({
    to: string
  } | {
    href: string
  })

  export default {
    name: "LinkCardList",
    props: {
      links: {
        type: Array as PropType<Link[]>,
        required: true
      }
    },
    methods: {
      getSafeLinkIconComponent(icon: string | Component) {
        return icon as ComponentCustomOptions
      }
    }
  }
</script>
