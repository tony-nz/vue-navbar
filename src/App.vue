<template>
  <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 h-screen">
    <NavBar :menu="menuConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const menuConfig = [
      {
        label: "Home",
        link: "/",
      },
      {
        label: "About",
        link: "/about",
      },
      {
        label: "Contact",
        link: "/contact",
      },
      {
        label: "Dropdown",
        link: "/dropdown",
        type: "list",
        children: [
          {
            label: "Submenu 1",
            description: "Submenu 1 description",
            link: "/submenu1",
          },
          {
            label: "Submenu 2",
            description: "Submenu 2 description",
            link: "/submenu2",
          },
        ],
      },
      {
        label: "Grid Dropdown",
        link: "/griddropdown",
        type: "grid",
        children: [
          {
            label: "Submenu 1",
            description: "Submenu 1 description",
            link: "/submenu1",
          },
          {
            label: "Submenu 2",
            description: "Submenu 2 description",
            link: "/submenu2",
          },
          {
            label: "Submenu 3",
            description: "Submenu 3 description",
            link: "/submenu3",
          },
          {
            label: "Submenu 4",
            description: "Submenu 4 description",
            link: "/submenu4",
          },
        ],
      },
    ];
    return { menuConfig };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
