//  [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]
// o/p : 
//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

const mergeRanges = (arr) => {
	const output = [];

	const inpArr = arr.slice().sort((a,b)=>{
		return a.startTime - b.startTime;
	})

	let startTime = inpArr[0].startTime;
	let endTime = inpArr[0].endTime;

	for(let i = 1; i<inpArr.length; i++){
		const time = inpArr[i];

		if(time.startTime > endTime || i === inpArr.length-1){
			if(i === inpArr.length-1){
				endTime = time.endTime;
			}
			output.push({startTime, endTime});
			startTime = time.startTime;
			endTime = time.endTime;
		}else{
			endTime = time.endTime;
		}
	}
	return output;
}

const meetings = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

const res = mergeRanges(meetings);
console.log(res);
