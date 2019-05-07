import { Grid } from './Grid'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

it('renders Grid element', () => {
  const div = document.createElement('div');
  render(<Grid />, div);
  unmountComponentAtNode(div);
});
