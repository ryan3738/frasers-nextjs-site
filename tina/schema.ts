
import { footerSchema, metaSchema, navigationSchema, themeSchema } from "./Global";
import { menuSectionSchema } from "./Menu";
import { imageSchema } from "./General";
import { addressSchema, hoursSchema } from "./BusinessInfo";
import { Schema } from "tinacms";


export const schema: Schema = {
  collections: [
    {
      label: "Gallery Grid",
      name: "galleryGrid",
      path: "content/gallery",
      format: "json",
      fields: [
        {
          type: "object",
          label: "Images",
          name: "images",
          // ui: {
          //   component: "groupList",
          // },
          list: true,
          fields: [
            {
              type: "string",
              label: "Image Alt Text",
              name: "alt",
              // required: true,
            },
            {
              name: 'src',
              type: 'image',
              label: 'Menu Item Image',
            },
            {
              type: "string",
              label: "Format",
              name: "format",
              options: ["small", "big", "vertical", "horizontal"],
            },
          ]
        }
      ]
    },
    {
      label: "Business Info",
      name: "businessInfo",
      path: "content/info",
      format: 'json',
      fields: [
        {
          type: "string",
          label: "Business Name",
          name: "name",
        },
        {
          type: "string",
          label: "Phone Number",
          name: "phoneNumber",
        },
        {
          type: "string",
          label: "Email",
          name: "email",
        },
        addressSchema,
        hoursSchema,
      ],
    },
    {
      label: "Menu",
      name: "menu",
      path: "content/menus",
      format: "json",
      fields: [
        {
          type: "string",
          label: "Menu Title",
          name: "title",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: "string",
          label: "Notes",
          name: "notes",
          isBody: true,
          ui: {
            component: "markdown"
          },
        },
        {
          type: "boolean",
          label: "Available",
          name: "available",
        },
        menuSectionSchema,
      ],
    },
    {
      label: "Double Feature",
      name: "doubleFeature",
      path: "content/doubleFeature",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Subtitle",
          name: "subtitle",
        },
        imageSchema,
        {
          type: "string",
          label: "Element ID",
          name: "elementId",
        },
        {
          type: "string",
          label: "Double Feature Body",
          name: "body",
          isBody: true,
          ui: {
            component: "markdown"
          },
        },

      ]
    },
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      format: 'mdx',
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
    {
      label: "Global",
      name: "global",
      path: "content/global",
      format: "json",
      fields: [
        navigationSchema,
        themeSchema,
        metaSchema,
        footerSchema,
      ],
    },
  ],
};