import { TinaField } from "@tinacms/cli"

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
      label: "Image Alt Text",
      name: "alt",
      required: true,
    },
    {
      name: 'image',
      type: 'image',
      label: 'Menu Item Image',
    }
  ]
}

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
      required: true,
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
    menuItemSchema,
  ]
}

export { menuSectionSchema, menuItemSchema, modifierSchema }