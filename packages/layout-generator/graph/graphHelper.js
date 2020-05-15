const Graph = require('./graph');

function createGraph(domains, edges = []) {
  return new Graph({
    Domains: domains.map(name => {
      return {
        name: name
      }
    }),
    Deps: edges.map( tuple => {
      return {
        from: tuple[0],
        to: tuple[1]
      }
    })
  })
}

module.exports = {
    createGraph
};
