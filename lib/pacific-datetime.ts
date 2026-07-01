export const PACIFIC_TIME_ZONE = 'America/Los_Angeles';

function pad(value: number, length = 2): string {
  return String(value).padStart(length, '0');
}

function getTimezoneOffsetMinutes(timeZone: string, date: Date): number {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const parts = Object.fromEntries(
    formatter.formatToParts(date).map(part => [part.type, part.value])
  );

  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );

  return (asUtc - date.getTime()) / 60_000;
}

export function pacificWallClockToUtcIso(
  dateKey: string,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0
): string {
  const [year, month, day] = dateKey.split('-').map(Number);
  const pretendUtc = Date.UTC(
    year,
    month - 1,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );
  const offsetMinutes = getTimezoneOffsetMinutes(
    PACIFIC_TIME_ZONE,
    new Date(pretendUtc)
  );

  return new Date(pretendUtc - offsetMinutes * 60_000).toISOString();
}

export function getPacificDateKey(date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: PACIFIC_TIME_ZONE
  }).format(date);
}

export function getPacificDateKeyFromValue(value: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value.trim())) {
    return value.trim();
  }

  return getPacificDateKey(new Date(value));
}

export function getPacificTimeParts(date: Date): {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
} {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: PACIFIC_TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const parts = Object.fromEntries(
    formatter.formatToParts(date).map(part => [part.type, part.value])
  );

  return {
    hours: Number(parts.hour),
    minutes: Number(parts.minute),
    seconds: Number(parts.second),
    milliseconds: date.getUTCMilliseconds()
  };
}

export function toTinaDatetimeDisplayValue(value: string): string {
  if (!value) {
    return '';
  }

  const date = new Date(value);
  const dateKey = getPacificDateKeyFromValue(value);
  const { hours, minutes, seconds, milliseconds } = getPacificTimeParts(date);
  const [year, month, day] = dateKey.split('-').map(Number);

  return new Date(
    year,
    month - 1,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  ).toISOString();
}

export function parsePacificDatetimeField(
  value?: string | null
): string | undefined {
  if (!value) {
    return undefined;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  const dateKey = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const { hours, minutes, seconds, milliseconds } = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds()
  };

  return pacificWallClockToUtcIso(
    dateKey,
    hours,
    minutes,
    seconds,
    milliseconds
  );
}

export function formatPacificDatetime(
  value: string,
  options?: { includeTime?: boolean }
): string {
  const date = new Date(value);
  const dateLabel = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: PACIFIC_TIME_ZONE
  }).format(date);

  if (!options?.includeTime) {
    return dateLabel;
  }

  const timeLabel = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: PACIFIC_TIME_ZONE
  }).format(date);

  return `${dateLabel} ${timeLabel}`;
}
