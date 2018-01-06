// Given a MxN matrix where each element can either be 0 or 1. 
// We need to find the shortest path between a given source cell to a destination cell. 
// The path can only be created out of a cell if its value is 1.
// Expected time complexity is O(MN).
function isValid(matrix, x, y){
	if(x < 0 || y < 0 || x >= matrix.length || y >= matrix.length){
		return false;
	}
	return true;
}


function shortestPath(matrix, src, dest){
	if(!matrix[src.x][src.y] || !matrix[dest.x][dest.y]){
		return null;
	}

	const visited = [];
	for(let i = 0; i<matrix.length; i++){
		visited.push(new Array(matrix[0]).fill(0));
	}

	visited[src.x][src.y] = 1;
	const queue = [];
	const node = {x: src.x, y: src.y, dist:0};
	queue.push(node);
	const rows = [-1, 0, 1, 0];
	const cols = [0, -1, 0, 1];

	while(queue.length){
		const cell = queue.shift();

		if(cell.x === dest.x && cell.y === dest.y){
			return cell.dist;
		}
		
		for(let i = 0; i<rows.length; i++){
			const row = cell.x + rows[i];
			const col = cell.y + cols[i];
			if(isValid(matrix, row, col) && matrix[row][col] && !visited[row][col]){
				queue.push({x: row, y: col, dist: cell.dist+1});
				visited[row][col] = 1;
			}
		}
	}

	return null;
}


const mat = 
    [
        [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
        [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],
        [ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],
        [ 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 ],
        [ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],
        [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
        [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
        [ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 ]
    ];


const src = {x:0, y:0};
const dest = {x: 3, y:4};

console.log(shortestPath(mat, src, dest));//11
