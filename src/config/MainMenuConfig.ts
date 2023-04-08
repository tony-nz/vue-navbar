export const menuConfig = [
  {
    label: "Dashboard",
    link: "/dashboard",
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
    type: "grid",
    children: [
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
      {
        label: "Submenu 5",
        description: "Submenu 5 description",
        link: "/submenu5",
      },
      {
        label: "Submenu 6",
        description: "Submenu 6 description",
        link: "/submenu6",
      },
    ],
  },
];
