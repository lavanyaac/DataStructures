// Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// 11110
// 11010
// 11000
// 00000
// Answer: 1

// Example 2:

// 11000
// 11000
// 00100
// 00011
// Answer: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
	let count = 0;
	const m = grid.length;
	const n = grid[0].length;
	if(!m) { return 0;}
	for(let  i = 0; i<m; i++){
		for(let j = 0; j<n; j++){
			if(grid[i][j] === 1){
				DFZMarking(grid, i, j);
				++count;
			}
		}
	}
	return count;
}

function DFZMarking(grid, i, j){
	if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0){
		return;
	}
	grid[i][j] = 0;

	DFZMarking(grid, i+1, j);
	DFZMarking(grid, i-1, j);
	DFZMarking(grid, i, j+1);
	DFZMarking(grid, i, j-1);
}


const a = [
  [1,1,1,1,0],
  [1,1,0,0,0],
  [1,0,1,0,0],
  [0,0,0,1,1],
];

console.log(numIslands(a));//3
