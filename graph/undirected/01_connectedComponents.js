const Graph = require('../graph')

//Modify graph DFS method to accept visited array along with vertex;
Graph.prototype.traverseDFS = function(vertex, visited){
	if(this.vertices.indexOf(vertex) === -1){
		return;
	}
	const results = [];
	this._DFShelper(vertex, visited, results);
	return results;
}
//**************************************************************************
// Print the connected components to-gether
//**************************************************************************
const connectedComponents = (graph) => {
	const results = [];
	const visited = [];

	graph.vertices.forEach(vertex => {
		if(!visited[vertex]){
			results.push(graph.traverseDFS(vertex, visited));
		}
	});

	return results;
}
//**************************************************************************

var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(5, 6);
graph.addEdge(5, 7);

// graph.print();  //1->2, 3 | 2->1 | 3->1, 4 | 4->3 | 5->6, 7 | 6->5 | 7->5 | 8->

console.log(connectedComponents(graph)); //[ [ 1, 2, 3, 4 ], [ 5, 6, 7 ], [ 8 ] ]