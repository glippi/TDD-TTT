const firstHorizontalRow = (grid, sign) => grid[0] === sign && grid[1] === sign && grid[2] === sign
const secondHorizontalRow = (grid, sign) => grid[3] === sign && grid[4] === sign && grid[5] === sign
const thirdHorizontalRow = (grid, sign) => grid[6] === sign && grid[7] === sign && grid[8] === sign

export default function gameChecker(grid) {
  if (firstHorizontalRow(grid, "X")
    || 
   secondHorizontalRow(grid, "X")
    || 
   thirdHorizontalRow(grid, "X")
  ) {
    return "player1"
  }
}
