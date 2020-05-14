const Polygon = require('./Polygon');

test('constructor should create lines', () => {
    const points =[[0,0], [1,0], [0,1]]
    const pol = new Polygon(points)

    expect(pol.lines.length).toBe(3);
    points.forEach((v, i) => {
        expect(pol.lines[i].p1[0]).toBe(v[0])
        expect(pol.lines[i].p1[1]).toBe(v[1])
    })
});

