const Graph = require('../graph')

//********************************************************************************
// Find the length of shortest path(how many levels to find shortest path) between 
// 2 vertices of an undirected and unweighted graph
//********************************************************************************
const levelOfSecondVertex = (graph, vertex1, vertex2) => {
	if(graph.vertices.indexOf(vertex1) === -1){
		return;
	}

	const queue = [];
	const visited = [];
	let counter = 0;

	queue.push(vertex1);
	visited[vertex1] = true;

	while(queue.length){
		let level = queue.length;
		while(level > 0){
			const vertex = queue.shift();
			// console.log(vertex, counter);
			if(vertex === vertex2){
				return counter;
			}
			for(let i=0; i<graph.edges[vertex].length; i++){
				if(!visited[graph.edges[vertex][i]]){
					visited[graph.edges[vertex][i]] = true;
					queue.push(graph.edges[vertex][i]);
				}
			}
			--level;
		}
		++counter;
	}
	return -1;
}	

//*********************************************************************************
var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(13);
graph.addVertex(14);
graph.addVertex(15);
graph.addVertex(16);

graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(1, 13);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(5, 4);
graph.addEdge(13, 14);
graph.addEdge(14, 15);
graph.addEdge(15, 16);
graph.addEdge(16, 4);

graph.print();//1->2, 5, 13 | 2->1, 3 | 3->2, 4 | 4->3, 5, 16 | 5->1, 4 | 13->1, 14 | 14->13, 15 | 15->14, 16 | 16->15, 4
console.log(levelOfSecondVertex(graph, 1, 4)); // 2