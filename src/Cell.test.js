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
