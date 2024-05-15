import {useState} from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle]; // Return an array containing the current `value` of the boolean state and the `toggle` function
};

export default useToggle; 