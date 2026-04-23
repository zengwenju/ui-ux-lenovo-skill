<!-- Cake Design System — Breadcrumb -->
<script setup lang="ts">
defineProps<{ items: { label: string; href?: string }[]; separator?: string }>()
</script>

<template>
  <nav class="cake-breadcrumb">
    <template v-for="(item, i) in items" :key="i">
      <span v-if="i === items.length - 1" class="cake-breadcrumb__current">{{ item.label }}</span>
      <template v-else>
        <a :href="item.href ?? '#'" class="cake-breadcrumb__link">{{ item.label }}</a>
        <span class="cake-breadcrumb__sep">{{ separator ?? '/' }}</span>
      </template>
    </template>
  </nav>
</template>

<style scoped>
.cake-breadcrumb { display: flex; align-items: center; gap: var(--fdn-spacing-space-8); flex-wrap: wrap; }
.cake-breadcrumb__link { color: var(--sem-color-text-link); text-decoration: none; }
.cake-breadcrumb__link:hover { color: var(--sem-color-text-link-hover); }
.cake-breadcrumb__current { color: var(--sem-color-text-secondary); }
.cake-breadcrumb__sep { color: var(--sem-color-text-secondary); }
</style>
