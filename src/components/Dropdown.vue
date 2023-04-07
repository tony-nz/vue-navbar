<template>
  <div>
    <button
      class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      @click="isOpen = !isOpen"
    >
      <span>{{ item.label }}</span>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen }"
        class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen"
      class="absolute right-0 w-full mt-2 origin-top-right z-30"
      :class="{
        'rounded-md shadow-lg md:w-48': item.type === 'list',
        'md:max-w-screen-sm md:w-screen': item.type === 'grid',
      }"
    >
      <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
        <div
          :class="{
            'grid grid-cols-1 md:grid-cols-2 gap-4': item.type === 'grid',
          }"
        >
          <div v-for="child in item.children" :key="child.label">
            <a
              v-if="item.type === 'list'"
              :href="child.link"
              class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 transform rounded-md dark-mode:text-gray-200 hover:bg-gray-100 dark-mode:hover:bg-gray-700"
              >{{ child.label }}</a
            >
            <a
              v-else-if="item.type === 'grid'"
              class="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              <div class="bg-teal-500 text-white rounded-lg p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="md:h-6 md:w-6 h-4 w-4"
                >
                  <path
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <div class="ml-3">
                <p class="font-semibold">{{ child.label }}</p>
                <p class="text-sm">{{ child.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Dropdown",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
});
</script>
