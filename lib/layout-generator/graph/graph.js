const Node = require('./node');
const Edge = require('./edge');


class Graph {
  constructor(structure) {
    this.nodes = structure.Domains.map(d => new Node(d.name))
    this.edges = []

    structure.Deps.forEach(dep => {
      const fromNode = this.nodes.find(n => n.name === dep.from)
      const toNode = this.nodes.find(n => n.name === dep.to)

      const edge = new Edge(fromNode, toNode)
      this.edges.push(edge)

      fromNode.edges.push(edge)
    })

  }
}

module.exports = Graph