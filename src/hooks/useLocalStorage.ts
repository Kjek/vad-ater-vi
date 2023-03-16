import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import useEventCallback from './useEventCallback';

type SetValue<T> = Dispatch<SetStateAction<T | undefined>>;

const useLocalStorage = <T = string>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  }, [initialValue, key]);
  const [value, setValue] = useState<T>();

  const updateValue: SetValue<T> = useEventCallback((newValue) => {
    if (typeof window === 'undefined') {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
    }
    try {
      const valueToStore =
        newValue instanceof Function && value ? newValue(value) : newValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setValue(valueToStore);
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });

  useEffect(() => {
    setValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value as T, updateValue];
};

export default useLocalStorage;
