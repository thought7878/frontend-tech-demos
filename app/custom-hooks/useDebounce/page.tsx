/* 
https://bigfrontend.dev/react/useDebounce

For a frequently changing value like text input you might want to debounce the changes.
Implement useDebounce() to achieve this.
*/
'use client';
import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value or delay changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function App() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type='text' value={value} onChange={handleChange} />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}
