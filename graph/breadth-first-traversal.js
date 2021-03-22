
// Iterative approach
function breadthFirstTraversal(graph, root) {
    
    let queue = [];

    queue.push(root);

    const nodes = [];

    while ( queue.length ) {

        const currentNode = queue.shift();
        // ACTION
        nodes.push(currentNode);
        // EXPLODE
        const children = graph[currentNode];
        // STACK children at the back of the queue
        queue = queue.concat(children);
    } 
    return nodes;
}


// RECURSIVE approach
function breadthFirstTraversalRecursive(graph, currentNode, queue = []) {
    // ACTION 
    const nodes = [currentNode];
    // EXPLODE
    const children = graph[currentNode];
    // STACK children at the back of the queue;
    const newQueue = queue.concat(children);
    // if newQueue is empty
    if (!newQueue.length) {
    // return nodes
        return nodes;
    } else {
        // get new currentNode
        const newCurrentNode = newQueue.shift();
        // get remaining nodes
        const restOfNodes = breadthFirstTraversalRecursive(graph, newCurrentNode, newQueue);
        // return nodes with restOfNodes
        return nodes.concat(restOfNodes);
    }
    
} 

// EXPORT 
module.exports = {
    breadthFirstTraversal,
    breadthFirstTraversalRecursive
} 