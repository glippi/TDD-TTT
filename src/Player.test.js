import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Player } from './Player'

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('Player component should', () => {
  it('render without crashing', () => {
    render(<Player />, container);

    unmountComponentAtNode(container);
  });

  it('show text Player 1', () => {
    act(() => {
      render(<Player />, container);
    });

    const player1 = container.querySelector('.player1');

    expect(player1.textContent).toBe('Player 1 moves');
  });

});
