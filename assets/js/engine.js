var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var camera = new THREE.PerspectiveCamera(10, canvasWidth / canvasHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xf9f9f9, 1);
renderer.setSize( canvasWidth, canvasHeight );
document.querySelector('body').appendChild( renderer.domElement );

var geometry0 = createWireCubeVertices(10);
var geometry1 = createWireCubeVertices(5);
var geometry2 = createWireCubeVertices(2.5);
var geometry3 = createWireCubeVertices();

var material = new THREE.LineBasicMaterial({ color: 0x000000 });
var cube0 = new THREE.Line(geometry0, material);
var cube1 = new THREE.Line(geometry1, material);
var cube2 = new THREE.Line(geometry2, material);
var cube3 = new THREE.Line(geometry3, material);
scene.add(cube0);
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

function createWireCubeVertices(length = 1){
  let cubeGeometry = new THREE.Geometry();
  cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, -length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, -length, length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, length, length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, length, length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, -length, -length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, -length, length));
  cubeGeometry.vertices.push(new THREE.Vector3(length, length, length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, length, length));
  cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, length));
  return cubeGeometry;
}

function resize(){
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  document.querySelector('canvas').style.width = canvasWidth+'px';
  document.querySelector('canvas').style.height = canvasHeight+'px';
  camera.aspect = canvasWidth / canvasHeight ;
  camera.updateProjectionMatrix();
  renderer.setSize( canvasWidth, canvasHeight );
}
window.addEventListener('resize', resize);

let firstLoad = true;
var mousePos = {x: 0, y: 0, x1: 0, y1: 0, x2: 1, y2: 1};

function getMousePos(evt){
  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY;
  if(firstLoad) {
    mousePos.x = evt.clientX;
    mousePos.y = evt.clientY;
    mousePos.x1 = mousePos.x;
    mousePos.y1 = mousePos.y;
    mousePos.x2 = mousePos.x1 + 1;
    mousePos.y2 = mousePos.y1 + 1;
    firstLoad = false;
  }
}
document.addEventListener('mousemove', getMousePos);
//document.addEventListener('touchmove', getMousePos);

clock = new THREE.Clock();

var rotateDelta = {x: 0, y: 0};

function rotateInertia() {
  rotateDelta.x = mousePos.x1 - mousePos.x2;
  rotateDelta.y = mousePos.y1 - mousePos.y2;
  
  cube0.rotation.y += rotateDelta.x / 1000;
  cube0.rotation.x += rotateDelta.y / 1000;
  cube1.rotation.y -= rotateDelta.x / 2000;
  cube1.rotation.x -= rotateDelta.y / 2000;
  cube2.rotation.y += rotateDelta.x / 4000;
  cube2.rotation.x += rotateDelta.y / 4000;
  cube3.rotation.y -= rotateDelta.x / 8000;
  cube3.rotation.x -= rotateDelta.y / 8000;
}

function render() {
  if(mousePos.x != mousePos.x1 && mousePos.y != mousePos.y1) {
    rotateInertia();
    mousePos.x2 = mousePos.x1;
    mousePos.y2 = mousePos.y1;
    mousePos.x1 = mousePos.x;
    mousePos.y1 = mousePos.y;
  } else {
    rotateInertia();
  }

	requestAnimationFrame(render);
	clock.getElapsedTime();
	renderer.render(scene, camera);
}
render();