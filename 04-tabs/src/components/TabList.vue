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
  if (!panels?.value) return;
  if (tabs.value.length !== panels?.value.length) {
    throw new Error("The number of tabs and panels must be equal.");
  }

  tabs.value.forEach((tab, index) => {
  if (index !== undefined) {
    tab.setAttribute("aria-controls", `panel-${index}`);
    tab.setAttribute("id", `tab-${index}`);
    tab.setAttribute("role", `tab`);
    if (index === currentTab?.value) {
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("tabindex", `0`);
      //tabindex 0 -> für die Tastatur über Fokus erreichbar
      tab.setAttribute("focus", `tab`);
      tab.focus();
    } else {
      tab.setAttribute("aria-selected", "false");
      tab.setAttribute("tabindex", "-1");
        //tabindex -1 -> für die Tastatur über Fokus nicht erreichbar
    }
  }

  });

  panels.value.forEach((panel, index) => {
    panel.setAttribute("aria-labelledby", `tab-${index}`);
    panel.setAttribute("id", `panel-${index}`);
    panel.setAttribute("role", `tabpanel`);

    if (index === currentTab?.value) {
      panel.setAttribute("aria-hidden", "false");
      panel.classList.remove("hidden");
    } else {
      panel.setAttribute("aria-hidden", "true");
      panel.classList.add("hidden");
    }
  });
});

const handleKeyDown = (event: KeyboardEvent) => {
  // Todo: Add the necessary keyboard navigation to the tabs
  // Listens for the ArrowRight and ArrowLeft keys to navigate between tabs
  // Prevents the default behavior of the arrow keys
  // Updates the currentTab value based on the key pressed
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    const newIndex = currentTab.value + (event.key === "ArrowRight" ? 1 : -1);
    const tabsLength = tabs?.value.length ?? 0;
    const finalIndex = (newIndex + tabsLength) % tabsLength; // Wrap around if reaching the end
    currentTab.value = finalIndex;
  }
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
