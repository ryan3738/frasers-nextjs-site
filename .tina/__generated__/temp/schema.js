"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("@tinacms/cli");
var modifierSchema = {
    type: "object",
    label: "Modifier",
    name: "modifier",
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
};
var imageSchema = {
    type: "object",
    label: "Image",
    name: "image",
    ui: {
        component: "groupList",
    },
    list: true,
    fields: [
        {
            type: "string",
            label: "Image Alt Text",
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
};
var menuItemSchema = {
    type: "object",
    label: "Menu Item",
    name: "item",
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
        imageSchema,
    ]
};
var menuSectionSchema = {
    type: "object",
    label: "Sections",
    name: "section",
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
};
var menuSchema = {
    type: "object",
    label: 'Menu',
    name: 'menu',
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
};
exports.default = (0, cli_1.defineSchema)({
    collections: [
        {
            label: "Menus",
            name: "menus",
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
var iconSchema = {
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
