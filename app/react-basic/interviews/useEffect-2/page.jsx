'use client';
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  const [show, setShow] = useState(true);
  return <div>{show && <Child unmount={() => setShow(false)} />}</div>;
}

function Child({ unmount }) {
  const isMounted = useIsMounted();
  useEffect(() => {
    console.log('initial:', isMounted);
    Promise.resolve(true).then(() => {
      console.log('unmount:', isMounted);
    });
    unmount();
  }, []);

  return null;
}

function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return isMounted.current;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
