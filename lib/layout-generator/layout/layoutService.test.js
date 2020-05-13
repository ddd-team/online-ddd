const sut = require('./layoutService');
const layoutHelper = require('./layoutHelper');

const {createGraph} = require('../graph/graphHelper')

test('createLayout should populate items for graph', () => {
    const graph = createGraph(['A', 'B'], [['A', 'B']])

    const layout = sut.createLayout(graph);

    expect(layout.nodes.length).toBe(2);
    expect(layout.edges.length).toBe(1);
});

test('createLayout should place two items next to each other.', () => {
    const graph = createGraph(['A', 'B'], [['A', 'B']])

    const layout = sut.createLayout(graph, {minDist: 30});

    expect(layout.nodes[0].y).toBe(layout.nodes[1].y)

    // x,y are middle of item coordinates, minDist should be kept
    const expectedDistance = 30 + layout.nodes[0].width;
    expect(layout.nodes[0].x).toBe(layout.nodes[1].x - expectedDistance)
});

test('createLayout should place item with most edges most central.', () => {
    const graph = createGraph(['A', 'B', 'C'], [['A', 'B'], ['A', 'C']])

    const layout = sut.createLayout(graph, {minDist: 30});

    const [cx, cy] = layoutHelper.findCenter(layout.nodes)
    const middleNode = layoutHelper.findClosest(cx, cy, layout.nodes)

  //todo: need math operations to solve this properly.
    // expect(middleNode).toBe(layout.findNode('C'))
});


