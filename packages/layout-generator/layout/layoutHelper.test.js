const sut = require('./layoutHelper');

test('findCenter should return average of coordinates', () => {
  const nodes = [
    createNode([0,1]),
    createNode([0,2]),
    createNode([0,3])
  ]

    const [x, y] = sut.findCenter(nodes);

    expect(x).toBe(0);
  expect(y).toBe(2);
});

test('findClosest should return node closest to point', () => {
  const nodes = [
    createNode([0,1], 'A'),
    createNode([0,2], 'B'),
    createNode([0,3], 'C')
  ]

  const node = sut.findClosest(1, 3, nodes);

  expect(node).toBe(nodes[2]);
});

function createNode(tuple, name = 'name') {
    return{
        x: tuple[0],
        y: tuple[1],
      name: name
    }
}