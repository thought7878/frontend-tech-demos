'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';

export function useIsFirstRender() {
  const isFirstRenderRef = useRef(true);

  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;
    return true;
  }

  return isFirstRenderRef.current;
}

// export default useIsFirstRender;

export default function MyComponent() {
  const isFirstRender = useIsFirstRender();

  const [count, setCount] = useState(0);

  /* 
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); 
  */
  const handleIncrement = useCallback(() => {
    setCount((count) => {
      return count + 1;
    });
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <div>Is first render: {isFirstRender ? 'yes' : 'no'}</div>
      {/* JSX for your component... */}
      <div>
        <div>{count}</div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
