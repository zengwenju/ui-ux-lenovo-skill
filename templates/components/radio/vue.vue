<!-- Cake Design System — Radio -->
<script setup lang="ts">
defineProps<{ checked?: boolean; disabled?: boolean; label?: string; value?: string; name?: string }>()
defineEmits<{ change: [value: string] }>()
</script>

<template>
  <label class="cake-radio" :class="{ 'cake-radio--disabled': disabled }" @click.prevent="!disabled && $emit('change', value ?? '')">
    <span class="cake-radio__outer" :class="{ 'cake-radio__outer--checked': checked, 'cake-radio__outer--disabled': disabled }">
      <span v-if="checked" class="cake-radio__inner" />
    </span>
    <span v-if="label">{{ label }}</span>
    <input type="radio" :name="name" :value="value" :checked="checked" :disabled="disabled" style="display:none" />
  </label>
</template>

<style scoped>
.cake-radio { display: inline-flex; align-items: center; gap: var(--fdn-spacing-space-8); cursor: pointer; }
.cake-radio--disabled { color: var(--sem-color-text-disabled); cursor: not-allowed; }
.cake-radio__outer {
  width: 18px; height: 18px; border-radius: var(--fdn-radius-radius-128); flex-shrink: 0;
  border: 2px solid var(--sem-color-border); background: var(--sem-color-bg-primary);
  display: inline-flex; align-items: center; justify-content: center;
}
.cake-radio__outer--checked { border-color: var(--sem-color-interactive-primary); }
.cake-radio__outer--disabled { background: var(--sem-color-bg-disabled); border-color: var(--sem-color-border-disabled); }
.cake-radio__inner { width: 8px; height: 8px; border-radius: var(--fdn-radius-radius-128); background: var(--sem-color-interactive-primary); }
</style>
