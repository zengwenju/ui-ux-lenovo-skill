<!-- Cake Design System — Checkbox -->
<script setup lang="ts">
defineProps<{ checked?: boolean; indeterminate?: boolean; disabled?: boolean; label?: string }>()
defineEmits<{ change: [checked: boolean] }>()
</script>

<template>
  <label class="cake-checkbox" :class="{ 'cake-checkbox--disabled': disabled }" @click.prevent="!disabled && $emit('change', !checked)">
    <span class="cake-checkbox__box" :class="{ 'cake-checkbox__box--checked': checked || indeterminate, 'cake-checkbox__box--disabled': disabled }">
      <svg v-if="checked" width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="var(--sem-color-text-inverse)" stroke-width="2" fill="none"/></svg>
      <svg v-else-if="indeterminate" width="12" height="12" viewBox="0 0 12 12"><line x1="2" y1="6" x2="10" y2="6" stroke="var(--sem-color-text-inverse)" stroke-width="2"/></svg>
    </span>
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style scoped>
.cake-checkbox { display: inline-flex; align-items: center; gap: var(--fdn-spacing-space-8); cursor: pointer; }
.cake-checkbox--disabled { color: var(--sem-color-text-disabled); cursor: not-allowed; }
.cake-checkbox__box {
  width: 18px; height: 18px; border-radius: var(--fdn-radius-radius-4); flex-shrink: 0;
  border: 2px solid var(--sem-color-border); background: var(--sem-color-bg-primary);
  display: inline-flex; align-items: center; justify-content: center;
}
.cake-checkbox__box--checked { background: var(--sem-color-interactive-primary); border-color: var(--sem-color-interactive-primary); }
.cake-checkbox__box--disabled { background: var(--sem-color-bg-disabled); border-color: var(--sem-color-border-disabled); }
</style>
