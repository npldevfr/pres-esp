<script setup lang="ts">
const { title, id, align, icon } = defineProps<{
  id: string
  title: string
  icon: string
  align: 'left' | 'right'
}>()
</script>

<template>
  <div :id="id" class="w-full grid grid-cols-3 pt-20 gap-4">
    <div v-if="align === 'left'" class="col-span-1 flex items-center justify-center text-5xl text-stone-900/10">
      <div :class="icon" />
    </div>
    <div class="flex flex-col col-span-2">
      <h2 class="text-3xl  font-bold">
        {{ title }}
      </h2>
      <slot />
    </div>
    <div v-if="align === 'right'" class="col-span-1 flex items-center justify-center text-5xl text-stone-900/10">
      <div :class="icon" />
    </div>
  </div>
</template>
