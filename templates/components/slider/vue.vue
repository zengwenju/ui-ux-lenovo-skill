<!-- Cake Design System — Slider -->
<script setup lang="ts">
defineProps<{ value?: number; min?: number; max?: number; step?: number; range?: boolean }>()
defineEmits<{ change: [value: number] }>()
</script>

<template>
  <div class="cake-slider">
    <div class="cake-slider__track">
      <div class="cake-slider__range" :style="{ width: `${(((value ?? 50) - (min ?? 0)) / ((max ?? 100) - (min ?? 0))) * 100}%` }" />
      <div class="cake-slider__thumb" :style="{ left: `${(((value ?? 50) - (min ?? 0)) / ((max ?? 100) - (min ?? 0))) * 100}%` }" />
    </div>
    <input type="range" :min="min ?? 0" :max="max ?? 100" :step="step ?? 1" :value="value ?? 50"
      class="cake-slider__native" @input="$emit('change', Number(($event.target as HTMLInputElement).value))" />
  </div>
</template>

<style scoped>
.cake-slider { position: relative; padding: var(--fdn-spacing-space-8) 0; }
.cake-slider__track { position: relative; width: 100%; height: 6px; border-radius: var(--fdn-radius-radius-4); background: var(--sem-color-bg-secondary); }
.cake-slider__range { position: absolute; left: 0; top: 0; height: 100%; border-radius: var(--fdn-radius-radius-4); background: var(--sem-color-interactive-primary); }
.cake-slider__thumb {
  position: absolute; top: 50%; transform: translate(-50%, -50%);
  width: 18px; height: 18px; border-radius: 50%; background: var(--sem-color-bg-primary);
  border: 2px solid var(--sem-color-interactive-primary); box-shadow: var(--fdn-shadow-shadow-3); cursor: pointer;
}
.cake-slider__native { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }
</style>
