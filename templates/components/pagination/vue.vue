<!-- Cake Design System — Pagination -->
<script setup lang="ts">
defineProps<{ current?: number; pageSize?: number; total?: number; showQuickJumper?: boolean }>()
defineEmits<{ change: [page: number] }>()
</script>

<template>
  <div class="cake-pagination">
    <button class="cake-pagination__item" :class="{ 'cake-pagination__item--disabled': (current ?? 1) <= 1 }" @click="(current ?? 1) > 1 && $emit('change', (current ?? 1) - 1)">&lt;</button>
    <button v-for="p in Math.min(Math.ceil((total ?? 100) / (pageSize ?? 10)), 7)" :key="p"
      :class="['cake-pagination__item', { 'cake-pagination__item--active': p === (current ?? 1) }]"
      @click="$emit('change', p)">{{ p }}</button>
    <button class="cake-pagination__item" :class="{ 'cake-pagination__item--disabled': (current ?? 1) >= Math.ceil((total ?? 100) / (pageSize ?? 10)) }" @click="$emit('change', (current ?? 1) + 1)">&gt;</button>
  </div>
</template>

<style scoped>
.cake-pagination { display: flex; gap: var(--fdn-spacing-space-4); align-items: center; }
.cake-pagination__item {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: var(--fdn-radius-radius-4); cursor: pointer;
  border: 1px solid var(--sem-color-border); color: var(--fdn-color-palette-0f172a); background: transparent;
}
.cake-pagination__item--active { border-color: var(--sem-color-interactive-primary); color: var(--sem-color-interactive-primary); }
.cake-pagination__item--disabled { color: var(--sem-color-text-disabled); border-color: var(--sem-color-border-disabled); cursor: not-allowed; }
</style>
