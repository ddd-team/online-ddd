class Layout {
  constructor(layoutNodes, layoutEdges) {
    this.nodes = layoutNodes
    this.edges = layoutEdges
  }

  findNode(id) {
    return this.nodes.find(n => n.node.name === id)
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