const Graph = require('./graph');


test('constuctor should generate nodes', () => {
    const item = createGraph(['First', 'Second'])

    expect(item.nodes.length).toBe(2);
});

test('constuctor should add edges to nodes', () => {
    const item = createGraph(['First', 'Second'], [['First', 'Second']])

    expect(item.nodes[0].edges.length).toBe(1);
});


function createGraph(domains, edges = []) {
    return new Graph({
        Domains: domains.map(name => {
            return {
                name: name
            }
        }),
        Deps: edges.map( tuple => {
            return {
                from: tuple[0],
                to: tuple[1]
            }
        })
    })
}