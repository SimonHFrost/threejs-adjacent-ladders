const THREE = require('three')

const initialize = require('./initializer.js').initialize
const createAmbientLight = require('./object-creator.js').createAmbientLight
const createDirectionalLight = require('./object-creator.js').createDirectionalLight

const output = initialize()
const scene = output.scene

const drawLine = (a1, a2, b1, b2) => {
  var curve = new THREE.LineCurve(
    new THREE.Vector2(a1, a2),
    new THREE.Vector2(b1, b2)
  );

  var points = curve.getPoints( 10 )
  var geometry = new THREE.BufferGeometry().setFromPoints( points )
  var material = new THREE.LineBasicMaterial({
    color : 0xffffff,
    linewidth: 50 // doesn't do anything?
  })
  var curveObject = new THREE.Line( geometry, material )

  scene.add(curveObject)
}

for (let i = 0; i < 10; i++) {
  let pos = (i - 4.5) * 10
  drawLine(pos, -50, pos, 50)
}

scene.add(createAmbientLight())
scene.add(createDirectionalLight())
