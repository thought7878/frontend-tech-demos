// This is a React Quiz from BFE.dev
'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  const [state, setState] = useState(0);
  console.log('App:', state);

  useEffect(() => {
    setState((state) => state + 1);
  }, []);

  useEffect(() => {
    console.log('useEffect 2:', state);
    setTimeout(() => {
      console.log('useEffect 2 setTimeout:', state);
    }, 100);
  }, []);

  return null;
}

// ReactDOM.render(<App />, document.getElementById('root'));
