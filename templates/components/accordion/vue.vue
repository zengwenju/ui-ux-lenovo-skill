<!-- Cake Design System — Accordion -->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ items: { key: string; title: string; content: string }[]; activeKeys?: string[]; multiple?: boolean }>()
const active = ref<Set<string>>(new Set())
const toggle = (key: string, multi?: boolean) => {
  const s = new Set(multi ? active.value : [])
  s.has(key) ? s.delete(key) : s.add(key)
  active.value = s
}
</script>

<template>
  <div class="cake-accordion">
    <div v-for="item in items" :key="item.key">
      <div class="cake-accordion__header" @click="toggle(item.key, multiple)">
        <span>{{ item.title }}</span><span>{{ active.has(item.key) ? '−' : '+' }}</span>
      </div>
      <div v-if="active.has(item.key)" class="cake-accordion__body">{{ item.content }}</div>
    </div>
  </div>
</template>

<style scoped>
.cake-accordion__header {
  padding: var(--fdn-spacing-space-16); cursor: pointer; display: flex; justify-content: space-between;
  align-items: center; border-bottom: 1px solid var(--fdn-color-palette-e2e8f0); transition: background 0.15s;
}
.cake-accordion__header:hover { background: var(--fdn-color-palette-f1f5f9); }
.cake-accordion__body { padding: var(--fdn-spacing-space-16); color: var(--sem-color-text-secondary); border-bottom: 1px solid var(--fdn-color-palette-e2e8f0); }
</style>
