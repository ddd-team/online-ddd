const Graph = require('./graph');

const {createGraph} = require('./graphHelper')

test('constuctor should generate nodes', () => {
    const item = createGraph(['First', 'Second'])

    expect(item.nodes.length).toBe(2);
});

test('constuctor should add edges to nodes', () => {
    const item = createGraph(['First', 'Second'], [['First', 'Second']])

    expect(item.nodes[0].edges.length).toBe(1);
});

test('constructor should add edges to edges array', () => {
    const item = createGraph(['First', 'Second'], [['First', 'Second']])

    expect(item.edges.length).toBe(1);
});


