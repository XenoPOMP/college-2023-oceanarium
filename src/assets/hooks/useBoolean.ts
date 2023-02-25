import { useState } from 'react';

type UseBooleanHook = {
  isToggled: boolean,
  toggle: () => void,
};

const useBoolean = (initialState?: boolean): UseBooleanHook => {
  // prettier-ignore
  const [toggled, setToggled] = useState<boolean>(initialState ? initialState : false);

  return {
    isToggled: toggled,
    toggle: () => setToggled((prev) => !prev),
  };
};

export default useBoolean;
