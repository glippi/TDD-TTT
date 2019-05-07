import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils';
import { Cell } from './Cell'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


it('renders Cell element', () => {
  render(<Cell cellPosition="1" />, container);
  unmountComponentAtNode(container);
});


it('put an X if is clicked', () => {
  act(() => {
    render(<Cell />, container);
  });
  const aCell = container.querySelector('.cell');
  act(() => {
    aCell.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(aCell.textContent).toBe('X');
});
