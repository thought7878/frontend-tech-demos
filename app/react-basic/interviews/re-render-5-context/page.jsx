// This is a React Quiz from BFE.dev
// What does the code snippet to the right output by console.log?
'use client';

import React, {
  useState,
  memo,
  createContext,
  useEffect,
  useContext,
} from 'react';
import ReactDOM from 'react-dom';

const MyContext = createContext(0);

function B() {
  const count = useContext(MyContext);
  console.log('B');
  return null;
}

const A = memo(() => {
  console.log('A');
  return <B />;
});

function C() {
  console.log('C');
  return null;
}
export default function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState((state) => state + 1);
    console.log('useEffect App');
  }, []);

  console.log('App');
  return (
    <MyContext.Provider value={state}>
      <A />
      <C />
    </MyContext.Provider>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
