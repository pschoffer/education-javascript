
//     a
//    / \
//   b   c
//  / \
// d   e

// a: [b,c],
// b: [d,e],
// c: [],
// d: [],
// e: [],


// DFT: a - b - d - e - c
// BFT: a - b - c - d - e



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

        expect(nodes).toStrictEqual(expectedNodes);
    }
);


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