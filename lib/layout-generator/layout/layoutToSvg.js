const d3 = require('d3');


function createSvg(doc, layout) {
    return d3.select(doc).select('body').append('svg').node()
}

module.exports = {
    createSvg
};