// .tina/config.ts
import { defineConfig } from "tinacms";

// .tina/Global.ts
var metaSchema = {
  type: "object",
  label: "Meta Tags",
  name: "meta",
  fields: [
    {
      name: "title",
      label: "Title",
      description: "Title of page",
      type: "string"
    },
    {
      name: "description",
      label: "Description",
      description: "Description of the page",
      type: "string"
    },
    {
      name: "keywords",
      label: "Keywords",
      description: "Enter meta tags",
      type: "string",
      list: true
    },
    {
      name: "cardImage",
      label: "Social Card Image",
      description: "Square image to be used for social cards 512x512 or larger",
      type: "image"
    }
  ]
};
var navigationSchema = {
  label: "Navigation",
  name: "navigation",
  type: "object",
  fields: [
    {
      label: "links",
      name: "links",
      type: "object",
      list: true,
      // ui: {
      //   defaultItem: {
      //     href: "/",
      //     label: "Home",
      //   },
      //   component: "groupList",
      // },
      fields: [
        {
          type: "string",
          label: "Link",
          name: "href"
        },
        {
          type: "string",
          label: "Label",
          name: "label"
        },
        {
          type: "boolean",
          label: "Header",
          name: "header",
          description: "Check to display this link in the header",
          ui: {
            component: "toggle"
            // default: true,
          }
        },
        {
          type: "boolean",
          label: "Burger",
          name: "burger",
          description: "Check to display this link in the burger menu"
          // ui: {
          // default: true,
          // },
        },
        {
          type: "boolean",
          label: "Footer",
          name: "footer",
          description: "Check to display this link in the footer"
          // ui: {
          // default: true,
          // },
        }
      ]
    }
  ]
};
var footerSchema = {
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
        { label: "Primary", value: "primary" }
      ]
    },
    {
      type: "object",
      label: "Social Links",
      name: "social",
      fields: [
        {
          type: "string",
          label: "Facebook",
          name: "facebook"
        },
        {
          type: "string",
          label: "Twitter",
          name: "twitter"
        },
        {
          type: "string",
          label: "Instagram",
          name: "instagram"
        },
        {
          type: "string",
          label: "Github",
          name: "github"
        }
      ]
    }
  ]
};
var themeSchema = {
  type: "object",
  label: "Theme",
  name: "theme",
  fields: [
    {
      type: "string",
      name: "color",
      label: "Primary Color",
      ui: {
        component: "color"
      }
    },
    {
      type: "string",
      name: "darkMode",
      label: "Dark Mode",
      options: [
        {
          label: "System",
          value: "system"
        },
        {
          label: "Light",
          value: "light"
        },
        {
          label: "Dark",
          value: "dark"
        }
      ]
    }
  ]
};

// .tina/Menu.ts
var imagesSchema = {
  type: "object",
  label: "Images",
  name: "images",
  ui: {
    component: "groupList"
  },
  list: true,
  fields: [
    {
      type: "string",
      label: "Image Alt Text",
      name: "alt",
      required: true
    },
    {
      name: "image",
      type: "image",
      label: "Menu Item Image"
    }
  ]
};
var modifierSchema = {
  type: "object",
  label: "Modifiers",
  name: "modifiers",
  ui: {
    component: "groupList"
  },
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name"
    },
    {
      type: "number",
      label: "Price",
      name: "price"
    }
  ]
};
var menuItemSchema = {
  label: "Menu Items",
  name: "items",
  // ui: {
  //   component: "groupList",
  // },
  type: "object",
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      required: true
    },
    {
      type: "string",
      label: "Description",
      name: "description"
      // ui: {
      //   component: "textarea",
      // },
    },
    {
      type: "number",
      label: "Price",
      name: "price"
    },
    {
      type: "string",
      label: "Dietary Preferences",
      name: "dietary",
      options: ["vegan", "vegetarian", "gluten-free", "pescatarian"],
      list: true
    },
    modifierSchema,
    {
      type: "boolean",
      label: "Available",
      name: "available"
    },
    imagesSchema
  ]
};
var menuSectionSchema = {
  type: "object",
  label: "Sections",
  name: "sections",
  // ui: {
  //   component: "groupList",
  // },
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name"
    },
    {
      type: "string",
      label: "Description",
      name: "description"
    },
    {
      type: "string",
      label: "Notes",
      name: "notes",
      isBody: true
      // ui: {
      //   component: "markdown"
      // },
    },
    menuItemSchema
  ]
};

// .tina/General.ts
var imageSchema = {
  type: "object",
  label: "Image",
  name: "image",
  fields: [
    {
      type: "image",
      label: "Image Source",
      name: "src"
    },
    {
      type: "string",
      label: "Image Alt Text",
      name: "alt",
      required: true
    }
  ]
};

// .tina/BusinessInfo.ts
var hoursSchema = {
  type: "object",
  label: "Hours",
  name: "hours",
  ui: {
    component: "groupList"
  },
  list: true,
  fields: [
    {
      type: "string",
      name: "day",
      label: "Day"
    },
    {
      type: "string",
      name: "hours",
      label: "Hours"
    }
  ]
};
var addressSchema = {
  type: "object",
  label: "Address",
  name: "address",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      required: true
    },
    {
      type: "string",
      label: "Description",
      name: "description"
    },
    {
      type: "string",
      label: "Street",
      name: "street"
    },
    {
      type: "string",
      label: "street2",
      name: "street2"
    },
    {
      type: "string",
      label: "City",
      name: "city"
    },
    {
      type: "string",
      label: "State",
      name: "region"
    },
    {
      type: "string",
      label: "Zip",
      name: "zip"
    },
    {
      type: "string",
      label: "Directions URL",
      name: "directions"
    }
  ]
};

// .tina/schema.ts
var schema = {
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
              required: true
            },
            {
              name: "src",
              type: "image",
              label: "Menu Item Image"
            },
            {
              type: "string",
              label: "Format",
              name: "format",
              options: ["small", "big", "vertical", "horizontal"]
            }
          ]
        }
      ]
    },
    {
      label: "Business Info",
      name: "businessInfo",
      path: "content/info",
      format: "json",
      fields: [
        {
          type: "string",
          label: "Business Name",
          name: "name"
        },
        {
          type: "string",
          label: "Phone Number",
          name: "phoneNumber"
        },
        {
          type: "string",
          label: "Email",
          name: "email"
        },
        addressSchema,
        hoursSchema
      ]
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
          name: "title"
        },
        {
          type: "string",
          label: "Description",
          name: "description"
        },
        {
          type: "string",
          label: "Notes",
          name: "notes",
          isBody: true,
          ui: {
            component: "markdown"
          }
        },
        {
          type: "boolean",
          label: "Available",
          name: "available"
        },
        menuSectionSchema
      ]
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
          name: "title"
        },
        {
          type: "string",
          label: "Subtitle",
          name: "subtitle"
        },
        imageSchema,
        {
          type: "string",
          label: "Element ID",
          name: "elementId"
        },
        {
          type: "string",
          label: "Double Feature Body",
          name: "body",
          isBody: true,
          ui: {
            component: "markdown"
          }
        }
      ]
    },
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea"
          }
        }
      ]
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
        footerSchema
      ]
    }
  ]
};

// .tina/config.ts
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || "dev";
var token = process.env.NEXT_PUBLIC_TINA_GITHUB_TOKEN;
var clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
var indexerToken = process.env.NEXT_PUBLIC_TINA_INDEXER_TOKEN;
var config_default = defineConfig({
  branch,
  token,
  clientId,
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  schema,
  search: {
    tina: {
      indexerToken,
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  media: {
    // Media config
    // tina: {
    //   // Repo-based Media config
    // },
    // function that loads  the media store
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    }
  }
});
export {
  config_default as default
};
