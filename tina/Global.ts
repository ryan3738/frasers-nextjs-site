import { TinaField } from 'tinacms';

const metaSchema: TinaField = {
  type: 'object',
  label: 'Meta Tags',
  name: 'meta',
  fields: [
    {
      name: 'title',
      label: 'Title',
      description: 'Title of page',
      type: 'string'
    },
    {
      name: 'description',
      label: 'Description',
      description: 'Description of the page',
      type: 'string'
    },
    {
      name: 'keywords',
      label: 'Keywords',
      description: 'Enter meta tags',
      type: 'string',
      list: true
    },
    {
      name: 'cardImage',
      label: 'Social Card Image',
      description: 'Square image to be used for social cards 512x512 or larger',
      type: 'image'
    }
  ]
};

const navigationSchema: TinaField = {
  label: 'Navigation',
  name: 'navigation',
  type: 'object',
  fields: [
    {
      label: 'links',
      name: 'links',
      type: 'object',
      list: true,
      ui: {
        itemProps: item => ({
          label: item.label
        })
      },
      fields: [
        {
          type: 'string',
          label: 'Link',
          name: 'href'
        },
        {
          type: 'string',
          label: 'Label',
          name: 'label'
        },
        {
          type: 'boolean',
          label: 'Header',
          name: 'header',
          description: 'Check to display this link in the header',
          ui: {
            component: 'toggle'
            // default: true,
          }
        },
        {
          type: 'boolean',
          label: 'Burger',
          name: 'burger',
          description: 'Check to display this link in the burger menu'
          // ui: {
          // default: true,
          // },
        },
        {
          type: 'boolean',
          label: 'Footer',
          name: 'footer',
          description: 'Check to display this link in the footer'
          // ui: {
          // default: true,
          // },
        }
      ]
    }
  ]
};

const footerSchema: TinaField = {
  type: 'object',
  label: 'Footer',
  name: 'footer',
  fields: [
    {
      type: 'string',
      label: 'Color',
      name: 'color',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Primary', value: 'primary' }
      ]
    },
    {
      type: 'object',
      label: 'Social Links',
      name: 'social',
      fields: [
        {
          type: 'string',
          label: 'Facebook',
          name: 'facebook'
        },
        {
          type: 'string',
          label: 'Twitter',
          name: 'twitter'
        },
        {
          type: 'string',
          label: 'Instagram',
          name: 'instagram'
        },
        {
          type: 'string',
          label: 'Github',
          name: 'github'
        }
      ]
    }
  ]
};

const themeSchema: TinaField = {
  type: 'object',
  label: 'Theme',
  name: 'theme',
  fields: [
    {
      type: 'string',
      name: 'color',
      label: 'Primary Color',
      ui: {
        component: 'color'
      }
    },
    {
      type: 'string',
      name: 'darkMode',
      label: 'Dark Mode',
      options: [
        {
          label: 'System',
          value: 'system'
        },
        {
          label: 'Light',
          value: 'light'
        },
        {
          label: 'Dark',
          value: 'dark'
        }
      ]
    }
  ]
};

export { metaSchema, footerSchema, themeSchema, navigationSchema };
