<script setup lang="ts">
const { to } = defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="text-[14px] text-[#18181b] font-400 leading-[20px]">
    <slot />
  </NuxtLink>
</template>
