const {Layout, LayoutNode, LayoutEdge}  = require ('./Layout')


function createLayout(graph, rules = {
  minDist : 30
}) {
  const lNodes = graph.nodes.map(n => new LayoutNode(n))
  const lEdges = graph.edges.map(e => new LayoutEdge(e))

  lNodes.forEach((v, i) => {
    v.x = i * (v.width + rules.minDist)
    v.y = 0
  });

   return  new Layout(lNodes, lEdges);
}

module.exports = {
    createLayout
};