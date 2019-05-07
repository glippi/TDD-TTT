import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('App component should', () => {
  test('render without crashing', () => {
    render(<App />, container);

    unmountComponentAtNode(container);
  });

  test('render the Grid', () => {
    act(() => {
      render(<App />, container)
    });

    const grid = container.querySelector('.grid-wrapper');

    expect(grid.textContent).toBe('Tic Tac Toe');
  });
});
