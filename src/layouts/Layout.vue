<template>
  <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 h-screen">
    <NavBar :menu="menuConfig" />
    <main
      class="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-white rounded-md m-4"
    >
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menuConfig } from "@/config/MainMenuConfig";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "Layout",
  components: {
    NavBar,
  },
  setup() {
    return { menuConfig };
  },
});
</script>
