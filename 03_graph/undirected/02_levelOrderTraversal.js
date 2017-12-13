const Graph = require('../unDirectedGraph')

//********************************************************************************
// Level order printing of Graph
//********************************************************************************

const levelOrderTraversal = (graph) => {

	const queue = [];
	const visited = [];
	const results = [];
	let level = 0;

	const firstVertex = graph.vertices[0];
	queue.push(firstVertex);
	visited[firstVertex] = true;

	while(queue.length){
		let counter = queue.length;
		results[level]  = results[level] || [];
		while(counter > 0){
			const vertex = queue.shift();
			results[level].push(vertex);
			for(let i=0; i<graph.edges[vertex].length; i++){
				if(!visited[graph.edges[vertex][i]]){
					visited[graph.edges[vertex][i]] = true;
					queue.push(graph.edges[vertex][i]);
				}
			}
			--counter;
		}
		++level;
	}
	return results;
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
console.log(levelOrderTraversal(graph)); // [ [ 1 ], [ 2, 5, 13 ], [ 3, 4, 14 ], [ 16, 15 ] ]