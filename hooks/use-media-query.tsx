import { useSyncExternalStore } from 'react';

function subscribeToMediaQuery(query: string, callback: () => void) {
  const result = matchMedia(query);
  result.addEventListener('change', callback);
  return () => result.removeEventListener('change', callback);
}

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    callback => subscribeToMediaQuery(query, callback),
    () => matchMedia(query).matches,
    () => false
  );
}
