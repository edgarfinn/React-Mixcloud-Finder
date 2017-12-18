import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const section = document.createElement('aside');
  ReactDOM.render(<App />, section);
});
