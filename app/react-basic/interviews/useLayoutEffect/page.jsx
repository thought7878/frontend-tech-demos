// This is a React Quiz from BFE.dev
'use client';

import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  console.log('App');
  const [state, setState] = useState(0);

  useEffect(() => {
    setState((state) => state + 1);

    console.log('useEffect []');
    return () => {
      console.log('useEffect [] cleanup');
    };
  }, []);

  useEffect(() => {
    console.log('useEffect 1');
    return () => {
      console.log('useEffect 1 cleanup');
    };
  }, [state]);

  useEffect(() => {
    console.log('useEffect 2');
    return () => {
      console.log('useEffect 2 cleanup');
    };
  }, [state]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return () => {
      console.log('useLayoutEffect cleanup');
    };
  }, [state]);

  return (() => {
    console.log('jsx');
    return <div>component</div>;
  })();
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
