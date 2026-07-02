import { pageMetadata } from '@/lib/seo';
import { CmsHomePreview } from '../_components/cms-home-preview';

export const revalidate = 3600;

export const metadata = pageMetadata({
  path: '/cms/gallery',
  noIndex: true
});

export default CmsHomePreview;
