<script setup lang="ts">
import { inject, ref, onMounted, type Ref } from "vue";

defineProps({
  title: String,
});

// Emit is used to emit the select event to the parent component
const emit = defineEmits<{
  (e: "select", value: number): void;
}>();

// Inject is used to get the tabs and currentTab refs from the parent component
const tabs = inject<Ref<HTMLElement[]>>("tabs");
const currentTab = inject<Ref<number>>("currentTab");

const tab = ref<HTMLElement | null>(null);

// Todo: This function should be called when the tab is clicked
const selectTab = () => {
  if (tab.value) {
    // Get the index of the tab in the tabs array
    const index = tabs?.value.indexOf(tab.value);
    // Emit the select event with the index of the tab
    emit("select", index!);
  }
};

onMounted(() => {
  if (tab.value) {
    tabs?.value.push(tab.value);
  }
});
</script>
<template>
  <!-- Todo: Add the necessary role attribute to the li element to make it a tab list item -->
  <li
    :class="[
      '-mb-1.5',
      {
        'z-10': tabs?.indexOf(tab!) === currentTab,
      },
    ]"
  >
    <a
      href="#"
      :class="[
        'inline-block border-2 border-black px-4 py-2 outline-none ring-blue-500 ring-offset-2 focus-within:ring-2',
        {
          'bg-blue-500 text-white': tabs?.indexOf(tab!) === currentTab,
          'bg-white text-black': tabs?.indexOf(tab!) !== currentTab,
        },
      ]"
      ref="tab"
    >
      {{ title }}
    </a>
  </li>
</template>
