import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import { create } from "react-test-renderer"
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

  test('render the Player', () => {
    act(() => {
      render(<App />, container)
    });

    const player = container.querySelector('.player');

    expect(player).toBeTruthy();
  });

});

describe('App component should', () => {
  test('render the Player', () => {
    const app = create(<App />)
    const instance = app.getInstance();
    const { state } = instance

    expect(state).toBeTruthy();
  });
});
