import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

function useToggle(
  defaultValue = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(defaultValue);

  const toggle = useCallback(() => setValue((prevValue) => !prevValue), []);

  return [value, toggle, setValue];
}

export default useToggle;
