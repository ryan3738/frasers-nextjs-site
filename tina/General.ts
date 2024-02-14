import { TinaField } from "tinacms";

const imageSchema: TinaField = {
  type: "object",
  label: "Image",
  name: "image",
  fields: [
    {
      type: "image",
      label: "Image Source",
      name: "src",
    },
    {
      type: "string",
      label: "Image Alt Text",
      name: "alt",
      required: true,
    },
  ]
}

export { imageSchema };