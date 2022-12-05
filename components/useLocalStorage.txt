import { useState } from 'react';

function useLocalStorage(key: any, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window === 'undefined' || !window) {
        return initialValue;
      }
      // Get from local storage by key
      const item = window?.localStorage?.getItem(key);
      // Parse stored json or if none return initialValue
      return item && item != undefined ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      if (typeof window === 'undefined') {
        throw 'window not defined';
      }
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log('🔴 ~ file: useLocalStorage.tsx ~ line 35 ~ Catch Error ~ error', error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
