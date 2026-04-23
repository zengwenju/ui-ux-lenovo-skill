<!-- Cake Design System — Button -->
<script setup lang="ts">
defineProps<{
  variant?: 'filled' | 'outlined' | 'text'
  state?: 'default' | 'success' | 'error'
  size?: 'sm' | 'md'
  disabled?: boolean
}>()
</script>

<template>
  <button
    :class="['cake-btn', `cake-btn--${variant ?? 'filled'}`, `cake-btn--${size ?? 'md'}`, `cake-btn--${state ?? 'default'}']"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.cake-btn {
  display: inline-flex; align-items: center; justify-content: center;
  border: none; cursor: pointer; border-radius: var(--fdn-radius-radius-4);
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.cake-btn--sm { padding: var(--fdn-spacing-space-4) var(--fdn-spacing-space-12); font-size: var(--fdn-typo-style-13-font-size); line-height: var(--fdn-typo-style-13-line-height); font-weight: var(--fdn-typo-style-13-font-weight); }
.cake-btn--md { padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-16); font-size: var(--fdn-typo-style-1-font-size); line-height: var(--fdn-typo-style-1-line-height); font-weight: var(--fdn-typo-style-1-font-weight); }
.cake-btn--filled { background: var(--sem-color-bg-brand); color: var(--sem-color-text-inverse); }
.cake-btn--filled:hover:not(:disabled) { background: var(--sem-color-interactive-primary-hover); }
.cake-btn--filled.cake-btn--success { background: var(--fdn-color-palette-047857); }
.cake-btn--filled.cake-btn--error { background: var(--fdn-color-palette-b91c1c); }
.cake-btn--outlined { background: transparent; border: 1px solid var(--sem-color-border); color: var(--sem-color-interactive-primary); }
.cake-btn--outlined:hover:not(:disabled) { border-color: var(--sem-color-border-focus); color: var(--sem-color-interactive-primary-hover); }
.cake-btn--text { background: transparent; color: var(--sem-color-interactive-primary); border: none; }
.cake-btn--text:hover:not(:disabled) { background: var(--fdn-color-palette-f1f5f9); }
.cake-btn:disabled { background: var(--sem-color-bg-disabled); color: var(--sem-color-text-disabled); cursor: not-allowed; border-color: transparent; }
</style>
