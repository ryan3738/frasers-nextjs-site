'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';
import { useEditState } from 'tinacms/dist/react';
import { cn } from '@/lib/utils';

interface PreviewModeContextValue {
  isInAdmin: boolean;
  isVisualEditing: boolean;
  previewAsPublic: boolean;
  setPreviewAsPublic: (value: boolean) => void;
  togglePreviewMode: () => void;
}

const PreviewModeContext = createContext<PreviewModeContextValue>({
  isInAdmin: false,
  isVisualEditing: false,
  previewAsPublic: false,
  setPreviewAsPublic: () => {},
  togglePreviewMode: () => {}
});

export function useVisualEditMode() {
  return useContext(PreviewModeContext);
}

function PreviewModeToggle() {
  const { isInAdmin, previewAsPublic, setPreviewAsPublic } =
    useVisualEditMode();

  if (!isInAdmin) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-100 flex overflow-hidden rounded-full border border-input bg-background/95 shadow-lg backdrop-blur-sm"
      role="group"
      aria-label="Preview mode"
    >
      <button
        type="button"
        onClick={() => setPreviewAsPublic(false)}
        className={cn(
          'px-3 py-1.5 text-sm font-medium transition-colors',
          !previewAsPublic
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground/70 hover:bg-accent hover:text-accent-foreground'
        )}
        aria-pressed={!previewAsPublic}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => setPreviewAsPublic(true)}
        className={cn(
          'px-3 py-1.5 text-sm font-medium transition-colors',
          previewAsPublic
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground/70 hover:bg-accent hover:text-accent-foreground'
        )}
        aria-pressed={previewAsPublic}
      >
        Public view
      </button>
    </div>
  );
}

export function PreviewModeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const { edit } = useEditState();
  const [previewAsPublic, setPreviewAsPublicState] = useState(false);

  const setPreviewAsPublic = useCallback((value: boolean) => {
    setPreviewAsPublicState(value);
  }, []);

  const togglePreviewMode = useCallback(() => {
    setPreviewAsPublicState(current => !current);
  }, []);

  const value = useMemo<PreviewModeContextValue>(
    () => ({
      isInAdmin: edit,
      isVisualEditing: edit && !previewAsPublic,
      previewAsPublic: edit ? previewAsPublic : false,
      setPreviewAsPublic,
      togglePreviewMode
    }),
    [edit, previewAsPublic, setPreviewAsPublic, togglePreviewMode]
  );

  return (
    <PreviewModeContext.Provider value={value}>
      {children}
      <PreviewModeToggle />
    </PreviewModeContext.Provider>
  );
}
