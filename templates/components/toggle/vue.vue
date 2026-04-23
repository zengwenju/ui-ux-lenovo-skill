<!-- Cake Design System — Toggle -->
<script setup lang="ts">
defineProps<{ checked?: boolean; disabled?: boolean; label?: string }>()
defineEmits<{ change: [checked: boolean] }>()
</script>

<template>
  <label class="cake-toggle" :class="{ 'cake-toggle--disabled': disabled }" @click.prevent="!disabled && $emit('change', !checked)">
    <span class="cake-toggle__track" :class="{ 'cake-toggle__track--on': checked, 'cake-toggle__track--disabled': disabled }">
      <span class="cake-toggle__thumb" :class="{ 'cake-toggle__thumb--on': checked }" />
    </span>
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style scoped>
.cake-toggle { display: inline-flex; align-items: center; gap: var(--fdn-spacing-space-8); cursor: pointer; }
.cake-toggle--disabled { color: var(--sem-color-text-disabled); cursor: not-allowed; }
.cake-toggle__track {
  width: 40px; height: 22px; border-radius: var(--fdn-radius-radius-128); position: relative;
  background: var(--sem-color-bg-secondary); transition: background 0.2s; flex-shrink: 0;
}
.cake-toggle__track--on { background: var(--sem-color-interactive-primary); }
.cake-toggle__track--disabled { background: var(--sem-color-bg-disabled); }
.cake-toggle__thumb {
  width: 18px; height: 18px; border-radius: var(--fdn-radius-radius-128);
  background: var(--sem-color-bg-primary); position: absolute; top: 2px; left: 2px;
  transition: left 0.2s; box-shadow: var(--fdn-shadow-shadow-3), var(--fdn-shadow-shadow-4);
}
.cake-toggle__thumb--on { left: 20px; }
</style>
