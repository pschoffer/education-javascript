
// Iterative approach
function breadthFirstTraversal(graph, root) {
    
    // QUEUE - FIFO - BFT
    //      [  ]  a
    //      [ a  ] b   
    //   <- [ a b ] 
    // a <- [ b  ]  

    // STACK - LIFO
    // [   ] a
    // [ a  ] b
    // [ a b  ] ->
    // [ a  ] b

    let queue = [];

    queue.push(root);
    // queue = [ a ]

    const nodes = [];

    while ( queue.length ) {
        const currentNode = queue.shift();
        // ACTION 
        nodes.push(currentNode);
        /*
        when I say explode, I mean just the part that generates kids for parent not 
        processing them yet (which explore implies also procesing a bit to me).  
        */
        // EXPLODE (Children)
        const children = graph[currentNode];
        queue = queue.concat(children);

        console.log("My Test", currentNode, '=>', children, "QUEUE", queue);

    }

    return nodes;
}


// RECURSIVE approach
/* function breadthFirstTraversalRecursive(graph, currentNode, queue = []) {
    return [];
} */


// EXPORT CHANGES 
module.exports = {
    breadthFirstTraversal,
  //  breadthFirstTraversalRecursive
}