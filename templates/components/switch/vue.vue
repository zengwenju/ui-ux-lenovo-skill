<!-- Cake Design System — Switch (Segmented) -->
<script setup lang="ts">
defineProps<{ modelValue?: string; options: { label: string; value: string }[]; disabled?: boolean }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div class="cake-switch" :class="{ 'cake-switch--disabled': disabled }">
    <button
      v-for="o in options" :key="o.value"
      :class="['cake-switch__item', { 'cake-switch__item--active': o.value === modelValue }]"
      @click="!disabled && $emit('update:modelValue', o.value)"
    >{{ o.label }}</button>
  </div>
</template>

<style scoped>
.cake-switch {
  display: inline-flex; border-radius: var(--fdn-radius-radius-100);
  background: var(--sem-color-bg-secondary); padding: 2px; gap: 2px;
}
.cake-switch--disabled { opacity: 0.5; pointer-events: none; }
.cake-switch__item {
  padding: var(--fdn-spacing-space-4) var(--fdn-spacing-space-12);
  border-radius: var(--fdn-radius-radius-100); border: none; cursor: pointer;
  background: transparent; color: var(--fdn-color-palette-0f172a);
  transition: background 0.2s, color 0.2s;
}
.cake-switch__item--active { background: var(--sem-color-bg-brand); color: var(--sem-color-text-inverse); }
</style>
