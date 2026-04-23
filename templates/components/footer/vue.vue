<!-- Cake Design System — Footer -->
<script setup lang="ts">
defineProps<{
  theme?: 'light' | 'dark'
  sections?: { title: string; links: { label: string; href: string }[] }[]
  socials?: { icon: string; href: string }[]
  bottomLinks?: { label: string; href: string }[]
}>()
</script>

<template>
  <footer :class="['cake-footer', `cake-footer--${theme ?? 'light'}`]">
    <div class="cake-footer__grid">
      <div v-for="(s, i) in sections ?? []" :key="i">
        <strong>{{ s.title }}</strong>
        <div class="cake-footer__links">
          <a v-for="(l, j) in s.links" :key="j" :href="l.href" class="cake-footer__link">{{ l.label }}</a>
        </div>
      </div>
    </div>
    <div class="cake-footer__bottom">
      <a v-for="(l, i) in bottomLinks ?? []" :key="i" :href="l.href" class="cake-footer__link cake-footer__link--inline">{{ l.label }}</a>
    </div>
  </footer>
</template>

<style scoped>
.cake-footer { padding: var(--fdn-spacing-space-80) var(--fdn-spacing-space-24) var(--fdn-spacing-space-24); }
.cake-footer--light { background: var(--sem-color-bg-primary); }
.cake-footer--dark { background: var(--fdn-color-palette-0f172a); color: var(--sem-color-text-inverse); }
.cake-footer__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--fdn-spacing-space-24); }
.cake-footer__links { margin-top: var(--fdn-spacing-space-8); }
.cake-footer__link { color: var(--sem-color-text-link); text-decoration: none; display: block; margin-bottom: var(--fdn-spacing-space-4); }
.cake-footer__link:hover { color: var(--sem-color-text-link-hover); }
.cake-footer__link--inline { display: inline; margin-right: var(--fdn-spacing-space-16); }
.cake-footer__bottom { color: var(--sem-color-text-secondary); margin-top: var(--fdn-spacing-space-24); font-size: 13px; }
</style>
