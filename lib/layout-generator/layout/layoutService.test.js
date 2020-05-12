const sut = require('./layoutService');
const {createGraph} = require('../graph/graphHelper')

test('createLayout should populate items for graph', () => {
    const graph = createGraph(['A', 'B'], [['A', 'B']])

    const layout = sut.createLayout(graph);

    expect(layout.nodes.length).toBe(2);
    expect(layout.edges.length).toBe(1);
});



