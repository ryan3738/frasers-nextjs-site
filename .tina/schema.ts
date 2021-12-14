
import { defineSchema } from "@tinacms/cli";
import type { TinaField, TinaTemplate } from "@tinacms/cli";

const modifierSchema: TinaField = {
  type: "object",
    label: "Modifiers",
      name: "modifiers",
        ui: {
    component: "groupList",
              },
  list: true,
    fields: [
      {
        type: "string",
        label: "Name",
        name: "name",
      },
      {
        type: "number",
        label: "Price",
        name: "price",
      }
    ]
}

const imagesSchema: TinaField = {
  type: "object",
  label: "Images",
  name: "images",
  ui: {
    component: "groupList",
  },
  list: true,
  fields: [
    {
      type: "string",
      label: "Descriptive Image Alt Text",
      name: "name",
      required: true,
    },
    {
      type: "string",
      label: "src",
      name: "src",
      required: true,
    }
  ]
}

const menuItemSchema: TinaField = {
  type: "object",
  label: "Menu Items",
  name: "items",
  ui: {
    component: "groupList",
  },
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "number",
      label: "Price",
      name: "price",
    },
    {
      type: "string",
      label: "Dietary Preferences",
      name: "dietary",
      options: ["vegan", "vegetarian", "gluten-free", "pescatarian"],
      list: true,
    },
    modifierSchema,
    {
      type: "boolean",
      label: "Available",
      name: "available",
    },
    imagesSchema,
  ]
}



const menuSectionSchema: TinaField = {
  type: "object",
  label: "Sections",
  name: "sections",
  ui: {
    component: "groupList",
  },
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
    },
    menuItemSchema,
  ]
}

const menuSchema: TinaField = {
  type: "object",
  label: 'Menus',
  name: 'menus',
  ui: {
    component: "groupList",
  },
  list: true,
  fields: [
    {
      type: "string",
      label: "Name of Menu",
      name: "name",
    },
    {
      type: "string",
      label: "Label",
      name: "label",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
    },
    menuSectionSchema,
  ],
}

export default defineSchema({
  collections: [
    {
      label: "Menu Collection",
      name: "menuCollection",
      path: "content/menus",
      fields: [
        menuSchema,
      ],
    },
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea"
          },
        },
        ],
    },
    // {
    //   label: "Global",
    //   name: "global",
    //   path: "content/global",
    //   fields: [
    //     {
    //       type: "object",
    //       label: "Header",
    //       name: "header",
    //       fields: [
    //         iconSchema,
    //         {
    //           type: "string",
    //           label: "Color",
    //           name: "color",
    //           options: [
    //             { label: "Default", value: "default" },
    //             { label: "Primary", value: "primary" },
    //           ],
    //         },
    //         {
    //           type: "object",
    //           label: "Nav Links",
    //           name: "nav",
    //           list: true,
    //           ui: {
    //             defaultItem: {
    //               href: "home",
    //               label: "Home",
    //             },
    //           },
    //           fields: [
    //             {
    //               type: "string",
    //               label: "Link",
    //               name: "href",
    //             },
    //             {
    //               type: "string",
    //               label: "Label",
    //               name: "label",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       type: "object",
    //       label: "Footer",
    //       name: "footer",
    //       fields: [
    //         {
    //           type: "string",
    //           label: "Color",
    //           name: "color",
    //           options: [
    //             { label: "Default", value: "default" },
    //             { label: "Primary", value: "primary" },
    //           ],
    //         },
    //         {
    //           type: "object",
    //           label: "Social Links",
    //           name: "social",
    //           fields: [
    //             {
    //               type: "string",
    //               label: "Facebook",
    //               name: "facebook",
    //             },
    //             {
    //               type: "string",
    //               label: "Twitter",
    //               name: "twitter",
    //             },
    //             {
    //               type: "string",
    //               label: "Instagram",
    //               name: "instagram",
    //             },
    //             {
    //               type: "string",
    //               label: "Github",
    //               name: "github",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       type: "object",
    //       label: "Theme",
    //       name: "theme",
    //       fields: [
    //         {
    //           type: "string",
    //           label: "Primary Color",
    //           name: "color",
    //           options: [
    //             {
    //               label: "Blue",
    //               value: "blue",
    //             },
    //             {
    //               label: "Teal",
    //               value: "teal",
    //             },
    //             {
    //               label: "Green",
    //               value: "green",
    //             },
    //             {
    //               label: "Red",
    //               value: "red",
    //             },
    //             {
    //               label: "Pink",
    //               value: "pink",
    //             },
    //             {
    //               label: "Purple",
    //               value: "purple",
    //             },
    //             {
    //               label: "Orange",
    //               value: "orange",
    //             },
    //             {
    //               label: "Yellow",
    //               value: "yellow",
    //             },
    //           ],
    //         },
    //         {
    //           type: "string",
    //           name: "font",
    //           label: "Font Family",
    //           options: [
    //             {
    //               label: "System Sans",
    //               value: "sans",
    //             },
    //             {
    //               label: "Nunito",
    //               value: "nunito",
    //             },
    //             {
    //               label: "Lato",
    //               value: "lato",
    //             },
    //           ],
    //         },
    //         {
    //           type: "string",
    //           name: "icon",
    //           label: "Icon Set",
    //           options: [
    //             {
    //               label: "Boxicons",
    //               value: "boxicon",
    //             },
    //             {
    //               label: "Heroicons",
    //               value: "heroicon",
    //             },
    //           ],
    //         },
    //         {
    //           type: "string",
    //           name: "darkMode",
    //           label: "Dark Mode",
    //           options: [
    //             {
    //               label: "System",
    //               value: "system",
    //             },
    //             {
    //               label: "Light",
    //               value: "light",
    //             },
    //             {
    //               label: "Dark",
    //               value: "dark",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
});

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
