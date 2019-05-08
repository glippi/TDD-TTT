import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { create } from "react-test-renderer"
import { act } from 'react-dom/test-utils'
import { Grid } from './Grid'
import App from './App'

let container;
let grid;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  const app = create(<App />)
  const instance = app.getInstance();
  grid = instance.state.grid
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('Grid component should', () => {
  test('render without crashing', () => {
    render(<Grid grid={grid} />, container);

    unmountComponentAtNode(container);
  });

  test('render 9 cells', () => {
    act(() => {
      render(<Grid grid={grid} />, container)
    });

    const cells = container.querySelectorAll('.cell');

    expect(cells.length).toEqual(9);
  });
});
