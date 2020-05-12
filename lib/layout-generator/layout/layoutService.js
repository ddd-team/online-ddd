const {Layout, LayoutNode, LayoutEdge}  = require ('./Layout')


function createLayout(graph, rules = {
  minDist : 30
}) {
  console.log(graph)
  const lNodes = graph.nodes.map(n => new LayoutNode(n))
  const lEdges = graph.edges.map(e => new LayoutEdge(e))

   return  new Layout(lNodes, lEdges);
}

module.exports = {
    createLayout
};