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

  test('render the Header', () => {
    act(() => {
      render(<App />, container)
    });

    const header = container.querySelector('.header');

    expect(header.textContent).toBe('Tic Tac Toe');
  });

  test('render the Grid', () => {
    act(() => {
      render(<App />, container)
    });

    const grid = container.querySelector('.grid-wrapper');

    expect(grid.textContent).toBeTruthy();
  });

  test('render the Player', () => {
    act(() => {
      render(<App />, container)
    });

    const player = container.querySelector('.player');

    expect(player).toBeTruthy();
  });

  test('render the winner', () => {
    const app = create(<App />);
    const instance = app.getInstance();
    instance.setState({ winner : "player1"});

    const displayWinner = app.toJSON().children[1].children[0];

    expect(displayWinner).toBe('player1 wins!')
  });

});

describe('Initial state of the App should', () => {
  test('start with player1', () => {
    const app = create(<App />)
    const instance = app.getInstance();
    const { state: { actualPlayer } } = instance

    expect(actualPlayer).toBe("player1");
  });

  test('start with grid of 9 elements', () => {
    const app = create(<App />)
    const instance = app.getInstance();
    const { state: { grid }} = instance

    expect(grid.length).toBe(9);
  });

  test('start without a winner', () => {
    const app = create(<App />)
    const instance = app.getInstance();
    const { state: { winner }} = instance

    expect(winner).toBe("");
  });
});
