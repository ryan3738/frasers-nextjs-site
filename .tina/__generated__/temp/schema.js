"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("@tinacms/cli");
var menuItemSchema = {
    type: "object",
    label: "Item",
    name: "item",
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
        {
            type: "object",
            label: "Modifier",
            name: "modifier",
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
        },
        {
            type: "boolean",
            label: "Available",
            name: "available",
        }
    ]
};
exports.default = (0, cli_1.defineSchema)({
    collections: [
        {
            label: "Menus",
            name: "menus",
            path: "content/menus",
            fields: [{
                    type: "object",
                    label: "Menu",
                    name: "menu",
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
                            label: "Description",
                            name: "description",
                        },
                        {
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
                                {
                                    type: "object",
                                    label: "Item",
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
                                        {
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
                                        },
                                        {
                                            type: "boolean",
                                            label: "Available",
                                            name: "available",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]
}, {
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
