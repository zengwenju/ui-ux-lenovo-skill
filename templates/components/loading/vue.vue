<!-- Cake Design System — Loading -->
<script setup lang="ts">
defineProps<{ type?: 'progress' | 'spinner'; percent?: number }>()
</script>

<template>
  <div v-if="(type ?? 'spinner') === 'progress'" class="cake-progress">
    <div class="cake-progress__bar" :style="{ width: `${Math.min(100, Math.max(0, percent ?? 0))}%` }" />
  </div>
  <svg v-else class="cake-spinner" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="none" stroke="var(--sem-color-bg-secondary)" stroke-width="3" />
    <circle cx="12" cy="12" r="10" fill="none" stroke="var(--sem-color-interactive-primary)" stroke-width="3" stroke-dasharray="31.4 31.4" stroke-linecap="round" />
  </svg>
</template>

<style scoped>
.cake-progress { width: 100%; height: 6px; border-radius: var(--fdn-radius-radius-4); background: var(--sem-color-bg-secondary); overflow: hidden; }
.cake-progress__bar { height: 100%; background: var(--sem-color-interactive-primary); border-radius: var(--fdn-radius-radius-4); transition: width 0.3s; }
.cake-spinner { animation: cake-spin 1s linear infinite; }
@keyframes cake-spin { to { transform: rotate(360deg); } }
</style>
