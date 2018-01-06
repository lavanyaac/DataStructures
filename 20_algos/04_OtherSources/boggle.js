// Boggle (Find all possible words in a board of characters)
// Given a dictionary, a method to do lookup in dictionary and a M x N board where every cell has one character. Find all possible words that can be formed by a sequence of adjacent characters. Note that we can move to any of 8 adjacent characters, but a word should not have multiple instances of same cell.
// Input: dictionary[] = {"GEEKS", "FOR", "QUIZ", "GO"};
//        boggle[][]   = {{'G','I','Z'},
//                        {'U','E','K'},
//                        {'Q','S','E'}};
//       isWord(str): returns true if str is present in dictionary
//                    else false.

// Output:  Following words of dictionary are present
//          GEEKS
//          QUIZ


function findWord(word){
	if(!word){
		return false;
	}
	for(const eachword of dictionary){
		if(eachword === word){
			return true;
		}
	}
	return false;
}

function boggleUtil(boggleBoard, visited, i, j, str, output){
	visited[i][j] = true;
	str = str+boggleBoard[i][j];

	if(findWord(str)){ output.push(str);}

	for(let row = i-1; row<=i+1 && row<boggleBoard.length; row++){
		for(let col = j-1; col<=j+1 && col<boggleBoard[0].length; col++){
			if(row >= 0 && col >= 0 && !visited[row][col]){
				boggleUtil(boggleBoard, visited, row, col, str, output);
			}
		}
	}
	visited[i][j] = false;
	str = str.slice(0, -1);
}

function findWords(boggleBoard){
	const visited = [];
	const output = [];

	for(let i = 0; i<boggleBoard.length; i++){
		const row = new Array(boggleBoard[0].length).fill(false);
		visited.push(row);
	}

	for(let i = 0; i<boggleBoard.length; i++){
		for(let j = 0; j<boggleBoard[0].length; j++){
			boggleUtil(boggleBoard, visited, i, j, '', output);
		}
	}
	console.log(output);
}

const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
const boggle   = [['G','I','Z'],
               ['U','E','K'],
               ['Q','S','E']];

findWords(boggle);//[ 'GEEKS', 'QUIZ' ]
