import { pageMetadata } from '@/lib/seo';
import { CmsHomePreview } from '../../_components/cms-home-preview';

export const revalidate = 3600;

export async function generateMetadata({
  params
}: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;

  return pageMetadata({
    path: `/cms/highlight/${filename}`,
    noIndex: true
  });
}

export default CmsHomePreview;
