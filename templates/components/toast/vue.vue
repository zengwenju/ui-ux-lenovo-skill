<!-- Cake Design System — Toast -->
<script setup lang="ts">
defineProps<{ type?: 'info' | 'success' | 'error' | 'warning'; title?: string; description?: string; closable?: boolean }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <div :class="['cake-toast', `cake-toast--${type ?? 'info'}`]">
    <div>
      <strong v-if="title" class="cake-toast__title">{{ title }}</strong>
      <span v-if="description" class="cake-toast__desc">{{ description }}</span>
    </div>
    <button v-if="closable !== false" class="cake-toast__close" @click="$emit('close')">&times;</button>
  </div>
</template>

<style scoped>
.cake-toast {
  border-radius: var(--fdn-radius-radius-8); padding: var(--fdn-spacing-space-16);
  box-shadow: var(--fdn-shadow-shadow-1); display: flex; justify-content: space-between;
  align-items: flex-start; min-width: 280px; max-width: 400px;
}
.cake-toast--info { background: var(--sem-color-state-info); }
.cake-toast--success { background: var(--sem-color-state-success); }
.cake-toast--error { background: var(--sem-color-state-error-light); }
.cake-toast--warning { background: var(--sem-color-state-warning); }
.cake-toast__title { display: block; }
.cake-toast__desc { font-size: 13px; }
.cake-toast__close { background: none; border: none; cursor: pointer; font-size: 16px; }
</style>
