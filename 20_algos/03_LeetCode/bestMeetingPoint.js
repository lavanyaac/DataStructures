// A group of two or more people wants to meet and minimize the total travel distance. 
//You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. 
//The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

// For example, given three people living at (0,0), (0,4), and (2,2):

// 1 - 0 - 0 - 0 - 1
// |   |   |   |   |
// 0 - 0 - 0 - 0 - 0
// |   |   |   |   |
// 0 - 0 - 1 - 0 - 0
// The point (0,2) is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. 
//So return 6.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minTotalDistance = function(grid) {
	const m = grid.length;
	const n = grid[0].length;

	const I = [];
	const J = [];

	for(let i = 0; i < m; i++){
		for(let j = 0; j < n; j++){
			if(grid[i][j] === 1){
				I.push(i);
			}
		}
	}
	for(let j = 0; j < n; j++){
		for(let i = 0; i < m; i++){
			if(grid[i][j] === 1){
				J.push(j);
			}
		}
	}
	console.log(I)
	console.log(J)
	return calculate(I) + calculate(J);
};

function calculate(grid){
	let  i = 0; 
	let j = grid.length - 1;
	let sum = 0;

	while(i < j){
		sum += grid[j--] - grid[i++];
	}
	return sum;
}

const grid = [[1,0,0,0,1], [0,0,0,0,0], [0,0,1,0,0]];

console.log(minTotalDistance(grid));