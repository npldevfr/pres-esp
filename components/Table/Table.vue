<script setup lang="ts">
const props = defineProps<{
  headers: string[]
}>()
</script>

<template>
  <table class="w-full table-fixed border-collapse">
    <thead>
      <tr>
        <th />
        <th
          v-for="(header, idx) in props.headers"
          :key="idx"
          class="text-center p-2 border text-stone-700 font-bold"
        >
          <div class="flex gap-3 items-center justify-center">
            <slot :name="`header-${header.toLowerCase()}`">
              {{ header }}
            </slot>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<style scoped>

</style>
