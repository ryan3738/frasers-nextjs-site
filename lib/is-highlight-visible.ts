import {
  formatPacificDatetime,
  getPacificDateKeyFromValue
} from './pacific-datetime';

export type HighlightVisibility = {
  showOnHomepage?: boolean | null;
  publishStart?: string | null;
  publishEnd?: string | null;
};

export function formatPublishDateRange(
  publishStart?: string | null,
  publishEnd?: string | null
): string | null {
  if (!publishStart && !publishEnd) {
    return null;
  }

  const formatBoundary = (value: string) =>
    formatPacificDatetime(value, { includeTime: true });

  if (publishStart && publishEnd) {
    return `${formatBoundary(publishStart)}–${formatBoundary(publishEnd)}`;
  }

  if (publishStart) {
    return `From ${formatBoundary(publishStart)}`;
  }

  return `Until ${formatBoundary(publishEnd!)}`;
}

export function isHighlightVisible(
  highlight: HighlightVisibility,
  now = new Date()
): boolean {
  if (highlight.showOnHomepage !== true) {
    return false;
  }

  const nowMs = now.getTime();

  if (highlight.publishStart) {
    const startMs = new Date(highlight.publishStart).getTime();
    if (nowMs < startMs) {
      return false;
    }
  }

  if (highlight.publishEnd) {
    const endMs = new Date(highlight.publishEnd).getTime();
    if (nowMs > endMs) {
      return false;
    }
  }

  return true;
}

export function comparePacificPublishDates(
  publishStart?: string | null,
  publishEnd?: string | null
): string | undefined {
  if (!publishStart || !publishEnd) {
    return undefined;
  }

  const startKey = getPacificDateKeyFromValue(publishStart);
  const endKey = getPacificDateKeyFromValue(publishEnd);

  if (endKey < startKey) {
    return 'Publish end must be on or after publish start';
  }

  if (endKey === startKey) {
    const startMs = new Date(publishStart).getTime();
    const endMs = new Date(publishEnd).getTime();

    if (endMs < startMs) {
      return 'Publish end must be on or after publish start';
    }
  }

  return undefined;
}
