<template>
  <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 h-screen">
    <NavBar :menu="menuConfig" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
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
            link: "/submenu1",
          },
          {
            label: "Submenu 2",
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
            link: "/submenu1",
          },
          {
            label: "Submenu 2",
            link: "/submenu2",
          },
          {
            label: "Submenu 3",
            link: "/submenu3",
          },
          {
            label: "Submenu 4",
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
  text-align: center;
  color: #2c3e50;
}
</style>
