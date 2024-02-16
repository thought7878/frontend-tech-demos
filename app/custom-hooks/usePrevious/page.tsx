'use client';
import { useRef, useEffect, useState } from 'react';

function usePrevious<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    console.log('in useEffect');
    ref.current = value;
  }, [value]);

  console.log('after useEffect');

  return ref.current;
}

export default function UsePreviousPage() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  console.log('in Component');

  return (
    <div>
      <p>Count: {count}</p>
      <p>Previous count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
