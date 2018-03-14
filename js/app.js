const THREE = require('three')

const initialize = require('./initializer.js').initialize
const createAmbientLight = require('./object-creator.js').createAmbientLight
const createDirectionalLight = require('./object-creator.js').createDirectionalLight
const createCube = require('./object-creator.js').createCube

const output = initialize()
const scene = output.scene

const loader = new THREE.JSONLoader()

var curve = new THREE.CubicBezierCurve(
	new THREE.Vector2( -10, 0 ),
	new THREE.Vector2( -5, 15 ),
	new THREE.Vector2( 20, 15 ),
	new THREE.Vector2( 10, 0 )
);

var points = curve.getPoints( 50 );
var geometry = new THREE.BufferGeometry().setFromPoints( points );

var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

// Create the final object to add to the scene
var curveObject = new THREE.Line( geometry, material );

scene.add(curveObject)
scene.add(createAmbientLight())
scene.add(createDirectionalLight())
