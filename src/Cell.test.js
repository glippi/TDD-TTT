import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { create } from "react-test-renderer"
import { act } from 'react-dom/test-utils';
import { Cell } from './Cell'
import App from './App'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('Cell component should', () => {
  it('render without crashing', () => {
    render(<Cell cellPosition="1" />, container);

    unmountComponentAtNode(container);
  });

  it('draw an X when clicked', () => {
    act(() => {
      render(<Cell />, container);
    });

    const aCell = container.querySelector('.cell');

    act(() => {
      aCell.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(aCell.textContent).toBe('X');
  });

  it('change App state when clicked', () => {
    act(() => {
      render(<Cell />, container);
    });

    const aCell = container.querySelector('.cell');

    act(() => {
      aCell.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    const app = create(<App />)
    const instance = app.getInstance();
    const { state: { actualPlayer } } = instance

    expect(actualPlayer).toBe("player2");
  });

});

