<script setup lang="ts">
const { to } = defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="text-[14px] transition-all rounded px-3 text-[#18181b] font-450 leading-[20px]">
    <slot />
  </NuxtLink>
</template>
