import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler): void => {
  useEffect(() => {
    const listener = (event): void => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mouseup', listener);
    return () => {
      document.removeEventListener('mouseup', listener);
    };
  }, [ref, handler]);
};
