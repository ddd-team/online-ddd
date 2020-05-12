const layoutService = require('./layoutService');

const graphHelper = require('../graph/graphHelper');

function createLayout(domains, edges = []) {
  const graph = graphHelper.createGraph(...arguments)
  return layoutService.createLayout(graph)
}

module.exports = {
  createLayout
}