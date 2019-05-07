import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { act } from 'react-dom/test-utils';
import { Grid } from './Grid'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the Grid inside the App', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, div);
  });
  const grid = container.querySelector('.grid-wrapper');
  expect(grid.textContent).toBe('I\'m a grid');
});
