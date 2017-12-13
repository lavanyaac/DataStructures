function DirectedGraph (){
	this.vertices = [];
	this.edges = [];
	this.numberOfEdges = 0;
}

DirectedGraph.prototype.addVertex = function(vertex){
	this.vertices.push(vertex);
	this.edges[vertex] = [];
};

DirectedGraph.prototype.removeVertex = function(vertex){
	const index = this.vertices.indexOf(vertex);
	if(index !== -1){
		this.vertices.splice(index, 1);
	}
	while(this.edges[vertex].length > 0){
		const adjacentVertex = this.edges[vertex].pop();
		this.removeEdge(adjacentVertex, vertex);
	}
};

DirectedGraph.prototype.addEdge = function(vertex1, vertex2){
	this.edges[vertex1].push(vertex2);
	// this.edges[vertex2].push(vertex1);
	this.numberOfEdges++;
};

DirectedGraph.prototype.removeEdge = function(vertex1, vertex2){
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

DirectedGraph.prototype.print = function(){
	console.log(this.vertices.map(function(vertex){
		return (vertex + '->' + this.edges[vertex].join(', ')).trim();
	}, this).join(' | '));
};

DirectedGraph.prototype.traverseBFS = function(vertex){
	const results = []

	if(this.vertices.indexOf(vertex) === -1){
		return results;
	}
	const queue = [];
	const visited = [];
	

	queue.push(vertex);
	visited[vertex] = true;

	while(queue.length > 0){
		const node = queue.shift();
		results.push(node);

		for(let i = 0; i<this.edges[node].length; i++){
			const edges = this.edges[node];
			if(!visited[edges[i]]){
				visited[edges[i]] = true;
				queue.push(edges[i]);
			}
		}
	}
	return results;
};

DirectedGraph.prototype.traverseDFS = function(vertex){
	if(this.vertices.indexOf(vertex) === -1){
		return;
	}
	const visited = [];
	const results = [];
	this._DFShelper(vertex, visited, results);
	return results;
};

DirectedGraph.prototype._DFShelper = function(vertex, visited, results){
	visited[vertex] = true;
	results.push(vertex);

	for(let i = 0; i<this.edges[vertex].length; i++){
		if(!visited[this.edges[vertex][i]]){
			this._DFShelper(this.edges[vertex][i], visited, results);
		}
	}
};

DirectedGraph.prototype.size = function() {
  return this.vertices.length;
};
DirectedGraph.prototype.relations = function() {
  return this.numberOfEdges;
};

module.exports =  DirectedGraph;

// var DirectedGraph = new DirectedGraph();
// DirectedGraph.addVertex(1);
// DirectedGraph.addVertex(2);
// DirectedGraph.addVertex(3);
// DirectedGraph.addVertex(4);
// DirectedGraph.addVertex(5);
// DirectedGraph.addVertex(6);
// DirectedGraph.addEdge(1, 2);
// DirectedGraph.addEdge(1, 5);
// DirectedGraph.addEdge(2, 3);
// DirectedGraph.addEdge(2, 5);
// DirectedGraph.addEdge(3, 4);
// DirectedGraph.addEdge(4, 5);
// DirectedGraph.addEdge(4, 6);
// DirectedGraph.print();

// console.log(DirectedGraph.traverseBFSWithLevel(1));

// DirectedGraph.print();

// console.log(DirectedGraph.traverseDFS(1));

// DirectedGraph.removeEdge(1, 2);
// DirectedGraph.print();

// DirectedGraph.removeVertex(5);
// DirectedGraph.print();




