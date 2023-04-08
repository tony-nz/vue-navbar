export const menuConfig = [
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
