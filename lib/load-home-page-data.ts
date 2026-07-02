import client from '@/tina/__generated__/client';

export async function loadHomePageData() {
  const menuResponse = await client.queries.menu({
    relativePath: 'dinnerMenu.json'
  });

  const businessInfoResponse = await client.queries.businessInfo({
    relativePath: 'businessInfo.json'
  });

  const galleryGridResponse = await client.queries.galleryGrid({
    relativePath: 'galleryGrid.json'
  });

  const highlightsResponse = await client.queries.highlightConnection({
    first: 50,
    sort: 'order'
  });

  const highlightPaths =
    highlightsResponse.data.highlightConnection.edges
      ?.map(edge => edge?.node?._sys.relativePath)
      .filter((path): path is string => Boolean(path)) ?? [];

  const highlightPayloads = await Promise.all(
    highlightPaths.map(relativePath =>
      client.queries.highlight({ relativePath })
    )
  );

  return {
    menuResponse,
    businessInfoResponse,
    galleryGridResponse,
    highlightsResponse,
    highlightPayloads
  };
}

export function assertHomePageData(data: Awaited<ReturnType<typeof loadHomePageData>>) {
  if (
    !data.menuResponse?.data?.menu ||
    !data.businessInfoResponse?.data?.businessInfo ||
    !data.galleryGridResponse?.data?.galleryGrid
  ) {
    return false;
  }

  return true;
}
