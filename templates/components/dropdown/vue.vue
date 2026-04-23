<!-- Cake Design System — Dropdown -->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ value?: string; options: { label: string; value: string }[]; status?: 'default' | 'error'; placeholder?: string }>()
defineEmits<{ change: [value: string] }>()
const open = ref(false)
</script>

<template>
  <div class="cake-dropdown" :class="{ 'cake-dropdown--error': status === 'error' }">
    <div class="cake-dropdown__trigger" :class="{ 'cake-dropdown__trigger--focus': open }" @click="open = !open">
      <span>{{ options.find(o => o.value === value)?.label ?? placeholder ?? 'Select...' }}</span><span>&#9662;</span>
    </div>
    <div v-if="open" class="cake-dropdown__panel">
      <div v-for="o in options" :key="o.value"
        :class="['cake-dropdown__option', { 'cake-dropdown__option--selected': o.value === value }]"
        @click="$emit('change', o.value); open = false">{{ o.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.cake-dropdown { position: relative; width: 240px; }
.cake-dropdown__trigger {
  padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-12); border-radius: var(--fdn-radius-radius-4);
  border: 1px solid var(--sem-color-border); cursor: pointer; display: flex; justify-content: space-between; align-items: center;
}
.cake-dropdown__trigger--focus { border-color: var(--sem-color-interactive-primary); }
.cake-dropdown--error .cake-dropdown__trigger { border-color: var(--sem-color-border-error); }
.cake-dropdown__panel {
  position: absolute; top: 100%; left: 0; right: 0; margin-top: 4px; z-index: 10;
  box-shadow: var(--fdn-shadow-shadow-1); border-radius: var(--fdn-radius-radius-4);
  background: var(--sem-color-bg-surface); overflow: hidden;
}
.cake-dropdown__option { padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-12); cursor: pointer; }
.cake-dropdown__option:hover { background: var(--fdn-color-palette-f1f5f9); }
.cake-dropdown__option--selected { background: var(--fdn-color-palette-e0f2fe); }
</style>
