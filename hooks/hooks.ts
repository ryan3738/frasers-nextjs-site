import { useEffect } from 'react';

export const useOnClickOutside = (reference, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!reference.current || reference.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [reference, handler]);
};
