<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div v-motion-slide-visible-bottom class="col-span-1 min-h-50 rounded-xl border bg-white p-5">
    <div class="text-4xl text-green-500" :class="[props.icon]" />
    <h2 class="text-xl font-semibold mt-4 text-stone-900">
      {{ props.title }}
    </h2>
    <p class="mt-1 text-sm">
      {{ props.description }}
    </p>
  </div>
</template>
