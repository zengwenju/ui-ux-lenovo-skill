<!-- Cake Design System — Uploader -->
<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ fileList?: { name: string; status?: 'done' | 'error' }[]; accept?: string; multiple?: boolean; drag?: boolean }>()
defineEmits<{ change: [files: FileList] }>()
const inputRef = ref<HTMLInputElement>()
</script>

<template>
  <div>
    <div class="cake-uploader__zone"
      @dragover.prevent="($event.currentTarget as HTMLElement).classList.add('cake-uploader__zone--hover')"
      @dragleave="($event.currentTarget as HTMLElement).classList.remove('cake-uploader__zone--hover')"
      @drop.prevent="$emit('change', $event.dataTransfer!.files)"
      @click="inputRef?.click()">
      <p>Drop files here or click to upload</p>
      <input ref="inputRef" type="file" :accept="accept" :multiple="multiple" style="display:none" @change="$emit('change', ($event.target as HTMLInputElement).files!)" />
    </div>
    <div v-for="(f, i) in fileList ?? []" :key="i" :class="['cake-uploader__file', f.status === 'error' ? 'cake-uploader__file--error' : 'cake-uploader__file--done']">
      {{ f.name }} {{ f.status === 'error' ? '✗' : '✓' }}
    </div>
  </div>
</template>

<style scoped>
.cake-uploader__zone {
  border: 2px dashed var(--sem-color-border); border-radius: var(--fdn-radius-radius-4);
  background: var(--sem-color-bg-primary); padding: var(--fdn-spacing-space-24);
  text-align: center; cursor: pointer; transition: border-color 0.2s;
}
.cake-uploader__zone--hover, .cake-uploader__zone:hover { border-color: var(--sem-color-border-focus); }
.cake-uploader__file { padding: var(--fdn-spacing-space-4); }
.cake-uploader__file--done { color: var(--sem-color-state-success-light); }
.cake-uploader__file--error { color: var(--sem-color-state-error); }
</style>
