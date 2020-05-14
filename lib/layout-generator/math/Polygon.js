class Polygon {
  constructor(points) {
    this.lines = points.reduce((a, v, i) => {
      a.push(new Line(points[i], points[i-1]))
      return a;
    }, []);
  }
}

class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
}


module.exports = Polygon;