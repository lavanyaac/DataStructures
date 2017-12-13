const Graph = require('../directedGraph')

//********************************************************************************
// Topological Sort 
//********************************************************************************

const topologicalSort = (graph) => {
	const visited = [];
	const postOrderArr = [];
	for ( const vertex of graph.vertices){
		if (!visited[vertex]){
			dfsHelper(graph, vertex, visited, postOrderArr);
		}
	}
	return postOrderArr.reverse();
}

function dfsHelper(graph, vertex, visited, postOrderArr){
	visited[vertex] = true;

	for(const v of graph.edges[vertex]){
		if(!visited[v]){
			dfsHelper(graph, v, visited, postOrderArr);
		}
	}
	postOrderArr.push(vertex);
}

var graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(0, 5);
graph.addEdge(0, 1);
graph.addEdge(3, 5);
graph.addEdge(5, 2);
graph.addEdge(6, 0);
graph.addEdge(1, 4);
graph.addEdge(0, 2);
graph.addEdge(3, 6);
graph.addEdge(3, 4);
graph.addEdge(6, 4);
graph.addEdge(3, 2);
graph.print();//0->5, 1, 2 | 1->4 | 2-> | 3->5, 6, 4, 2 | 4-> | 5->2 | 6->0, 4

console.log(topologicalSort(graph));
