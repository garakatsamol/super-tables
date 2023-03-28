<template>
  <MacTerminal terminalClass=""/>
  <div class="bg-black rounded mx-10">
    <div class="mx-auto max-w-8xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="relative  px-6 pt-16   sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
       
        <div class="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <div class="title-wrapper inline-block">
          <div class="inline-block leading-10 text-secondary -top-5 relative "><Icon  name="material-symbols:select-check-box" size="3em" /></div>
          <div class="inline-block "><h2 class="text-3xl font-bold text-secondary tracking-tight text-white sm:text-4xl">I am a Robot</h2></div>
        </div>
          <p class="mt-6 text-lg leading-8 text-gray-300">The robots are coming! And they're not here to take over the world (yet), but to make our lives easier (and maybe a bit more fun). At our robot store, you'll find robots for every occasion - from the helpful Roomba that vacuums your floors, to the adorable RoboPet that follows you around like a loyal companion.  So come on down to our robot store and join the robot revolution - after all, resistance is futile (and not nearly as much fun).</p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <NuxtLink to="/list" class="rounded-md bg-primary px-3.5 py-2.5 text-md font-semibold text-white shadow-sm  hover:bg-gray-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">GET A ROBOT</NuxtLink>
              </div>
        </div>
        <div class="relative max-w-sm mt-16 h-80 lg:mt-8">
          <img class=" w-[100%] max-w-none" src="@/assets/img/mainrobot.png" alt="App screenshot" width="1824" height="1080" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MacTerminal from '~/components/MacTerminal.vue' // import MacTerminal component from '~/components/MacTerminal.vue'

export default {
  components: {
    MacTerminal // register MacTerminal component as a child component
  }
}
</script>

