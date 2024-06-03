// 与 re-render-4 对比

'use client';

import React, { memo, useState } from 'react';
// import ReactDOM from 'react-dom';
// import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';

function _B() {
  console.log('B');
  return null;
}

const B = memo(_B);

function _A({ children }) {
  /* 
    Why executed?
    B inside of A will be changed, generate a new B every rerender of App.
    So, the children props of A is changed.
  */
  console.log('A');
  return children;
}

const A = memo(_A);

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>click me</button>
      <A>
        <B />
      </A>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));

// userEvent.click(screen.getByText('click me'));
