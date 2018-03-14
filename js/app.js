const THREE = require('three')

const initialize = require('./initializer.js').initialize
const createAmbientLight = require('./object-creator.js').createAmbientLight
const createDirectionalLight = require('./object-creator.js').createDirectionalLight

const output = initialize()
const scene = output.scene

const drawLine = (a1, a2, b1, b2) => {
  console.log(a1, a2, b1, b2)

  var curve = new THREE.LineCurve(
    new THREE.Vector2(a1, a2),
    new THREE.Vector2(b1, b2)
  );

  // overly complicated way to create a line, but looks like it's the best way?
  var points = curve.getPoints( 10 )
  var geometry = new THREE.BufferGeometry().setFromPoints( points )
  var material = new THREE.LineBasicMaterial({
    color : 0xffffff,
    linewidth: 50 // doesn't do anything?
  })
  var curveObject = new THREE.Line( geometry, material )

  scene.add(curveObject)
}

const NUM_COLUMNS = 10
const NUM_ROWS = 15

// Generate columns
for (let i = 0; i < NUM_COLUMNS; i++) {
  let pos = (i - 4.5) * 10
  drawLine(pos, -50, pos, 50)
}

let totals = []
totals.length = NUM_COLUMNS
totals.fill(-50)

for (let i = 0; i < NUM_ROWS; i++) {
  for (let j = 0; j < NUM_COLUMNS; j++) {
    totals[j] += 1 + Math.random() * 10

    if (j === 0) {
      continue;
    }

    let pos = (j - 4.5) * 10
    drawLine(pos - 10, totals[j - 1], pos, totals[j])
  }
}

scene.add(createAmbientLight())
scene.add(createDirectionalLight())
