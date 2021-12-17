<template>
  <div class="prose">
    <slot/>
  </div>
</template>

<style>
  .prose {
    @apply text-light-900 text-lg;

    .intro {
      @apply text-xl pb-2;
    }

    h2 {
      @apply font-bold text-2xl pt-8 pb-4 text-gray-100;
    }

    a {
      @apply text-blue-400;
    }

    ol {
      @apply list-decimal list-inside space-y-2;

      ::marker {
        @apply text-gray-400;
      }
    }

    ul {
      @apply list-disc list-inside space-y-1;
    }

    address, p, ol, ul {
      @apply max-w-180;
    }

    address {
      @apply not-italic;
    }

    :where(address, p, ol, ul) ~ :where(address, p, ol, ul) {
      @apply pt-4;
    }
  }
</style>

<script>
  export default {
    name: "Prose"
  }
</script>
