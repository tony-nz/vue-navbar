<template>
  <div
    class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800"
  >
    <div
      class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
    >
      <div class="flex flex-row items-center justify-between p-4">
        <a
          href="#"
          class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >Vue Navbar</a
        >
        <button
          class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
          @click="isOpen = !isOpen"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path
              v-show="!isOpen"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
            <path
              v-show="isOpen"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
      >
        <template v-for="item in menu" :key="item.label">
          <router-link
            v-if="!item.children && !item.external"
            v-slot="{ isActive, isExactActive, navigate }"
            :to="item.link"
            custom
          >
            <button
              @click="navigate"
              :class="[
                defaultClass,
                (isActive || isExactActive) && activeClass,
              ]"
            >
              <div class="flex flex-row items-center justify-center">
                <div v-if="item.icon" class="mr-2">
                  <inline-svg :src="item.icon" class="h-4 w-4" />
                </div>
                {{ item.label }}
              </div>
            </button>
          </router-link>
          <a
            v-if="item.external"
            :href="item.link"
            target="_blank"
            :class="defaultClass"
          >
            <div class="flex flex-row items-center justify-center">
              <div v-if="item.icon" :class="{ 'mr-2': item.label.length > 0 }">
                <inline-svg :src="item.icon" class="h-4 w-4" />
              </div>
              {{ item.label }}
            </div>
          </a>
          <div v-if="item.children" class="relative">
            <Dropdown :activeClass="activeClass" :item="item" />
          </div>
        </template>
      </nav>
    </div>
  </div>
  <!-- mobile menu -->
  <nav class="md:hidden sm:absolute right-0 w-full origin-top-right z-30">
    <div
      class="absolute z-30 flex flex-col items-center justify-center w-full px-2 py-4 space-y-2 text-center bg-gray-100 dark-mode:bg-gray-800"
      :class="{ block: isOpen, hidden: !isOpen }"
    >
      <template v-for="item in menu" :key="item.label">
        <router-link
          v-if="!item.children && !item.external"
          v-slot="{ isActive, isExactActive, navigate }"
          :to="item.link"
          custom
        >
          <button
            @click="navigate"
            :class="[defaultClass, (isActive || isExactActive) && activeClass]"
          >
            <div class="flex flex-row items-center justify-center">
              <div v-if="item.icon" class="mr-2">
                <inline-svg :src="item.icon" class="h-4 w-4" />
              </div>
              {{ item.label }}
            </div>
          </button>
        </router-link>
        <a v-else :href="item.link" target="_blank" :class="defaultClass">
          <div class="flex flex-row items-center justify-center">
            <div v-if="item.icon" :class="{ 'mr-2': item.label.length > 0 }">
              <inline-svg :src="item.icon" class="h-4 w-4" />
            </div>
            {{ item.label }}
          </div>
        </a>
        <div v-if="item.children" class="relative w-full">
          <Dropdown :activeClass="activeClass" :item="item" />
        </div>
      </template>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown from "./Dropdown.vue";

export default defineComponent({
  name: "NarBar",
  components: {
    Dropdown,
  },
  props: {
    activeClass: {
      type: String,
      default: "text-gray-900 bg-gray-200",
    },
    defaultClass: {
      type: String,
      default:
        "px-4 py-2 mt-2 text-sm font-semibold rounded-md dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
});
</script>
