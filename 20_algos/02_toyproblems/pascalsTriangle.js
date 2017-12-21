// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const pascalsTriangle = (rows) => {
	const results = [[1]];
	let prev = results[0].slice();

	while(rows > 1){
		prev.unshift(0);
		prev.push(0);

		let newRow = [];
		for(let i = 1; i<prev.length; i++){
			newRow.push(prev[i]+prev[i-1]);
		}
		results.push(newRow);
		prev = newRow.slice();
		--rows;
	}
	return results;
}

console.log(pascalsTriangle(5));//[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]