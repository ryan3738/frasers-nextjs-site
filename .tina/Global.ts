import { TinaField } from "@tinacms/cli"

const iconSchema: TinaField = {
  type: "object",
  label: "Icon",
  name: "icon",
  fields: [
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        {
          label: "Primary",
          value: "primary",
        },
        {
          label: "Blue",
          value: "blue",
        },
        {
          label: "Teal",
          value: "teal",
        },
        {
          label: "Green",
          value: "green",
        },
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Pink",
          value: "pink",
        },
        {
          label: "Purple",
          value: "purple",
        },
        {
          label: "Orange",
          value: "orange",
        },
        {
          label: "Yellow",
          value: "yellow",
        },
      ],
    },
    {
      name: "style",
      label: "Style",
      type: "string",
      options: [
        {
          label: "Circle",
          value: "circle",
        },
        {
          label: "Float",
          value: "float",
        },
      ],
    },
    {
      type: "string",
      label: "Icon",
      name: "name",
      options: [
        {
          label: "Random",
          value: "",
        },
        {
          label: "Aperture",
          value: "aperture",
        },
        {
          label: "Code Block",
          value: "code",
        },
        {
          label: "Like",
          value: "like",
        },
        {
          label: "Map",
          value: "map",
        },
        {
          label: "Palette",
          value: "palette",
        },
        {
          label: "Pie Chart",
          value: "chart",
        },
        {
          label: "Pin",
          value: "pin",
        },
        {
          label: "Shield",
          value: "shield",
        },
        {
          label: "Setting Sliders",
          value: "settings",
        },
        {
          label: "Store",
          value: "store",
        },
        {
          label: "Tennis Ball",
          value: "ball",
        },
        {
          label: "Test Tube",
          value: "tube",
        },
        {
          label: "Trophy",
          value: "trophy",
        },
        {
          label: "User",
          value: "user",
        },
        {
          label: "Beer",
          value: "beer",
        },
        {
          label: "Chat",
          value: "chat",
        },
        {
          label: "Cloud",
          value: "cloud",
        },
        {
          label: "Coffee",
          value: "coffee",
        },
        {
          label: "World",
          value: "world",
        },
        {
          label: "Tina",
          value: "tina",
        },
      ],
    },
  ],
};

const navigationSchema: TinaField = {
  type: "object",
  label: "Navigation",
  name: "navigation",
  ui: {
    defaultItem: {
      href: "home",
      label: "Home",
    },
  },
  fields: [
    {
      type: "string",
      label: "Link",
      name: "href",
    },
    {
      type: "string",
      label: "Label",
      name: "label",
    },
    {
      type: "boolean",
      label: "Header",
      name: "header",
      ui: {
        default: true,
      }
    },
    {
      type: "boolean",
      label: "Burger",
      name: "burger",
      ui: {
        default: true,
      }
    },
    {
      type: "boolean",
      label: "Footer",
      name: "footer",
      ui: {
        default: true,
      }
    },
  ]
}

const headerSchema: TinaField = {
  type: "object",
  label: "Header",
  name: "header",
  fields: [
    iconSchema,
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Primary", value: "primary" },
      ],
    },
    {
      type: "object",
      label: "Nav Links",
      name: "nav",
      list: true,
      ui: {
        defaultItem: {
          href: "home",
          label: "Home",
        },
      },
      fields: [
        {
          type: "string",
          label: "Link",
          name: "href",
        },
        {
          type: "string",
          label: "Label",
          name: "label",
        },
      ],
    },
  ],
}

const footerSchema: TinaField = {
  type: "object",
  label: "Footer",
  name: "footer",
  fields: [
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Primary", value: "primary" },
      ],
    },
    {
      type: "object",
      label: "Social Links",
      name: "social",
      fields: [
        {
          type: "string",
          label: "Facebook",
          name: "facebook",
        },
        {
          type: "string",
          label: "Twitter",
          name: "twitter",
        },
        {
          type: "string",
          label: "Instagram",
          name: "instagram",
        },
        {
          type: "string",
          label: "Github",
          name: "github",
        },
      ],
    },
  ],
}

const themeSchema: TinaField = {
  type: "object",
  label: "Theme",
  name: "theme",
  fields: [
    {
      type: "string",
      label: "Primary Color",
      name: "color",
      options: [
        {
          label: "Blue",
          value: "blue",
        },
        {
          label: "Teal",
          value: "teal",
        },
        {
          label: "Green",
          value: "green",
        },
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Pink",
          value: "pink",
        },
        {
          label: "Purple",
          value: "purple",
        },
        {
          label: "Orange",
          value: "orange",
        },
        {
          label: "Yellow",
          value: "yellow",
        },
      ],
    },
    {
      type: "string",
      name: "font",
      label: "Font Family",
      options: [
        {
          label: "System Sans",
          value: "sans",
        },
        {
          label: "Nunito",
          value: "nunito",
        },
        {
          label: "Lato",
          value: "lato",
        },
      ],
    },
    {
      type: "string",
      name: "icon",
      label: "Icon Set",
      options: [
        {
          label: "Boxicons",
          value: "boxicon",
        },
        {
          label: "Heroicons",
          value: "heroicon",
        },
      ],
    },
    {
      type: "string",
      name: "darkMode",
      label: "Dark Mode",
      options: [
        {
          label: "System",
          value: "system",
        },
        {
          label: "Light",
          value: "light",
        },
        {
          label: "Dark",
          value: "dark",
        },
      ],
    },
  ],
}

export { headerSchema, footerSchema, themeSchema, navigationSchema };