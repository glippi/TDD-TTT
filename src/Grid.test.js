import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Grid } from './Grid'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('Grid component should', () => {
  test('render without crashing', () => {
    render(<Grid />, container);

    unmountComponentAtNode(container);
  });

  test('render 9 cells', () => {
    act(() => {
      render(<Grid />, container)
    });

    const cells = container.querySelectorAll('.cell');

    expect(cells.length).toEqual(9);
  });
});
