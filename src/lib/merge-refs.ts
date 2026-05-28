import { type Ref, useCallback } from 'react';

type PossibleRef<T> = Ref<T> | undefined;

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref && typeof ref === 'object') {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

export function mergeRefs<T>(...refs: PossibleRef<T>[]) {
  return useCallback(
    (node: T) => {
      for (const ref of refs) {
        setRef(ref, node);
      }
    },
    [refs],
  );
}
