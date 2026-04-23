<!-- Cake Design System — Table -->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ columns: { key: string; title: string }[]; dataSource: Record<string, any>[]; selectable?: boolean }>()
const selected = ref<Set<number>>(new Set())
const toggle = (i: number) => { selected.value.has(i) ? selected.value.delete(i) : selected.value.add(i); selected.value = new Set(selected.value) }
</script>

<template>
  <table class="cake-table">
    <thead>
      <tr>
        <th v-if="selectable" class="cake-table__th"><input type="checkbox" /></th>
        <th v-for="c in columns" :key="c.key" class="cake-table__th">{{ c.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in dataSource" :key="i" :class="['cake-table__row', { 'cake-table__row--selected': selected.has(i) }]">
        <td v-if="selectable" class="cake-table__td"><input type="checkbox" :checked="selected.has(i)" @change="toggle(i)" /></td>
        <td v-for="c in columns" :key="c.key" class="cake-table__td">{{ row[c.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.cake-table { width: 100%; border-collapse: collapse; background: var(--sem-color-bg-primary); }
.cake-table__th { background: var(--sem-color-bg-secondary); padding: var(--fdn-spacing-space-12) var(--fdn-spacing-space-16); text-align: left; border-bottom: 1px solid var(--fdn-color-palette-e2e8f0); }
.cake-table__td { padding: var(--fdn-spacing-space-12) var(--fdn-spacing-space-16); border-bottom: 1px solid var(--fdn-color-palette-e2e8f0); }
.cake-table__row:hover { background: var(--fdn-color-palette-f1f5f9); }
.cake-table__row--selected { background: var(--fdn-color-palette-dbeafe); }
</style>
