// This is a React Quiz from BFE.dev
'use client';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';

export default function App() {
  const [state, setState] = useState(0);

  const onClick = () => {
    console.log('handler');
    setState((state) => state + 1);
    // React waits until all code in the event handlers has run before processing your state updates
    // https://react.dev/learn/queueing-a-series-of-state-updates

    // React batches state updates. It updates the screen after all the event handlers have run and have called their set functions.
    // https://react.dev/reference/react/useState#setstate-caveats
    console.log('handler ' + state);
  };

  console.log('render ' + state);

  return (
    <div>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
// // click the button
// userEvent.click(screen.getByText('click me'));
