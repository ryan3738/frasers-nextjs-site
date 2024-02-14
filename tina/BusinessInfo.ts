import { TinaField } from "tinacms";

const hoursSchema: TinaField = {
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
}

const addressSchema: TinaField = {
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
}

export { hoursSchema, addressSchema };