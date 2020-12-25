import { useEffect, useState } from 'react';

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [delay, value]
  );

  return debouncedValue;
};

export const useAutoCallback = (value: any, callback: (value: any) => void) => {
  useEffect(() => {
    callback(value);
  }, [callback, value]);
};
