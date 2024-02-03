// This is a React Quiz from BFE.dev
'use client';

import React, { useRef, useLayoutEffect } from 'react';
// import ReactDOM from 'react-dom';

export default function App() {
  const ref = useRef(false);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    ref.current = true;
  });

  return (
    <button
      autoFocus
      onFocus={() => {
        console.log(!!ref.current);
      }}
    >
      button
    </button>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
