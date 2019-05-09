export default function gameChecker(grid) {
  if (
    (grid[0] === "X" && grid[1] === "X" && grid[2] === "X") || 
    (grid[3] === "X" && grid[4] === "X" && grid[5] === "X")
  ) {
    return "player1"
  }
}
