"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("@tinacms/cli");
var hoursSchema = {
    type: "object",
    label: "Hours",
    name: "hours",
    ui: {
        component: "groupList",
    },
    list: true,
    fields: [
        {
            type: "string",
            name: "day",
            label: "Day",
        },
        {
            type: "string",
            name: 'hours',
            label: 'Hours',
        }
    ]
};
var modifierSchema = {
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
};
var imagesSchema = {
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
};
var menuItemSchema = {
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
};
var menuSectionSchema = {
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
            required: true
        },
        menuItemSchema,
    ]
};
var addressSchema = {
    type: "object",
    label: 'Address',
    name: 'address',
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
        },
        {
            type: "string",
            label: "Street",
            name: "street",
        },
        {
            type: "string",
            label: "street2",
            name: "street2",
        },
        {
            type: "string",
            label: "City",
            name: "city",
        },
        {
            type: "string",
            label: "State",
            name: "region",
        },
        {
            type: "string",
            label: "Zip",
            name: "zip",
        },
        {
            type: "string",
            label: "Directions URL",
            name: "directions",
        }
    ],
};
exports.default = (0, cli_1.defineSchema)({
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
                    label: "Name of Menu",
                    name: "name",
                    required: true,
                },
                {
                    type: "string",
                    label: "Description",
                    name: "description",
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
                    required: true,
                },
                {
                    type: "string",
                    label: "Subtitle",
                    name: "subtitle",
                },
                {
                    src: src
                }
            ]
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
