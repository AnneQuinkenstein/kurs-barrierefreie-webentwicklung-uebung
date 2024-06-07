<script setup lang="ts">
import { ref, provide, watchEffect } from "vue";

const currentTab = ref(0);
const tabs = ref<HTMLElement[]>([]);
const panels = ref<HTMLElement[]>([]);

// Provide is used to make the tabs, panels, and currentTab values available to the child components
// It is similar to dependency injection
provide("tabs", tabs);
provide("panels", panels);
provide("currentTab", currentTab);

watchEffect(() => {
  // Todo: Return early if the tabs or panels are empty
  // Todo: Throw an error if the number of tabs and panels are not equal
  // An Error can be thrown using the following code:
  //    throw new Error("The number of tabs and panels must be equal.");

  tabs.value.forEach((tab, index) => {
    // Todo: Add the necessary attributes to the tab element
    // The attributes should be added dinamically using the setAttribute method
    // The tab element should have the following attributes:
    //    - aria-controls
    //    - id
    //    - role
    // To give a tab an dynamic id, use string interpolation to add the index value
    // like this: `tab-${index}`
    // Check if the tab is the current tab by comparing the index with the currentTab value
    // Todo: If the tab is the current tab, set or change the following attributes:
    //    - aria-selected
    //    - tabindex
    //    - focus the tab
    // Todo: If the tab is not the current tab, set or change the following attributes:
    //    - aria-selected
    //    - tabindex
  });

  panels.value.forEach((panel, index) => {
    // Todo: Add the necessary attributes to the panel element
    // The attributes should be added dinamically using the setAttribute method
    // The panel element should have the following attributes:
    //    - aria-labelledby ( this should be the id of the tab element)
    //    - id
    //    - role
    // To give a panel an dynamic id, use string interpolation to add the index value
    // like this: `panel-${index}`
    // Check if the panel is the current panel by comparing the index with the currentTab value
    // Todo: If the panel is the current panel, set or change the following attributes:
    //    - aria-hidden
    //    - remove the hidden class
    // Todo: If the panel is not the current panel, set or change the following attributes:
    //    - aria-hidden
    //    - add the hidden class
  });
});

const handleKeyDown = (event: KeyboardEvent) => {
  // Todo: Add the necessary keyboard navigation to the tabs
  // Listens for the ArrowRight and ArrowLeft keys to navigate between tabs
  // Prevents the default behavior of the arrow keys
  // Updates the currentTab value based on the key pressed
};

const selectTab = (index: number) => {
  currentTab.value = index;
};
</script>

<template>
  <div @keydown="handleKeyDown">
    <!-- Todo: Add the necessary role attribute to ul element to make it a tab list -->
    <ul class="isolate flex -space-x-0.5">
      <slot name="tabs" :selectTab="selectTab"></slot>
    </ul>

    <div>
      <slot name="panels"></slot>
    </div>
  </div>
</template>
