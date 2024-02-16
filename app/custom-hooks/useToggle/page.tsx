'use client';
import { MouseEventHandler, useCallback, useState } from 'react';

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [on, setOn] = useState<boolean>(initialValue);
  const toggle = useCallback(() => {
    setOn((o) => !o);
  }, []);

  return [on, toggle];
}

export default function App() {
  const [on, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>
    </div>
  );
}
