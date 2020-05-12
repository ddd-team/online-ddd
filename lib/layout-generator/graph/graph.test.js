const Graph = require('./graph');


test('constuctor should generate nodes', () => {
    const item = new Graph({
        Domains: [
            {
                Name: 'First'
            },
            {
                Name: 'Second'
            }
        ]
    });

    expect(item.nodes.length).toBe(2);
});