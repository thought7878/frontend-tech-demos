// This is a React Quiz from BFE.dev
'use client';

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

function renderWithError(): undefined {
  throw new Error('error');
}

function A() {
  return <ErrorBoundary name='boundary-2'>{renderWithError()}</ErrorBoundary>;
}

class ErrorBoundary extends Component<
  { name: string; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { name: string; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log(this.props.name);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary name='boundary-1'>
      <A />
    </ErrorBoundary>
  );
}
// ReactDOM.render(<App />, document.getElementById('root'));
