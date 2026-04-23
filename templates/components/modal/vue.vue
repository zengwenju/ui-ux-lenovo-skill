<!-- Cake Design System — Modal -->
<script setup lang="ts">
defineProps<{ open?: boolean; title?: string; variant?: 'confirm' | 'danger'; closable?: boolean }>()
defineEmits<{ close: []; confirm: [] }>()
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="cake-modal__overlay" @click="$emit('close')">
      <div class="cake-modal" @click.stop>
        <div class="cake-modal__header">
          <strong v-if="title">{{ title }}</strong>
          <button v-if="closable !== false" class="cake-modal__close" @click="$emit('close')">&times;</button>
        </div>
        <div class="cake-modal__body"><slot /></div>
        <div class="cake-modal__footer">
          <button class="cake-modal__btn cake-modal__btn--cancel" @click="$emit('close')">Cancel</button>
          <button :class="['cake-modal__btn', variant === 'danger' ? 'cake-modal__btn--danger' : 'cake-modal__btn--confirm']" @click="$emit('confirm')">
            {{ variant === 'danger' ? 'Delete' : 'Confirm' }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.cake-modal__overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.cake-modal { background: var(--sem-color-bg-surface); border-radius: var(--fdn-radius-radius-8); padding: var(--fdn-spacing-space-24); box-shadow: var(--fdn-shadow-shadow-2); min-width: 360px; max-width: 90vw; }
.cake-modal__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--fdn-spacing-space-16); }
.cake-modal__close { background: none; border: none; cursor: pointer; font-size: 18px; }
.cake-modal__body { color: var(--sem-color-text-secondary); }
.cake-modal__footer { display: flex; justify-content: flex-end; gap: var(--fdn-spacing-space-12); margin-top: var(--fdn-spacing-space-16); }
.cake-modal__btn { padding: var(--fdn-spacing-space-8) var(--fdn-spacing-space-16); border-radius: var(--fdn-radius-radius-4); border: none; cursor: pointer; }
.cake-modal__btn--cancel { background: transparent; border: 1px solid var(--sem-color-border); }
.cake-modal__btn--confirm { background: var(--sem-color-bg-brand); color: var(--sem-color-text-inverse); }
.cake-modal__btn--danger { background: var(--fdn-color-palette-b91c1c); color: var(--sem-color-text-inverse); }
</style>
