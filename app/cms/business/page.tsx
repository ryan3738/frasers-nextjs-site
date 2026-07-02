import { pageMetadata } from '@/lib/seo';
import { CmsHomePreview } from '../_components/cms-home-preview';

export const revalidate = 3600;

export const metadata = pageMetadata({
  path: '/cms/business',
  noIndex: true
});

export default CmsHomePreview;
