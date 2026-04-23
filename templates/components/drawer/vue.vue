<!-- Cake Design System — Drawer -->
<script setup lang="ts">
defineProps<{ open?: boolean; placement?: 'left' | 'right'; width?: string; closable?: boolean; title?: string }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <Teleport to="body">
    <template v-if="open">
      <div class="cake-drawer__scrim" @click="$emit('close')" />
      <div class="cake-drawer" :class="`cake-drawer--${placement ?? 'right'}`" :style="{ width: width ?? '320px' }">
        <div class="cake-drawer__header">
          <strong v-if="title">{{ title }}</strong>
          <button v-if="closable !== false" class="cake-drawer__close" @click="$emit('close')">&times;</button>
        </div>
        <div class="cake-drawer__body"><slot /></div>
      </div>
    </template>
  </Teleport>
</template>

<style scoped>
.cake-drawer__scrim { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; }
.cake-drawer {
  position: fixed; top: 0; height: 100%; z-index: 1001;
  background: var(--sem-color-bg-surface); box-shadow: var(--fdn-shadow-shadow-5);
  padding: var(--fdn-spacing-space-24); display: flex; flex-direction: column;
}
.cake-drawer--left { left: 0; }
.cake-drawer--right { right: 0; }
.cake-drawer__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--fdn-spacing-space-16); }
.cake-drawer__close { background: none; border: none; cursor: pointer; font-size: 18px; }
.cake-drawer__body { flex: 1; overflow: auto; }
</style>
