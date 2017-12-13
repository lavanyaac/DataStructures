const Graph = require('../unDirectedGraph')

//********************************************************************************
// Find the cycle in a graph
//********************************************************************************

const isCyclic = (graph) => {
	const visited = [];
	return dfsHelper2(graph, graph.vertices[0], visited);
}

function dfsHelper2(graph, vertex, visited, parent){
	visited[vertex] = true;
	for(let i of graph.edges[vertex]){
		if(!visited[i]){
			if(dfsHelper2(graph, i, visited, vertex)){
				return true;
			}
		}else if(i !== parent){
			return true;
		}
	}
	return false;
}

var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);//comment it for false result
graph.addEdge(2, 6);
graph.addEdge(3, 4);
graph.addEdge(4, 6);
graph.print();//1->2, 5 | 2->1, 3, 6 | 3->2, 4 | 4->3, 6 | 5->1 | 6->2, 4

console.log(isCyclic(graph));//true
