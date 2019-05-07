import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils';
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


it('renders Grid element', () => {
  render(<Grid />, container);
  unmountComponentAtNode(container);
});


it('Grid should have 9 divs', () => {
  act(() => {
    render(<Grid />, container);
  });
  const cells = container.querySelectorAll('.cell');
  console.log({ cells })
  expect(cells).toEqual(9);
});
