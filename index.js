// Your code here
class Polygon {
  constructor (sideArray) {
    this.sideArray = sideArray
  }

  get countSides () {
    return this.sideArray.length
  }

  get perimeter () {
    return this.sideArray.reduce((memo, e) => memo + e)
  }

}

class Triangle extends Polygon {
  get isValid () {
    const truthCheck = (this.sideArray[0] < this.sideArray[1] + this.sideArray[2]) && 
      (this.sideArray[1] < this.sideArray[0] + this.sideArray[2]) && 
      (this.sideArray[2] < this.sideArray[0] + this.sideArray[1])
    return !!truthCheck
  }
}

class Square extends Polygon {
  get isValid () {
    const sides = [...new Set(this.sideArray)]
    return (!!(sides.length === 1))
  }

  get area () {
    return (this.sideArray[0]**2)
  }

}