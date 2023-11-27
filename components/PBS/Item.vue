<script setup lang="ts">
const props = defineProps<{
  name: string
  children: { name: string }[]
}>()
</script>

<template>
  <div class="col-span-1 rounded-[10px] p-[20px] border">
    <h2 class="text-xl pb-3 font-bold text-stone-700">
      {{ props.name }}
    </h2>
    <ul class="  flex flex-col gap-2 rounded-[5px]">
      <li
        v-for="(child, idx) in props.children"
        :key="idx"
        class="text-lg text-sm"
      >
        &mdash; {{ child.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
