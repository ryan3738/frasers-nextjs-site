'use client';

import React, { useRef } from 'react';
import { wrapFieldsWithMeta } from 'tinacms';
import type { TinaField } from 'tinacms';
import {
  datetimeLocalValueToStoredIso,
  storedIsoToDatetimeLocalValue
} from '../../lib/pacific-datetime';

type OptionalDatetimeFieldProps = {
  field: TinaField & { namespace: string[] };
  input: {
    name: string;
    value: string;
    onChange: (value: string | undefined) => void;
  };
  meta: {
    error?: string;
  };
};

function OptionalDatetimeFieldInner({ input, field }: OptionalDatetimeFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const value = input.value || undefined;

  const openPicker = () => {
    const element = inputRef.current;
    if (!element) {
      return;
    }

    if (typeof element.showPicker === 'function') {
      element.showPicker();
      return;
    }

    element.focus();
  };

  const label =
    typeof field.label === 'string' ? field.label : 'Date and time';

  return (
    <div className="flex flex-wrap items-center gap-2">
      {!value ? (
        <button
          type="button"
          onClick={openPicker}
          className="inline-flex w-fit items-center rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-600"
        >
          Select date and time (optional)
        </button>
      ) : null}

      <input
        ref={inputRef}
        type="datetime-local"
        aria-label={label}
        value={value ? storedIsoToDatetimeLocalValue(value) : ''}
        onChange={event => {
          const next = event.target.value;
          input.onChange(
            next ? datetimeLocalValueToStoredIso(next) : undefined
          );
        }}
        className={
          value
            ? 'rounded border border-gray-200 px-3 py-2 text-sm shadow-sm'
            : 'sr-only'
        }
      />
      {value ? (
        <button
          type="button"
          onClick={() => input.onChange(undefined)}
          className="rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-blue-600"
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}

export const OptionalDatetimeField = wrapFieldsWithMeta(
  OptionalDatetimeFieldInner
);
