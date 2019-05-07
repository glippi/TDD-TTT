import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Grid } from './Grid'

it('renders Grid element', () => {
  const div = document.createElement('div');
  render(<Grid />, div);
  unmountComponentAtNode(div);
});
