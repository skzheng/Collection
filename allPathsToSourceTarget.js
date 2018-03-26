function allPathsToSourceTarget(graph){
  let paths = [];
  
  (function explore(node,path){
    if(node === graph.length - 1){
      paths.push(path.concat(graph.length - 1));
    } else {
      for(let i = 0 ; i < graph[node].length ; i++){
        explore(graph[node][i], path.concat(node))
      }
    }
  })(0, [])
  
  return paths;
}


allPathsToSourceTarget([[1,2], [3], [3], []] ); // [[0,1,3], [0,2,3]]

/* ==============================================

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Note:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.

// i // arr // graph nodes, representing possible edges 
// o // arr // paths from graph[0] to graph[N-1]
// c // --- 
// e // --- 

Strategy: 
Our start point is graph[0], end point is graph[N-1]
At our start point we can explore the nodes that we have a connection to 
These nodes may lead to our destination N - 1, but as we recursively search 
  we can keep track of our path and then push to our collection of we hit N-1
Retun all paths

*/
