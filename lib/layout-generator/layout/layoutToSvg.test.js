const sut = require('./layoutToSvg');
const layoutHelper = require('./layoutHelper')

test('createSvg should return an svg element', () => {
    const result = sut.createSvg(layoutHelper.createLayout([]));

    // Add expect here to see that we get an SVG
});

// test('createSvg should create one Rect for each node.', () => {
//     sut.createSvg(layoutHelper.createGraph(['A', 'B']));
// });
