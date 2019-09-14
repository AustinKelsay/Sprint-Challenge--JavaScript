// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMAker2 {
  constructor(param){
    this.length = param.length;
    this.width = param.width;
    this.height = param.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surface() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
  }
  


  
  const cube2 = new CuboidMAker2({
    length: 4,
    width: 5,
    height: 5
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube2.volume()); // 100
console.log(cube2.surface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMAker2 {
  constructor(param){
    super(param)
  }

  cubeVolume() {
    return (this.length * this.length * this.length);
  }

  cubeSurface() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
}

const cube3 = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});


console.log(cube3.cubeVolume()); 
console.log(cube3.cubeSurface());