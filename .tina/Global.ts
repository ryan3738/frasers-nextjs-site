import { TinaField } from "@tinacms/cli"

const navigationSchema: TinaField = {
  type: "object",
  label: "Navigation",
  name: "navigation",
  list: true,
  ui: {
    defaultItem: {
      href: "/",
      label: "Home",
    },
    component: "groupList",
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
      description: 'Check to display this link in the header',
      ui: {
        component: 'toggle',
        default: true,
      },
    },
    {
      type: "boolean",
      label: "Burger",
      name: "burger",
      description: 'Check to display this link in the burger menu',
      ui: {
        default: true,
      },
    },
    {
      type: "boolean",
      label: "Footer",
      name: "footer",
      description: 'Check to display this link in the footer',
      ui: {
        default: true,
      },
    },
  ]
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
      type: 'string',
      name: "color",
      label: "Primary Color",
      ui: {
        component: 'color',
      }
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

export { footerSchema, themeSchema, navigationSchema };