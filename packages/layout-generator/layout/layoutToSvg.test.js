const sut = require('./layoutToSvg');
const layoutHelper = require('./layoutHelper')
const jsdom = require('jsdom')
const d3 = require('d3');


let doc = undefined;
beforeEach(function () {
    doc = new jsdom.JSDOM().window.document
});
test('createSvg should return an svg element', () => {
    const result = sut.createSvg(doc, layoutHelper.createLayout([]));

    expect(result.nodeName).toBe('svg')
});

test('createSvg should create one Rect for each node.', () => {
    const result = sut.createSvg(doc, layoutHelper.createLayout(['A', 'B']));

    expect(result.childElementCount).toBe(2)
});

test('createLayout should place nodes according to layout', () => {
    const layout = layoutHelper.createLayout(['A', 'B'])
    const result = sut.createSvg(doc, layout);

    layout.nodes.forEach((n) => {
        const el = d3.select(result).select(`#${n.node.name}`)
        expect(Number(el.attr('x'))).toBe(n.x)
        expect(Number(el.attr('y'))).toBe(n.y)
        expect(Number(el.attr('width'))).toBe(n.width)
        expect(Number(el.attr('height'))).toBe(n.height)
    });
});
