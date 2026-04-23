<!-- Cake Design System — Tree -->
<script setup lang="ts">
import { ref } from 'vue'
type TreeNode = { key: string; label: string; children?: TreeNode[] }
defineProps<{ data: TreeNode[]; expandedKeys?: string[]; selectedKeys?: string[]; checkable?: boolean }>()
defineEmits<{ select: [key: string] }>()
const expanded = ref<Set<string>>(new Set())
const toggle = (k: string) => { expanded.value.has(k) ? expanded.value.delete(k) : expanded.value.add(k); expanded.value = new Set(expanded.value) }
</script>

<template>
  <div class="cake-tree">
    <template v-for="node in data" :key="node.key">
      <div class="cake-tree__node" :class="{ 'cake-tree__node--selected': (selectedKeys ?? []).includes(node.key) }" @click="toggle(node.key); $emit('select', node.key)">
        <span class="cake-tree__arrow">{{ node.children?.length ? (expanded.has(node.key) ? '▾' : '▸') : '' }}</span>
        <span>{{ node.label }}</span>
      </div>
      <template v-if="expanded.has(node.key) && node.children">
        <div v-for="child in node.children" :key="child.key" class="cake-tree__node cake-tree__node--child" :class="{ 'cake-tree__node--selected': (selectedKeys ?? []).includes(child.key) }" @click="$emit('select', child.key)">
          <span>{{ child.label }}</span>
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.cake-tree__node { display: flex; align-items: center; padding: var(--fdn-spacing-space-4) var(--fdn-spacing-space-8); cursor: pointer; border-radius: var(--fdn-radius-radius-4); }
.cake-tree__node:hover { background: var(--fdn-color-palette-f1f5f9); }
.cake-tree__node--selected { background: var(--fdn-color-palette-e0f2fe); }
.cake-tree__node--child { padding-left: var(--fdn-spacing-space-24); }
.cake-tree__arrow { width: 16px; flex-shrink: 0; }
</style>
