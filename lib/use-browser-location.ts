'use client';

import { useSyncExternalStore } from 'react';

type BrowserLocation = {
  hash: string;
  search: string;
};

const SERVER_SNAPSHOT: BrowserLocation = { hash: '', search: '' };

let cachedSnapshot: BrowserLocation = SERVER_SNAPSHOT;

function subscribeToLocation(callback: () => void) {
  window.addEventListener('hashchange', callback);
  window.addEventListener('popstate', callback);
  return () => {
    window.removeEventListener('hashchange', callback);
    window.removeEventListener('popstate', callback);
  };
}

function getBrowserLocation(): BrowserLocation {
  const hash = window.location.hash;
  const search = window.location.search;

  if (cachedSnapshot.hash !== hash || cachedSnapshot.search !== search) {
    cachedSnapshot = { hash, search };
  }

  return cachedSnapshot;
}

export function useBrowserLocation(): BrowserLocation {
  return useSyncExternalStore(
    subscribeToLocation,
    getBrowserLocation,
    () => SERVER_SNAPSHOT
  );
}

export function locationSearchParams(search: string) {
  if (!search) {
    return null;
  }

  return new URLSearchParams(search.replace(/^\?/, ''));
}
