import { TinaField } from 'tinacms';

const imageSchema: TinaField = {
  type: 'object',
  label: 'Image',
  name: 'image',
  description:
    'Homepage cards display images as squares up to 560 px wide. Upload a 1:1 image, ideally 1120×1120 px (minimum 560×560 px) for best results.',
  fields: [
    {
      type: 'image',
      label: 'Image Source',
      name: 'src',
      description: '1:1 square ratio. Recommended: 1120×1120 px.'
    },
    {
      type: 'string',
      label: 'Image Alt Text',
      name: 'alt',
      required: true
    }
  ]
};

export { imageSchema };
