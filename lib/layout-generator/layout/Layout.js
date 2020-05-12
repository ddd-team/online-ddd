class Layout {
  constructor(layoutNodes, layoutEdges) {
    this.nodes = layoutNodes
    this.edges = layoutEdges
  }
}

class LayoutNode {
  constructor(node) {
    this.node = node
    this.width = 100
    this.height = 100
  }

}

class LayoutEdge {
  constructor(edge) {
    this.edge = edge
  }
}

module.exports = {
    Layout,
  LayoutNode,
  LayoutEdge
};