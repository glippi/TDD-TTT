import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { create } from 'react-test-renderer'
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
    render(<Cell />, container);

    unmountComponentAtNode(container);
  });
});

describe('Cell component when clicked should', () => {
  it.each`
    value
    ${"1"}
    ${"X"}
    ${"O"}
  `('draw $value if passed from props', ({ value }) => {
    act(() => {
      render(<Cell cellValue={value} signBoard={()=>{}} />, container);
    });

    const aCell = container.querySelector('.cell');

    act(() => {
      aCell.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(aCell.textContent).toBe(value);
  })

  it('call method signBoard on App component', () => {
    const app = create(<App />);
    const instance = app.getInstance();
    const spy = jest.spyOn(instance, 'signBoard');

    instance.signBoard();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

});
