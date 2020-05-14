const {Polygon, Line, Point} = require('./Polygon');

test('Polygon constructor should create lines', () => {
    const points =[[0,0], [1,0], [0,1]]
    const pol = new Polygon(points)

    expect(pol.lines.length).toBe(3);
    points.forEach((v, i) => {
        expect(pol.lines[i].p1.x).toBe(v[0])
        expect(pol.lines[i].p1.y).toBe(v[1])
    })
});

// test('Polygon closestPoint should return closes point in polygon', () => {
//     const points =[[0,0], [1,0], [1,1], [0, 1]]
//     const pol = new Polygon(points)
//
//     const [x, y] = pol.closestPoint(-1, 0.5);
//
//     expect(x).toBe(0);
//     expect(y).toBe(0.5);
// });

// test('Line project should project onto middle of line', () => {
//     const line = new Line([0, 0], [0, 1])
//
//     const point = new Point(-1, 0.5)
//
//     const closest = line.closestPoint(point)
//     expect(closest.x).toBe(0);
//     expect(closest.y).toBe(0.5);
// });
