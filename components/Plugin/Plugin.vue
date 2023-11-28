<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div class="col-span-1 overflow-hidden p-4 flex flex-col border flex-col rounded">
    <div class="flex gap-4 flex-row">
      <div class="bg-primary/90 flex items-center justify-center rounded w-10 h-10 bg-hero-diagonal-lines-primary">
        <div class="text-white text-xl" :class="[icon]" />
      </div>
      <div class="flex gap-2 items-center flex-row font-semibold">
        {{ title }}
        <div class="i-mingcute-certificate-fill text-primary" />
      </div>
    </div>
    <div class="text-stone-700 text-sm mt-2">
      {{ description }}
    </div>
  </div>
</template>
