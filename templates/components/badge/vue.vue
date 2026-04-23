<!-- Cake Design System — Badge -->
<script setup lang="ts">
defineProps<{ count?: number; dot?: boolean; status?: 'info' | 'error' | 'success' | 'warning' }>()
</script>

<template>
  <span class="cake-badge">
    <slot />
    <span v-if="count !== undefined || dot" :class="['cake-badge__sup', `cake-badge__sup--${status ?? 'info'}`, { 'cake-badge__sup--dot': dot }]">
      {{ dot ? '' : count }}
    </span>
  </span>
</template>

<style scoped>
.cake-badge { position: relative; display: inline-flex; }
.cake-badge__sup {
  position: absolute; top: -4px; right: -4px;
  color: var(--sem-color-text-inverse); border-radius: var(--fdn-radius-radius-100);
  font-size: 11px; line-height: 1; min-width: 18px; height: 18px;
  display: flex; align-items: center; justify-content: center; padding: 0 5px;
}
.cake-badge__sup--dot { min-width: 8px; height: 8px; padding: 0; }
.cake-badge__sup--info { background: var(--sem-color-interactive-primary); }
.cake-badge__sup--error { background: var(--sem-color-state-error); }
.cake-badge__sup--success { background: var(--fdn-color-palette-047857); }
.cake-badge__sup--warning { background: var(--sem-color-state-warning); }
</style>
