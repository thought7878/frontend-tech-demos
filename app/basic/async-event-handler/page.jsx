// This is a React Quiz from BFE.dev
'use client';

import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

export default function App() {
  const [state, setState] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setState(state + 1);
    }, 0);
  };

  console.log(state);

  return (
    <div>
      <button onClick={increment}>click me</button>
    </div>
  );
}
/* 
ReactDOM.render(<App />, document.getElementById('root'));

// click the button twice
userEvent.click(screen.getByText('click me'));
userEvent.click(screen.getByText('click me'));
*/
