<template>
  <div class="bg-black w-screen h-screen text-white overflow-hidden flex justify-center items-center">
    <div class="px-8 mx-auto max-w-4xl w-full h-96 font-extrabold relative">
      <div class="app__circle w-52 h-52 rounded-full bg-gradient-to-bl from-yellow-300 to-yellow-800 mr-15"/>
      <div class="app__box w-96 h-44 bg-gradient-to-bl from-yellow-300 to-yellow-800 rotate-12 transform"/>
      <div class="text-6xl sm:text-8xl relative -left-1">
        Moritz Ruth
      </div>
      <div class="flex mt-8 justify-items-stretch">
        <div class="w-1 bg-gradient-to-b from-yellow-300 to-yellow-500"/>
        <div class="text-2xl sm:text-4xl ml-5 sm:ml-8 space-y-2 pb-1">
          <p>I do web and print things,</p>
          <p>sometimes photography</p>
        </div>
      </div>
    </div>
    <div class="fixed flex bottom-8 space-x-5">
      <a class="app__social-link" href="https://twitter.com/moritz_ruth" aria-label="Twitter">
        <TwitterIcon size="1x"/>
      </a>
      <a class="app__social-link" href="https://github.com/moritzruth" aria-label="GitHub"><GithubIcon size="1x"/></a>
      <a class="app__social-link" href="mailto:hey@m0.is" aria-label="Email"><MailIcon size="1x"/></a>
    </div>
  </div>
</template>

<style scoped>
  .app__circle {
    position: absolute;
    top: -10em;
    right: -15vw;
  }

  .app__box {
    position: absolute;
    top: 25em;
    left: -25vw;
  }

  .app__social-link {
    @apply text-black text-3xl p-4 bg-white bg-opacity-50 from-yellow-300 to-yellow-500 rounded-full
    transition duration-200 sm:rounded-none sm:bg-opacity-0 sm:text-white sm:hover:bg-opacity-30;

    backdrop-filter: blur(5px);
  }
</style>

<script>
  import { TwitterIcon, MailIcon, GithubIcon } from "@zhuowenli/vue-feather-icons"

  export default {
    name: "App",
    components: { TwitterIcon, GithubIcon, MailIcon }
  }
</script>
