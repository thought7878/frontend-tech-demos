// This is a React Quiz from BFE.dev
'use client';

import React, { memo, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
// import { screen, fireEvent } from '@testing-library/dom';

function _A({ onClick }) {
  console.log('A');
  return (
    <button onClick={onClick} data-testid='button'>
      click me
    </button>
  );
}

const A = memo(_A);

export default function App() {
  console.log('App');
  const [state, setState] = useState(0);

  // const handleClick = useCallback(() => {
  //   setState((state) => state + 1);
  // }, []);

  return (
    <div>
      {state}
      <A
        // onClick={handleClick}
        onClick={() => {
          setState((state) => state + 1);
        }}
      />
    </div>
  );
}

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// click the button
(async function () {
  const button = await screen.findByTestId('button');
  fireEvent.click(button);
})(); */
