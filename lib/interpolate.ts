export function interpolate(
  text: string | null | undefined,
  values: Record<string, string>
): string {
  if (!text) return '';
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => values[key] ?? '');
}
