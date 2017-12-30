/////////////////////////////////////////////////////////////////////////////////////////////////////////
//25.Merge Interval
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given a collection of intervals, merge all overlapping intervals.
// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18]..
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = function(intervals) {
	let start = intervals[0][0];
	let end = intervals[0][1];
	const merged = []

	for(let i = 1; i<intervals.length; i++){
		if(intervals[i][0] < end){
			if(intervals[i][1] > end){
				end = intervals[i][1];
			}
		}else{
			merged.push([start, end]);
			start = intervals[i][0];
			end = intervals[i][1];
		}
	}
	merged.push([start, end]);
	return merged;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));//[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]