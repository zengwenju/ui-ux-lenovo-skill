<!-- Cake Design System — Tooltip -->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ content: string; placement?: 'top' | 'bottom' | 'left' | 'right'; trigger?: 'hover' | 'click' }>()
const visible = ref(false)
</script>

<template>
  <span class="cake-tooltip"
    @mouseenter="(trigger ?? 'hover') === 'hover' && (visible = true)"
    @mouseleave="(trigger ?? 'hover') === 'hover' && (visible = false)"
    @click="trigger === 'click' && (visible = !visible)">
    <slot />
    <span v-if="visible" :class="['cake-tooltip__tip', `cake-tooltip__tip--${placement ?? 'top'}`]">{{ content }}</span>
  </span>
</template>

<style scoped>
.cake-tooltip { position: relative; display: inline-flex; }
.cake-tooltip__tip {
  position: absolute; background: var(--fdn-color-palette-0f172a); color: var(--sem-color-text-inverse);
  border-radius: var(--fdn-radius-radius-4); padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-12);
  box-shadow: var(--fdn-shadow-shadow-1); font-size: 13px; white-space: nowrap; z-index: 100;
}
.cake-tooltip__tip--top { bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 6px; }
.cake-tooltip__tip--bottom { top: 100%; left: 50%; transform: translateX(-50%); margin-top: 6px; }
.cake-tooltip__tip--left { right: 100%; top: 50%; transform: translateY(-50%); margin-right: 6px; }
.cake-tooltip__tip--right { left: 100%; top: 50%; transform: translateY(-50%); margin-left: 6px; }
</style>
