// breadthFirstTraversal
const { breadthFirstTraversal, breadthFirstTraversalRecursive } = require('./breadth-first-traversal')

test('BFT',
    () => { 
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

//breadthFirstTraversalRecursive
test('BFT recursive',
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
);  
