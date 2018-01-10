// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

const rotate = function(matrix, type='clockwise') {
  transpose(matrix);
  if(type === 'clockwise'){
    exchangeColumns(matrix);
  }
  if(type === 'anti-clockwise'){
    exchangeRows(matrix);
  }
};

function transpose(matrix){
  for(i = 0; i < matrix.length; i++){
    for(j = i; j < matrix[0].length; j++){
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

function exchangeColumns(matrix){
  for(i = 0; i < matrix.length; i++){
    for(j = 0, k = matrix[0].length-1; j < Math.floor(matrix.length/2); j++, k--){
      [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
    }
  }
}

function exchangeRows(matrix){
  for(i = 0, k = matrix.length-1; i < Math.floor(matrix.length/2); i++, k--){
    for(j = 0; j < matrix[0].length; j++){
      [matrix[i][j], matrix[k][j]] = [matrix[k][j], matrix[i][j]];
    }
  }
}


const A = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const B  = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

// transpose(A);
// console.log(A);//after transpose, [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
// exchangeColumns(A);
// console.log(A);//after exchange, [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
// exchangeRows(A);
// console.log(A);

rotate(A);
console.log(A);//[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]// default clockwise

rotate(B, 'anti-clockwise');
console.log(B);
//[ [ 11, 10, 7, 16 ],
  // [ 9, 8, 6, 12 ],
  // [ 1, 4, 3, 14 ],
  // [ 5, 2, 13, 15 ] ]
