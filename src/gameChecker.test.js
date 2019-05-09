import gameChecker from './gameChecker'

describe('gameChecker should verify who is the winner', ()=>{
  test('player1 wins with first horizontal row', ()=> {
    const grid = ["X","X", "X", "O", "X", "O", "O", "O", "X" ];

    const winner = gameChecker(grid);

    expect(winner).toBe("player1");
  })
})
