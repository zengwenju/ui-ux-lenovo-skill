<!-- Cake Design System — Stepper -->
<script setup lang="ts">
defineProps<{ current?: number; items: { title: string; description?: string }[]; direction?: 'horizontal' | 'vertical' }>()
</script>

<template>
  <div :class="['cake-stepper', `cake-stepper--${direction ?? 'horizontal'}`]">
    <template v-for="(item, i) in items" :key="i">
      <div class="cake-stepper__step">
        <span :class="['cake-stepper__circle', { 'cake-stepper__circle--active': i <= (current ?? 0) }]">
          {{ i < (current ?? 0) ? '✓' : i + 1 }}
        </span>
        <span :class="{ 'cake-stepper__label--muted': i > (current ?? 0) }">{{ item.title }}</span>
      </div>
      <div v-if="i < items.length - 1" :class="['cake-stepper__line', { 'cake-stepper__line--done': i < (current ?? 0) }]" />
    </template>
  </div>
</template>

<style scoped>
.cake-stepper { display: flex; align-items: center; gap: var(--fdn-spacing-space-4); }
.cake-stepper--vertical { flex-direction: column; align-items: flex-start; }
.cake-stepper__step { display: flex; align-items: center; gap: var(--fdn-spacing-space-4); }
.cake-stepper__circle {
  width: 28px; height: 28px; border-radius: var(--fdn-radius-radius-128); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 13px;
  background: var(--sem-color-bg-secondary); color: var(--sem-color-text-secondary);
}
.cake-stepper__circle--active { background: var(--sem-color-interactive-primary); color: var(--sem-color-text-inverse); }
.cake-stepper__label--muted { color: var(--sem-color-text-secondary); font-size: 13px; }
.cake-stepper__line { flex: 1; height: 2px; background: var(--sem-color-border); min-width: 24px; }
.cake-stepper__line--done { background: var(--sem-color-interactive-primary); }
</style>
