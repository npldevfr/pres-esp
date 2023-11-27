<script setup lang="ts">
const { title, id, align, icon } = defineProps<{
  id: string
  title: string
  icon: string
  align: 'left' | 'right'
}>()
</script>

<template>
  <div :id="id" class="w-full grid md:grid-cols-3 grid-cols-2 pt-20 gap-4">
    <div v-if="align === 'left'" class="col-span-1 md:flex hidden items-center justify-center text-5xl text-stone-300/50" />
    <div class="flex flex-col col-span-2">
      <h2
        class="text-3xl mb-2 drop-shadow-xl font-bold" :class="{
          'text-right': align === 'left',
          'text-left': align === 'right',
        }"
      >
        {{ title }}
      </h2>
      <span class="text-justify">
        <slot />
      </span>
    </div>
    <div v-if="align === 'right'" class="col-span-1 md:flex hidden items-center justify-center text-5xl text-stone-300/50" />
  </div>
</template>
