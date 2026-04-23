<!-- Cake Design System — Text Field -->
<script setup lang="ts">
defineProps<{ value?: string; type?: string; placeholder?: string; label?: string; error?: string; disabled?: boolean; size?: 'sm' | 'md' | 'lg' }>()
defineEmits<{ change: [value: string] }>()
</script>

<template>
  <div class="cake-field">
    <label v-if="label" class="cake-field__label">{{ label }}</label>
    <input
      :class="['cake-field__input', `cake-field__input--${size ?? 'md'}`, { 'cake-field__input--error': error, 'cake-field__input--disabled': disabled }]"
      :type="type ?? 'text'" :placeholder="placeholder" :value="value" :disabled="disabled"
      @input="$emit('change', ($event.target as HTMLInputElement).value)" />
    <span v-if="error" class="cake-field__error">{{ error }}</span>
  </div>
</template>

<style scoped>
.cake-field { width: 280px; }
.cake-field__label { display: block; margin-bottom: var(--fdn-spacing-space-4); }
.cake-field__input {
  width: 100%; box-sizing: border-box; border-radius: var(--fdn-radius-radius-4);
  border: 1px solid var(--sem-color-border); background: var(--sem-color-bg-primary); outline: none;
}
.cake-field__input::placeholder { color: var(--sem-color-text-secondary); }
.cake-field__input--sm { padding: var(--fdn-spacing-space-4) var(--fdn-spacing-space-8); }
.cake-field__input--md { padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-12); }
.cake-field__input--lg { padding: var(--fdn-spacing-space-12) var(--fdn-spacing-space-16); }
.cake-field__input:focus { border-color: var(--sem-color-border-focus); }
.cake-field__input--error { border-color: var(--sem-color-border-error); }
.cake-field__input--disabled { background: var(--sem-color-bg-disabled); color: var(--sem-color-text-disabled); border-color: var(--sem-color-border-disabled); }
.cake-field__error { color: var(--sem-color-state-error); font-size: 12px; margin-top: var(--fdn-spacing-space-4); display: block; }
</style>
