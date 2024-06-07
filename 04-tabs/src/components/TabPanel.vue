<script setup lang="ts">
import { inject, ref, onMounted, type Ref } from "vue";

// Inject is used to get the panels array from the Tabs component
const panels = inject<Ref<HTMLElement[]>>("panels");

const panel = ref<HTMLElement | null>(null);

onMounted(() => {
  if (panel.value) {
    panels?.value.push(panel.value);
  }
});
</script>
<template>
  <!-- TODO: Add role attribute to the div element to make it a tab panel -->
  <div class="prose hidden border-2 border-black bg-white p-4" ref="panel">
    <slot />
  </div>
</template>
