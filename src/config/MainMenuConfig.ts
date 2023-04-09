export const menuConfig = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: "/icons/Compiling.svg",
  },
  {
    label: "About",
    link: "/about",
    icon: "/icons/Compiling.svg",
  },
  {
    label: "Contact",
    link: "/contact",
    icon: "/icons/Compiling.svg",
  },
  {
    label: "Dropdown",
    link: "/dropdown",
    icon: "/icons/Compiling.svg",
    type: "list",
    children: [
      {
        label: "Submenu 1",
        icon: "/icons/Compiling.svg",
        description: "Submenu 1 description",
        link: "/dropdown/submenu1",
      },
      {
        label: "Submenu 2",
        icon: "/icons/Compiling.svg",
        description: "Submenu 2 description",
        link: "/dropdown/submenu2",
      },
    ],
  },
  {
    label: "Grid Dropdown",
    icon: "/icons/Compiling.svg",
    link: "/grid",
    type: "grid",
    children: [
      {
        label: "Submenu 3",
        icon: "/icons/Compiling.svg",
        description: "Submenu 3 description",
        link: "/grid/submenu3",
      },
      {
        label: "Submenu 4",
        icon: "/icons/Compiling.svg",
        description: "Submenu 4 description",
        link: "/grid/submenu4",
      },
      {
        label: "Submenu 5",
        icon: "/icons/Compiling.svg",
        description: "Submenu 5 description",
        link: "/grid/submenu5",
      },
      {
        label: "Submenu 6",
        icon: "/icons/Compiling.svg",
        description: "Submenu 6 description",
        link: "/grid/submenu6",
      },
    ],
  },
];
