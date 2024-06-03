// This is a React Quiz from BFE.dev
'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  const [state, setState] = useState(0);
  // console.log('App:', state);

  useEffect(() => {
    // setState((state) => state + 1);
    console.log('useEffect []');
  }, []);
  /* 
  useEffect(() => {
    console.log('useEffect 2:', state);
    setTimeout(() => {
      console.log('useEffect 2 setTimeout:', state);
    }, 100);
  }, []); */

  //
  useEffect(() => {
    console.log('no dependencies');
  });
  //
  useEffect(() => {
    console.log('with dependencies');

    return () => {
      console.log('with dependencies cleanup');
    };
  }, [state]);

  return (
    <div>
      <p>{state}</p>

      {console.log(`render...state=${state}`)}

      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        press me
      </button>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
