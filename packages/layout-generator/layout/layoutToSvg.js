const d3 = require('d3');


function createSvg(doc, layout) {
  const d3Svg = d3.select(doc).select('body').append('svg')

  const nodeEls = d3Svg.selectAll('.domain')
    .data(layout.nodes)
    .enter()
    .append('rect')

  nodeEls
    .attr('id', (d) => d.node.name)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)

    return d3Svg.node()
}

module.exports = {
    createSvg
};