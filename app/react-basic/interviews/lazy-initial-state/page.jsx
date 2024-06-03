// This is a React Quiz from BFE.dev
'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  const [state1, setState1] = useState(1);

  const [state2] = useState(() => {
    console.log(2);
    return 2;
  });

  console.log(state1);

  useEffect(() => {
    setState1(3);
  }, []);

  return null;
}

// ReactDOM.render(<App />, document.getElementById('root'));
