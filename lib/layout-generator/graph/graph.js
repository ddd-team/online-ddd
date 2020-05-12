const Node = require('./node');


class Graph {
  constructor(structure) {
    this.nodes = structure.Domains.map(d => new Node(d.name))

  }
}

module.exports = Graph