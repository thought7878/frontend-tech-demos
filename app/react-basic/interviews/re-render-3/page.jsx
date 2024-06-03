// This is a React Quiz from BFE.dev
// What does the code snippet to the right output by console.log?
'use client';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function A({ children }) {
  console.log('A');
  return children;
}

function B() {
  console.log('B');
  return <C />;
}

function C() {
  console.log('C');
  return null;
}

function D() {
  console.log('D');
  return null;
}

export default function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
    console.log('useEffect');
  }, []);
  console.log('App');
  return (
    <div>
      <A>
        <B />
      </A>
      <D />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
