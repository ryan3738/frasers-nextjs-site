const QUICK_EDIT_CSS = `
  [data-tina-field] {
    outline: 2px dashed rgba(34,150,254,0.5);
    transition: box-shadow ease-out 150ms;
  }
  [data-tina-field]:hover {
    box-shadow: inset 100vi 100vh rgba(34,150,254,0.3);
    outline: 2px solid rgba(34,150,254,1);
    cursor: pointer;
  }
  [data-tina-field-overlay] {
    outline: 2px dashed rgba(34,150,254,0.5);
    position: relative;
  }
  [data-tina-field-overlay]:hover {
    cursor: pointer;
    outline: 2px solid rgba(34,150,254,1);
  }
  [data-tina-field-overlay]::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 20;
    transition: opacity ease-out 150ms;
    background-color: rgba(34,150,254,0.3);
    opacity: 0;
  }
  [data-tina-field-overlay]:hover::after {
    opacity: 1;
  }
`;

const QUICK_EDIT_BODY_CLASS = '__tina-quick-editing-enabled';
const QUICK_EDIT_STYLE_ID = '__tina-bridge-quick-edit-style';

function readTinaField(el: Element): string | null {
  for (const name of el.getAttributeNames()) {
    if (name.startsWith('data-tina-field')) {
      const value = el.getAttribute(name);
      if (value) {
        return value;
      }
    }
  }

  return null;
}

export function resolvePreviewFieldName(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) {
    return null;
  }

  const direct = readTinaField(target);
  if (direct) {
    return direct;
  }

  const ancestor = target.closest('[data-tina-field], [data-tina-field-overlay]');
  if (!ancestor) {
    return null;
  }

  return readTinaField(ancestor);
}

function installQuickEditStyle() {
  if (document.getElementById(QUICK_EDIT_STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = QUICK_EDIT_STYLE_ID;
  style.textContent = QUICK_EDIT_CSS;
  document.head.appendChild(style);
  document.body.classList.add(QUICK_EDIT_BODY_CLASS);
}

function removeQuickEditStyle() {
  document.getElementById(QUICK_EDIT_STYLE_ID)?.remove();
  document.body.classList.remove(QUICK_EDIT_BODY_CLASS);
}

export function bindPreviewClickToEdit() {
  installQuickEditStyle();

  const handleClick = (event: MouseEvent) => {
    const fieldName = resolvePreviewFieldName(event.target);
    if (!fieldName) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    parent.postMessage(
      { type: 'field:selected', fieldName },
      window.location.origin
    );
  };

  document.addEventListener('click', handleClick, true);

  return () => {
    document.removeEventListener('click', handleClick, true);
    removeQuickEditStyle();
  };
}
