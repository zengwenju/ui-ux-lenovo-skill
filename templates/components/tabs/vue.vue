<!-- Cake Design System — Tabs -->
<script setup lang="ts">
defineProps<{ value?: string; items: { key: string; label: string; disabled?: boolean }[]; direction?: 'horizontal' | 'vertical'; type?: 'line' | 'card' }>()
defineEmits<{ change: [key: string] }>()
</script>

<template>
  <div :class="['cake-tabs', `cake-tabs--${direction ?? 'horizontal'}`]">
    <button v-for="item in items" :key="item.key"
      :class="['cake-tabs__item', { 'cake-tabs__item--active': item.key === value, 'cake-tabs__item--disabled': item.disabled }]"
      @click="!item.disabled && $emit('change', item.key)">{{ item.label }}</button>
  </div>
</template>

<style scoped>
.cake-tabs { display: flex; border-bottom: 1px solid var(--sem-color-border); }
.cake-tabs--vertical { flex-direction: column; border-bottom: none; border-right: 1px solid var(--sem-color-border); }
.cake-tabs__item {
  padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-16); cursor: pointer; background: transparent; border: none;
  color: var(--sem-color-text-secondary); border-bottom: 2px solid transparent; transition: color 0.15s, border-color 0.15s;
}
.cake-tabs__item:hover:not(.cake-tabs__item--disabled) { color: var(--sem-color-interactive-primary-hover); }
.cake-tabs__item--active { color: var(--sem-color-interactive-primary); border-bottom-color: var(--sem-color-interactive-primary); }
.cake-tabs__item--disabled { color: var(--sem-color-text-disabled); cursor: not-allowed; }
</style>
