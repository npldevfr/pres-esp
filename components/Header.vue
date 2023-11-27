<script setup lang="ts">

</script>

<template>
  <div class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-center gap-12 px-4 transition sm:px-6 backdrop-blur-sm bg-white/20">
    <div class="w-[1000px] flex gap-10 flex items-center">
      <Logo class="w-30" />
      <Navigation>
        <NavigationItem to="/">
          Introduction
        </NavigationItem>
        <NavigationItem to="#who">
          Pour qui ?
        </NavigationItem>
        <NavigationItem to="#features">
          Fonctionnalités
        </NavigationItem>
      </Navigation>
    </div>
  </div>
  <div class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
    <div class="absolute inset-0 bg-gradient-to-r from-[#22c55e] to-[#78FF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
      <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay"><defs><pattern id=":S2:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4"><path d="M.5 56V.5H72" fill="none" /></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:S2:)" /><svg x="-12" y="4" class="overflow-visible"><rect stroke-width="0" width="73" height="57" x="288" y="168" /><rect stroke-width="0" width="73" height="57" x="144" y="56" /><rect stroke-width="0" width="73" height="57" x="504" y="168" /><rect stroke-width="0" width="73" height="57" x="720" y="336" /></svg></svg>
    </div>
  </div>
</template>
