
// VISUAL GRAPH

//     a     root
//    / \
//   b   c   1st level
//  / \
// d   e     2nd level

//  1st step. traversal
//  2nd step. action to node

// VISUAL OBJECT - convert graph to an object

// a: [b,c],   
// b: [d,e],
// c: [],
// d: [],
// e: [],


// DFT: a - b - d - e - c            

// BFT: a - b - c - d - e        level by level

// IMPORT modules
// desctruct key in order to use directly
// breadthFirstTraversalRecursive 
const { breadthFirstTraversal } = require('./breadth-first-traversal')

test('BFT',
    () => {
    /* 
        use const as much as possible - to avoid mutable state
    */    
        const graph = {
            a: ['b', 'c'],
            b: ['d', 'e'],
            c: [],
            d: [],  
            e: [],
        }

        const nodes = breadthFirstTraversal(graph, 'a');

        const expectedNodes = ['a', 'b', 'c', 'd', 'e'];

        // less strict than toBe();
        expect(nodes).toStrictEqual(expectedNodes);
    }
);


/* test('BFT recursive',
    () => {
        const graph = {
            a: ['b', 'c'],
            b: ['d', 'e'],
            c: [],
            d: [],
            e: [],
        }

        const nodes = breadthFirstTraversalRecursive(graph, 'a');
    
        const expectedNodes = ['a', 'b', 'c', 'd', 'e'];

        expect(nodes).toStrictEqual(expectedNodes);
    }
);  */
