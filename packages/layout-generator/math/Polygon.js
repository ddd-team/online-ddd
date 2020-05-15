class Polygon {
  constructor(points) {
    this.lines = points.reduce((a, v, i) => {
      const prev = i - 1 < 0 ? points.length - 1 : i -1;
      a.push(new Line(points[i], points[prev]))
      return a;
    }, []);
  }

  closestPoint(x, y) {

    const point = new Point(x, y)
    let bestDistance = Number.MAX_VALUE
    const bestPoint = this.lines.reduce((a,v) => {
      const d = v.closestDistance(point)
      console.log(point, v, d)
      if (d < bestDistance) {
        bestDistance = d
        return v.closestPoint(point)
      }
      return a;
    }, undefined)

    return [bestPoint.x, bestPoint.y]
  }
}

class Line {
  constructor(p1, p2) {
    this.p1 = new Point(p1[0], p1[1]);
    this.p2 = new Point(p2[0], p2[1]);
  }

  closestDistance(point) {
    const projectResult = this.project(point)
    if(projectResult.pFactor < 0) {
      return this.p1.distance(point)
    } else if (projectResult.pFactor > 1) {
      return this.p2.distance(point)
    } else
      return projectResult.pDistance
  }

  closestPoint(point) {
    const projectResult = this.project(point)
    console.log(projectResult)
    if(projectResult.pFactor < 0) {
      return this.p1
    } else if (projectResult.pFactor > 1) {
      return this.p2
    } else {
      const p1p2 = new Vector(this.p2.minusPoint(this.p1));
      return this.p1.plus(p1p2.scale(projectResult.pFactor));
    }
  }

  /**
   * Projects a point onto the line. Returns an object containing two properties:
   * projectionDistance: The distance between the given point and the projected point.
   * projectionFactor: The factor you would need to multiply the vector p1->p2 to reach the projected point p' when starting from p1.
   * @param point
   * This is the point to project onto the Line.
   */
  project(point) {
    const p1p2 = Vector.fromPoint(this.p2.minusPoint(this.p1))
    const p1p3 = Vector.fromPoint(this.p2.minusPoint(this.p1))
    const pFactor = p1p2.dotProd(p1p3) / p1p2.dotProd(p1p2)
    const newPoint = this.p1.plus(p1p2.scale(pFactor))
    const vect = point.minusPoint(newPoint)
    const pDistance = vect.norm2();
    return {
      pFactor,
      pDistance
    }
  }
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(otherVector) {
    return new Point(this.x + otherVector.x, this.y + otherVector.y);
  }

  minus(otherVector) {
    return this.plus(otherVector.negate());
  }

  distance(otherPoint) {
    return this.minusPoint(otherPoint).norm2();
  }

  minusPoint(otherPoint) {
    return new Vector(this.x - otherPoint.x, this.y - otherPoint.y)
  }

}

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static fromPoint(p) {
    return new Vector(p.x, p.y)
  }
  scale(factor) {
    return new Vector(factor * this.x, factor * this.y)
  }

  dotProd(otherVector) {
    return this.x * otherVector.x + this.y * otherVector.y
  }

  negate() {
    return new Vector(-this.x, -this.y)
  }

  norm2() {
    return Math.sqrt(this.dotProd(this));
  }
}



module.exports = {
  Polygon,
  Line,
  Point,
  Vector
};