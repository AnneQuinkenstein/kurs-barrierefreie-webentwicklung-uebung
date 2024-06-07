<script setup lang="ts">
import TabList from "./components/TabList.vue";
import TabItem from "./components/TabItem.vue";
import TabPanel from "./components/TabPanel.vue";
</script>

<template>
  <div class="mx-auto mt-20 max-w-lg">
    <tab-list>
      <template #tabs="{ selectTab }">
        <tab-item title="Tab 1" @select="selectTab" />
        <tab-item title="Tab 2" @select="selectTab" />
        <tab-item title="Tab 3" @select="selectTab" />
      </template>

      <template #panels>
        <tab-panel>
          <h2>Tab 1</h2>
          <p>Content for Tab 1</p>

          <button
            type="button"
            class="mt-4 bg-blue-500 px-4 py-2 text-white outline-none ring-blue-600 ring-offset-2 focus-within:ring-2 focus-within:ring-offset-white"
          >
            Test
          </button>
        </tab-panel>

        <tab-panel>
          <h2>Tab 2</h2>
          <p>Content for Tab 2</p>
          <button
            type="button"
            class="mt-4 bg-blue-500 px-4 py-2 text-white outline-none ring-blue-600 ring-offset-2 focus-within:ring-2 focus-within:ring-offset-white"
          >
            Test
          </button>
        </tab-panel>

        <tab-panel>
          <h2>Tab 3</h2>
          <p>Content for Tab 3</p>
        </tab-panel>
      </template>
    </tab-list>

    <button
      type="button"
      class="mt-4 bg-blue-500 px-4 py-2 text-white outline-none ring-blue-600 ring-offset-2 focus-within:ring-2 focus-within:ring-offset-white"
    >
      Submit
    </button>
  </div>
</template>
