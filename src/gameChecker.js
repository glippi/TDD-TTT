const firstHorizontalRow = (grid, sign) => grid[0] === sign && grid[1] === sign && grid[2] === sign
const secondHorizontalRow = (grid, sign) => grid[3] === sign && grid[4] === sign && grid[5] === sign

export default function gameChecker(grid) {
  if (firstHorizontalRow(grid, "X")
    || 
   secondHorizontalRow(grid, "X")
  ) {
    return "player1"
  }
}
