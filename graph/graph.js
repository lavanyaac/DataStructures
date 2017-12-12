function Graph (){
	this.vertices = [];
	this.edges = [];
	this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex){
	this.vertices.push(vertex);
	this.edges[vertex] = [];
};

Graph.prototype.removeVertex = function(vertex){
	const index = this.vertices.indexOf(vertex);
	if(index !== -1){
		this.vertices.splice(index, 1);
	}
	while(this.edges[vertex].length > 0){
		const adjacentVertex = this.edges[vertex].pop();
		this.removeEdge(adjacentVertex, vertex);
	}
};

Graph.prototype.addEdge = function(vertex1, vertex2){
	this.edges[vertex1].push(vertex2);
	this.edges[vertex2].push(vertex1);
	this.numberOfEdges++;
};

Graph.prototype.removeEdge = function(vertex1, vertex2){
	const index1 = this.edges[vertex1]? this.edges[vertex1].indexOf(vertex2): -1;
	const index2 = this.edges[vertex2]? this.edges[vertex2].indexOf(vertex1): -1;
	if(index1 !== -1){
		this.edges[vertex1].splice(index1, 1);
		this.numberOfEdges--;
	}
	if(index2 !== -1){
		this.edges[vertex2].splice(index2, 1);
	}
};

Graph.prototype.print = function(){
	console.log(this.vertices.map(function(vertex){
		return (vertex + '->' + this.edges[vertex].join(', ')).trim();
	}, this).join(' | '));
};

Graph.prototype.traverseBFS = function(vertex){
	if(this.vertices.indexOf(vertex) === -1){
		return;
	}
	const queue = [];
	const visited = [];

	queue.push(vertex);
	visited[vertex] = true;

	while(queue.length > 0){
		const node = queue.shift();
		console.log(node);

		for(let i = 0; i<this.edges[node].length; i++){
			const edges = this.edges[node];
			if(!visited[edges[i]]){
				visited[edges[i]] = true;
				queue.push(edges[i]);
			}
		}
	}
};

Graph.prototype.traverseDFS = function(vertex){
	if(this.vertices.indexOf(vertex) === -1){
		return;
	}
	const visited = [];
	this._DFShelper(vertex, visited);
};

Graph.prototype._DFShelper = function(vertex, visited){
	visited[vertex] = true;
	console.log(vertex);

	for(let i = 0; i<this.edges[vertex].length; i++){
		if(!visited[this.edges[vertex][i]]){
			this._DFShelper(this.edges[vertex][i], visited);
		}
	}
};

Graph.prototype.size = function() {
  return this.vertices.length;
};
Graph.prototype.relations = function() {
  return this.numberOfEdges;
};
var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print();

graph.traverseBFS(1);

graph.print();

graph.traverseDFS(1);

graph.removeEdge(1, 2);
graph.print();

graph.removeVertex(5);
graph.print();




