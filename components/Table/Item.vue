<script setup lang="ts">
const props = defineProps<{
  name: string
  description: string
  rows: ('yes' | 'no' | 'partial' | string)[]
}>()
</script>

<template>
  <tr class="border border-stone-200">
    <td class="text-left p-4 text-stone-700 font-bold">
      {{ props.name }}
      <p class="text-xs font-normal text-stone-500">
        {{ props.description }}
      </p>
    </td>
    <td
      v-for="(row, idx) in props.rows"
      :key="idx"
      class="text-center p-4 border text-stone-700"
    >
      <div class="flex items-center text-2xl justify-center">
        <div v-if="row === 'yes'" class="i-mdi-check text-primary" />
        <div v-else-if="row === 'partial'" class="i-mdi-minus text-yellow-600" />
        <div v-else-if="row === 'no'" class="i-mdi-close text-red-600" />
        <div v-else class="text-stone-500 text-xs">
          {{ row }}
        </div>
      </div>
    </td>
  </tr>
</template>
