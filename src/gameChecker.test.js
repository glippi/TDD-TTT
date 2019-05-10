import gameChecker from './gameChecker'

describe('gameChecker should verify who is the winner', ()=>{
  test('player1 wins with first horizontal row', ()=> {
    const grid = ["❌", "❌", "❌", "O", "❌", "O", "O", "O", "❌" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with second horizontal row', ()=> {
    const grid = ["❌", "O", "O", "❌", "❌", "❌", "O", "8", "9" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with third horizontal row', ()=> {
    const grid = ["1", "2", "O", "4", "O", "6", "❌", "❌", "❌" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with first vertical row', ()=> {
    const grid = ["❌", "❌", "❌", "O", "O", "6", "7", "8", "9" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with second vertical row', ()=> {
    const grid = ["O", "❌", "3", "❌", "O", "❌", "7", "8", "9" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with third vertical row', ()=> {
    const grid = ["1", "2", "❌", "O", "5", "❌", "O", "8", "❌" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with diagonal from left to right', ()=> {
    const grid = ["❌","2", "O", "O", "❌", "6", "7", "8", "❌" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with diagonal from right to left', ()=> {
    const grid = ["1","2", "❌", "O", "❌", "6", "❌", "8", "O" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })
})
