<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div v-motion-slide-visible-once-bottom class="col-span-1 min-h-50 hover:bg-primary/10 duration-400 hover:border-primary/50 transition-all rounded-xl border bg-white p-5">
    <div class="text-4xl text-primary" :class="[props.icon]" />
    <h2 class="text-xl font-semibold mt-4 text-stone-900">
      {{ props.title }}
    </h2>
    <p class="mt-1 text-sm">
      {{ props.description }}
    </p>
  </div>
</template>
