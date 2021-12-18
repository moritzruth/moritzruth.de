<template>
  <div class="prose">
    <slot/>
  </div>
</template>

<style>
  .prose {
    @apply text-light-900 text-base sm:text-lg;

    address, p, ol, ul {
      @apply max-w-180 m-0 p-0;
    }

    .intro {
      @apply text-xl pb-2;
    }

    h2, h3 {
      @apply font-bold text-gray-100 m-0 font-special;
    }

    h2 {
      @apply text-2xl pt-8 pb-4;
    }

    h3 {
      @apply text-xl pt-6 pb-3;
    }

    h2 + h3 {
      @apply pt-0 -mt-2;
    }

    a {
      @apply text-blue-400 can-hover:hover:text-pink-400 transition duration-200;
    }

    ol {
      @apply list-decimal list-inside space-y-2;

      ::marker {
        @apply text-gray-400;
      }
    }

    ul {
      @apply list-disc list-inside space-y-1 pl-1;

      ::marker {
        @apply text-gray-400;
      }
    }

    address {
      @apply not-italic;
    }

    :where(address, p, ol, ul) + :where(address, p, ol, ul) {
      @apply pt-4;
    }
  }
</style>

<script>
  export default {
    name: "Prose"
  }
</script>
