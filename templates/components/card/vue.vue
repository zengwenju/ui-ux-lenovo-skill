<!-- Cake Design System — Card -->
<script setup lang="ts">
defineProps<{ variant?: 'vertical' | 'horizontal' | 'compact'; hoverable?: boolean; title?: string; meta?: string; cover?: string }>()
</script>

<template>
  <div :class="['cake-card', `cake-card--${variant ?? 'vertical'}`, { 'cake-card--hoverable': hoverable }]">
    <img v-if="cover" :src="cover" alt="" class="cake-card__cover" />
    <div class="cake-card__body">
      <div v-if="title" class="cake-card__title">{{ title }}</div>
      <div v-if="meta" class="cake-card__meta">{{ meta }}</div>
      <slot />
    </div>
    <div v-if="$slots.actions" class="cake-card__actions"><slot name="actions" /></div>
  </div>
</template>

<style scoped>
.cake-card {
  background: var(--sem-color-bg-surface); border: 1px solid var(--sem-color-border);
  border-radius: var(--fdn-radius-radius-8); padding: var(--fdn-spacing-space-16);
  box-shadow: var(--fdn-shadow-shadow-1); transition: box-shadow 0.2s; overflow: hidden;
}
.cake-card--horizontal { display: flex; gap: var(--fdn-spacing-space-16); }
.cake-card--hoverable:hover { box-shadow: var(--fdn-shadow-shadow-2); }
.cake-card__cover { width: 100%; border-radius: var(--fdn-radius-radius-4); margin-bottom: var(--fdn-spacing-space-12); }
.cake-card__title { font-size: var(--fdn-typo-style-16-font-size); font-weight: var(--fdn-typo-style-16-font-weight); line-height: var(--fdn-typo-style-16-line-height); }
.cake-card__meta { color: var(--sem-color-text-secondary); margin-top: var(--fdn-spacing-space-4); }
.cake-card__actions { margin-top: var(--fdn-spacing-space-12); display: flex; gap: var(--fdn-spacing-space-8); }
</style>
