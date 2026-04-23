<!-- Cake Design System — Qty Selector -->
<script setup lang="ts">
defineProps<{ value?: number; min?: number; max?: number; step?: number; disabled?: boolean }>()
defineEmits<{ change: [value: number] }>()
</script>

<template>
  <div class="cake-qty" :class="{ 'cake-qty--disabled': disabled }">
    <button class="cake-qty__btn" :class="{ 'cake-qty__btn--disabled': (value ?? 1) <= (min ?? 0) }" @click="$emit('change', Math.max(min ?? 0, (value ?? 1) - (step ?? 1)))">−</button>
    <input class="cake-qty__input" type="text" :value="value ?? 1" readonly />
    <button class="cake-qty__btn" :class="{ 'cake-qty__btn--disabled': (value ?? 1) >= (max ?? 99) }" @click="$emit('change', Math.min(max ?? 99, (value ?? 1) + (step ?? 1)))">+</button>
  </div>
</template>

<style scoped>
.cake-qty { display: inline-flex; align-items: center; border: 1px solid var(--sem-color-border); border-radius: var(--fdn-radius-radius-4); overflow: hidden; }
.cake-qty--disabled { opacity: 0.5; pointer-events: none; }
.cake-qty__btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; background: transparent; }
.cake-qty__btn--disabled { background: var(--sem-color-bg-disabled); cursor: not-allowed; }
.cake-qty__input { width: 48px; text-align: center; border: none; outline: none; border-left: 1px solid var(--sem-color-border); border-right: 1px solid var(--sem-color-border); }
</style>
