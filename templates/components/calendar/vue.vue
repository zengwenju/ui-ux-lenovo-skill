<!-- Cake Design System — Calendar -->
<script setup lang="ts">
defineProps<{ value?: string; mode?: 'date' | 'month' | 'year' }>()
defineEmits<{ change: [date: string] }>()
const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
</script>

<template>
  <div class="cake-cal">
    <div class="cake-cal__header"><button>&lt;</button><strong>April 2026</strong><button>&gt;</button></div>
    <div class="cake-cal__grid">
      <div v-for="d in days" :key="d" class="cake-cal__day-name">{{ d }}</div>
      <div v-for="i in 30" :key="i"
        :class="['cake-cal__cell', { 'cake-cal__cell--selected': value === `2026-04-${String(i).padStart(2,'0')}`, 'cake-cal__cell--today': i === 23 }]"
        @click="$emit('change', `2026-04-${String(i).padStart(2,'0')}`)">{{ i }}</div>
    </div>
  </div>
</template>

<style scoped>
.cake-cal { padding: var(--fdn-spacing-space-16); }
.cake-cal__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--fdn-spacing-space-8); }
.cake-cal__grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; text-align: center; }
.cake-cal__day-name { font-weight: 600; padding: var(--fdn-spacing-space-4); }
.cake-cal__cell { width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; border-radius: var(--fdn-radius-radius-4); cursor: pointer; transition: background 0.15s; }
.cake-cal__cell:hover { background: var(--fdn-color-palette-f1f5f9); }
.cake-cal__cell--selected { background: var(--sem-color-bg-brand); color: var(--sem-color-text-inverse); }
.cake-cal__cell--today { border: 1px solid var(--sem-color-interactive-primary); }
.cake-cal__cell--muted { color: var(--sem-color-text-secondary); }
</style>
