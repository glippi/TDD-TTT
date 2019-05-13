import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { create } from "react-test-renderer"
import { act } from 'react-dom/test-utils'
import { Player } from './Player'
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


describe('Player component should', () => {
  it('render without crashing', () => {
    render(<Player />, container);

    unmountComponentAtNode(container);
  });

  it('show actual player', () => {
    act(() => {
      render(<Player whoIsPlaying={"player1"} />, container);
    });

    const player = container.querySelector('.player');

    expect(player.textContent).toBe('Player 1 moves');
  });

  it('restart the game when clicked on restart icon', () => {
    const app = create(<App />);
    const instance = app.getInstance();
    instance.setState({ winner : "player1"});

    app.toJSON().children[1].children[1].props.onClick()

    expect(instance.state.winner).toBe('');
  });
});
