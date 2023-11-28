<script setup lang="ts">

</script>

<template>
  <div class="fixed z-8000 inset-x-0 w-full top-0 flex md:h-14 items-center justify-center gap-12 px-4 transition sm:px-6 backdrop-blur-sm bg-white/50">
    <div class="md:w-[1000px] w-full flex md:px-0 md:py-0 py-4 px-4 gap-10 md:justify-between md:flex md:items-center">
      <NuxtLink to="/">
        <Logo class="w-25" />
      </NuxtLink>
      <Navigation class="md:!flex !hidden">
        <slot />
      </Navigation>
      <NuxtLink target="_blank" to="https://github.com/npldevfr/pres-esp" class="md:!flex !hidden text-2xl cursor-pointer i-mdi-github" />
    </div>
    <div class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5" />
  </div>
  <div class="absolute md:block hidden left-1/2 top-0 md:ml-[-38rem] h-[25rem] md:w-[81.25rem]">
    <div class="absolute inset-0 bg-gradient-to-r from-[#014DE0] to-[#256FFF] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
      <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay"><defs><pattern id=":S2:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4"><path d="M.5 56V.5H72" fill="none" /></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:S2:)" /><svg x="-12" y="4" class="overflow-visible"><rect stroke-width="0" width="73" height="57" x="288" y="168" /><rect stroke-width="0" width="73" height="57" x="144" y="56" /><rect stroke-width="0" width="73" height="57" x="504" y="168" /><rect stroke-width="0" width="73" height="57" x="720" y="336" /></svg></svg>
    </div>
  </div>
</template>
