// How to find duplicates in 2 ordered arrays.  


function findDuplicates(arr1, arr2){
	const dup = [];
	let idx1 = 1;
	let idx2 = 1;

	while(arr1[idx1] !== undefined || arr2[idx2] !==  undefined){
		if(arr1[idx1] !== undefined && arr2[idx2] === undefined){
			for(let i = idx1+1; i< arr1.length; i++){
				if(arr1[i-1] === arr1[i]){
					dup.push(arr1[i]);
				}
			}
			break;
		}
		if(arr2[idx2] !== undefined && arr1[idx1] === undefined){
			for(let i = idx2+1; i< arr2.length; i++){
				if(arr2[i-1] === arr2[i]){
					dup.push(arr2[i]);
				}
			}
			break;
		}

		if(arr1[idx1] === arr2[idx2]){
			dup.push(arr1[idx1]);
			++idx1;
			++idx2;
		}else if(arr1[idx1] === arr1[idx1-1]){
			dup.push(arr1[idx1]);
			++idx1;
		}else if(arr2[idx2] === arr2[idx2-1]){
			dup.push(arr2[idx2]);
			++idx2;
		}else{
			if(arr1[idx1]<arr2[idx2]){
				++idx1;
			}else{
				++idx2;
			}
		}
	}

	return dup;
}


const A = [1,2,3,3,4,5, 8, 8, 9, 9];
const B = [0,2,6,6,7];

console.log(findDuplicates(A, B));