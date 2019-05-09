import gameChecker from './gameChecker'

describe('gameChecker should verify who is the winner', ()=>{
  test('player1 wins with first horizontal row', ()=> {
    const grid = ["X","X", "X", "O", "X", "O", "O", "O", "X" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with second horizontal row', ()=> {
    const grid = ["X","O", "O", "X", "X", "X", "O", "8", "9" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with third horizontal row', ()=> {
    const grid = ["1","2", "O", "4", "O", "6", "X", "X", "X" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with first vertical row', ()=> {
    const grid = ["X","X", "X", "O", "O", "6", "7", "8", "9" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with second vertical row', ()=> {
    const grid = ["O","X", "3", "X", "O", "X", "7", "8", "9" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with third vertical row', ()=> {
    const grid = ["1","2", "X", "O", "5", "X", "O", "8", "X" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })

  test('player1 wins with diagonal from left to right', ()=> {
    const grid = ["X","2", "O", "O", "X", "6", "7", "8", "X" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })
})
