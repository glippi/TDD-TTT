import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  ReactDOM.render(<App />, container);
  ReactDOM.unmountComponentAtNode(container);
});

it('renders the Grid inside the App', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const grid = container.querySelector('.grid-wrapper');
  expect(grid.textContent).toBe('I\'m a grid');
});
