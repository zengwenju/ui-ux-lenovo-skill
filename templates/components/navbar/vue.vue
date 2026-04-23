<!-- Cake Design System — Navbar -->
<script setup lang="ts">
defineProps<{ brand?: string; menus?: { key: string; label: string; href?: string; active?: boolean }[]; collapsed?: boolean }>()
</script>

<template>
  <nav class="cake-navbar">
    <div class="cake-navbar__brand">{{ brand }}</div>
    <ul v-if="!collapsed" class="cake-navbar__menu">
      <li v-for="m in menus ?? []" :key="m.key">
        <a :href="m.href ?? '#'" :class="['cake-navbar__item', { 'cake-navbar__item--active': m.active }]">{{ m.label }}</a>
      </li>
    </ul>
    <button v-if="collapsed" class="cake-navbar__toggle">☰</button>
  </nav>
</template>

<style scoped>
.cake-navbar {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--sem-color-bg-surface); border-bottom: 1px solid var(--fdn-color-palette-e2e8f0);
  padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-24); height: 56px;
}
.cake-navbar__brand { font-weight: 700; }
.cake-navbar__menu { display: flex; gap: var(--fdn-spacing-space-16); list-style: none; margin: 0; padding: 0; }
.cake-navbar__item { color: var(--fdn-color-palette-0f172a); text-decoration: none; transition: color 0.15s; }
.cake-navbar__item:hover { color: var(--sem-color-interactive-primary-hover); }
.cake-navbar__item--active { color: var(--sem-color-interactive-primary); }
.cake-navbar__toggle { background: none; border: none; font-size: 20px; cursor: pointer; }
</style>
