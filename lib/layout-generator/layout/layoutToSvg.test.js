const sut = require('./layoutToSvg');
const layoutHelper = require('./layoutHelper')
const jsdom = require('jsdom')

let doc = undefined;
beforeEach(function () {
    doc = new jsdom.JSDOM().window.document
});
test('createSvg should return an svg element', () => {
    const result = sut.createSvg(doc, layoutHelper.createLayout([]));

    expect(result.nodeName).toBe('svg')
});

// test('createSvg should create one Rect for each node.', () => {
//     sut.createSvg(layoutHelper.createGraph(['A', 'B']));
// });
