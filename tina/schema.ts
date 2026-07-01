import {
  footerSchema,
  metaSchema,
  navigationSchema,
  themeSchema
} from './Global';
import { menuSectionSchema } from './Menu';
import { imageSchema } from './General';
import { addressSchema, hoursSchema } from './BusinessInfo';
import { Schema } from 'tinacms';

export const schema: Schema = {
  collections: [
    {
      label: 'Gallery Grid',
      name: 'galleryGrid',
      path: 'content/gallery',
      format: 'json',
      fields: [
        {
          type: 'object',
          label: 'Images',
          name: 'images',
          ui: {
            itemProps: item => {
              return { label: item?.alt };
            }
          },
          list: true,
          fields: [
            {
              type: 'string',
              label: 'Image Alt Text',
              name: 'alt'
            },
            {
              name: 'src',
              type: 'image',
              label: 'Menu Item Image'
            },
            {
              type: 'string',
              label: 'Format',
              name: 'format',
              options: ['small', 'big', 'vertical', 'horizontal']
            }
          ]
        }
      ]
    },
    {
      label: 'Business Info',
      name: 'businessInfo',
      path: 'content/info',
      format: 'json',
      fields: [
        {
          type: 'string',
          label: 'Business Name',
          name: 'name'
        },
        {
          type: 'string',
          label: 'Phone Number',
          name: 'phoneNumber'
        },
        {
          type: 'string',
          label: 'Email',
          name: 'email'
        },
        addressSchema,
        hoursSchema
      ]
    },
    {
      label: 'Menus',
      name: 'menu',
      path: 'content/menus',
      format: 'json',
      fields: [
        {
          type: 'string',
          label: 'Menu Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description'
        },
        {
          type: 'string',
          label: 'Notes',
          name: 'notes',
          ui: {
            component: 'textarea'
          }
        },
        {
          type: 'boolean',
          label: 'Available',
          name: 'available'
        },
        menuSectionSchema
      ]
    },
    {
      label: 'Homepage Cards',
      name: 'highlight',
      path: 'content/highlight',
      format: 'mdx',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Subtitle',
          name: 'subtitle'
        },
        imageSchema,
        {
          type: 'string',
          label: 'Element ID',
          name: 'elementId'
        },
        {
          type: 'number',
          label: 'Display Order',
          name: 'order'
        },
        {
          type: 'rich-text',
          label: 'Card Body',
          name: 'body',
          isBody: true,
          templates: [
            {
              name: 'PhoneNumber',
              label: 'Phone Number',
              fields: [
                {
                  type: 'string',
                  name: 'label',
                  label: 'Label (optional)',
                  description:
                    'Optional text shown before the phone number. Leave blank to show only the number.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Blog Posts',
      name: 'posts',
      path: 'content/posts',
      format: 'mdx',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          ui: {
            component: 'textarea'
          }
        }
      ]
    },
    {
      label: 'Global',
      name: 'global',
      path: 'content/global',
      format: 'json',
      fields: [navigationSchema, themeSchema, metaSchema, footerSchema]
    }
  ]
};
