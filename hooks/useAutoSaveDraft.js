import { useEffect, useRef } from 'react';

/**
 * Generic auto-save hook that triggers callback after user stops typing.
 * @param {*} watchValue - value from form.watch()
 * @param {Function} callback - function to run on save
 * @param {number} delay - debounce delay in ms
 */
export default function useAutoSaveDraft(watchValue, callback, delay = 5000) {
  const timeout = useRef(null);

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      callback(watchValue);
    }, delay);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchValue]);
}
