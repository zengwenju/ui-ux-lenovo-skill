<!-- Cake Design System — Search -->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ value?: string; placeholder?: string; suggestions?: string[]; loading?: boolean }>()
defineEmits<{ change: [value: string]; select: [value: string] }>()
const focused = ref(false)
</script>

<template>
  <div class="cake-search">
    <input class="cake-search__input" :class="{ 'cake-search__input--focus': focused }"
      :placeholder="placeholder ?? 'Search...'" :value="value"
      @focus="focused = true" @blur="setTimeout(() => focused = false, 150)"
      @input="$emit('change', ($event.target as HTMLInputElement).value)" />
    <div v-if="focused && (suggestions ?? []).length" class="cake-search__panel">
      <div v-for="(s, i) in suggestions" :key="i" class="cake-search__item" @click="$emit('select', s)">{{ s }}</div>
    </div>
  </div>
</template>

<style scoped>
.cake-search { position: relative; width: 280px; }
.cake-search__input { width: 100%; padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-12); border: 1px solid var(--sem-color-border); border-radius: var(--fdn-radius-radius-4); outline: none; box-sizing: border-box; }
.cake-search__input--focus { border-color: var(--sem-color-border-focus); }
.cake-search__panel { position: absolute; top: 100%; left: 0; right: 0; margin-top: 4px; background: var(--sem-color-bg-surface); box-shadow: var(--fdn-shadow-shadow-1); border-radius: var(--fdn-radius-radius-4); overflow: hidden; z-index: 10; }
.cake-search__item { padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-12); cursor: pointer; }
.cake-search__item:hover { background: var(--fdn-color-palette-f1f5f9); }
</style>
