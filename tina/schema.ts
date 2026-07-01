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
import {
  comparePacificPublishDates,
  formatPublishDateRange
} from '../lib/is-highlight-visible';
import { parsePacificDatetimeField } from '../lib/pacific-datetime';
import { OptionalDatetimeField } from './components/optional-datetime-field';

function buildHighlightListLabel(values: {
  title?: string;
  order?: number | null;
  showOnHomepage?: boolean;
  publishStart?: string | null;
  publishEnd?: string | null;
}): string {
  const parts: string[] = [];

  if (values.order != null) {
    parts.push(`#${values.order}`);
  }

  parts.push(values.title?.trim() || 'Untitled');
  parts.push(values.showOnHomepage ? 'On homepage' : 'Hidden');

  const dateRange = formatPublishDateRange(
    values.publishStart,
    values.publishEnd
  );
  if (dateRange) {
    parts.push(dateRange);
  }

  return parts.join(' · ');
}

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
      ui: {
        beforeSubmit: async ({ values }) => ({
          ...values,
          publishStart: values.publishStart
            ? parsePacificDatetimeField(String(values.publishStart))
            : values.publishStart,
          publishEnd: values.publishEnd
            ? parsePacificDatetimeField(String(values.publishEnd))
            : values.publishEnd,
          listLabel: buildHighlightListLabel(
            values as {
              title?: string;
              order?: number | null;
              showOnHomepage?: boolean;
              publishStart?: string | null;
              publishEnd?: string | null;
            }
          )
        })
      },
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          required: true
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
          type: 'boolean',
          label: 'Show on Homepage',
          name: 'showOnHomepage',
          description: 'Turn off to hide this card without deleting it.',
          ui: {
            component: 'toggle'
          }
        },
        {
          type: 'string',
          name: 'publishStart',
          label: 'Publish Start',
          required: false,
          description:
            'Optional. Pacific date and time when this card can first appear. Leave unset for no start limit.',
          ui: {
            component: OptionalDatetimeField as never
          }
        },
        {
          type: 'string',
          name: 'publishEnd',
          label: 'Publish End',
          required: false,
          description:
            'Optional. Pacific date and time when this card stops appearing. Leave unset for no end limit.',
          ui: {
            component: OptionalDatetimeField as never,
            validate: (value: string, allValues) =>
              comparePacificPublishDates(
                allValues?.publishStart as string | null | undefined,
                value
              )
          }
        },
        {
          type: 'string',
          label: 'List Label',
          name: 'listLabel',
          description:
            'Used in the CMS sidebar. Updates automatically when you save.',
          isTitle: true,
          required: true,
          ui: {
            component: 'textarea'
          }
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
