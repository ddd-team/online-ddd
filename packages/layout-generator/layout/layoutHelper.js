const layoutService = require('./layoutService');

const graphHelper = require('../graph/graphHelper');

function createLayout(domains, edges = []) {
  const graph = graphHelper.createGraph(...arguments)
  return layoutService.createLayout(graph)
}

function findCenter(nodes) {
  const summedValues = nodes.reduce((a, v) => {
    a[0] += v.x
    a[1] += v.y
    return a
  }, [0, 0])

  summedValues[0] /= nodes.length
  summedValues[1] /= nodes.length
  return summedValues
}

function findClosest(x, y, nodes) {
  let shortestDist = Number.MAX_VALUE
  return nodes.reduce((a,v) => {
    const dist = getDist(v.x, v.y, x, y)
    if(dist < shortestDist) {
      shortestDist = dist
      return v;
    }
    return a;
  })
}

function getDist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
}

module.exports = {
  createLayout,
  findCenter,
  findClosest
}