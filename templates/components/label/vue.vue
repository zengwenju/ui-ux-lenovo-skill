<!-- Cake Design System — Label (Tag) -->
<script setup lang="ts">
defineProps<{ variant?: 'solid' | 'soft' | 'outline'; color?: string; closable?: boolean }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <span :class="['cake-label', `cake-label--${variant ?? 'solid'}`]">
    <slot />
    <button v-if="closable" class="cake-label__close" @click="$emit('close')">&times;</button>
  </span>
</template>

<style scoped>
.cake-label {
  display: inline-flex; align-items: center; gap: var(--fdn-spacing-space-4);
  padding: var(--fdn-spacing-space-4) var(--fdn-spacing-space-8);
  border-radius: var(--fdn-radius-radius-4); font-size: 12px; line-height: 1;
}
.cake-label--solid { background: var(--fdn-color-palette-1e3a8a); color: var(--sem-color-text-inverse); }
.cake-label--soft { background: var(--fdn-color-palette-e0f2fe); color: var(--fdn-color-palette-1e3a8a); }
.cake-label--outline { background: transparent; border: 1px solid var(--fdn-color-palette-1e3a8a); color: var(--fdn-color-palette-1e3a8a); }
.cake-label__close { background: none; border: none; cursor: pointer; padding: 0; color: inherit; font-size: 14px; }
</style>
