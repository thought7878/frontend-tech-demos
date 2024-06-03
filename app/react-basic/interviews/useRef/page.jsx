// This is a React Quiz from BFE.dev
'use client';

import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  const ref = useRef(null);
  const [state, setState] = useState(1);

  useEffect(() => {
    setState(2);
  }, []);

  console.log(ref.current?.textContent);

  return (
    <div>
      <div ref={state === 1 ? ref : null}>1</div>
      <div ref={state === 2 ? ref : null}>2</div>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
