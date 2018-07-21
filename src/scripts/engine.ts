import * as THREE from 'three'

function Engine() {

  let canvasWidth = window.innerWidth
  let canvasHeight = window.innerHeight
  let camera: any = new THREE.PerspectiveCamera(10, canvasWidth / canvasHeight, 1, 500)
  camera.position.set(0, 0, 100)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  let scene: any = new THREE.Scene()

  let renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(0xf9f9f9, 1)
  renderer.setSize( canvasWidth, canvasHeight )
  document.querySelector('body').appendChild( renderer.domElement )

  let geometry0 = createWireCubeVertices(10)
  let geometry1 = createWireCubeVertices(5)
  let geometry2 = createWireCubeVertices(2.5)
  let geometry3 = createWireCubeVertices()

  let material: any = new THREE.LineBasicMaterial({ color: 0x000000 })
  let cube0: any = new THREE.Line(geometry0, material)
  let cube1: any = new THREE.Line(geometry1, material)
  let cube2: any = new THREE.Line(geometry2, material)
  let cube3: any = new THREE.Line(geometry3, material)
  scene.add(cube0)
  scene.add(cube1)
  scene.add(cube2)
  scene.add(cube3)

  function createWireCubeVertices(length = 1){
    let cubeGeometry = new THREE.Geometry()
    cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, -length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, -length, length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, length, length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, length, length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, -length, -length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, -length, length))
    cubeGeometry.vertices.push(new THREE.Vector3(length, length, length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, length, length))
    cubeGeometry.vertices.push(new THREE.Vector3(-length, -length, length))
    return cubeGeometry
  }

  function resize(){
    canvasWidth = window.innerWidth
    canvasHeight = window.innerHeight
    document.querySelector('canvas').style.width = canvasWidth+'px'
    document.querySelector('canvas').style.height = canvasHeight+'px'
    camera.aspect = canvasWidth / canvasHeight 
    camera.updateProjectionMatrix()
    renderer.setSize( canvasWidth, canvasHeight )
  }
  window.addEventListener('resize', resize)

  let firstLoad = true
  let mousePos = {x: 0, y: 0, x1: 0, y1: 0, x2: 1, y2: 1}

  function getMousePos(evt: MouseEvent){
    mousePos.x = evt.clientX
    mousePos.y = evt.clientY
    if(firstLoad) {
      mousePos.x = evt.clientX
      mousePos.y = evt.clientY
      mousePos.x1 = mousePos.x
      mousePos.y1 = mousePos.y
      mousePos.x2 = mousePos.x1 + 1
      mousePos.y2 = mousePos.y1 + 1
      firstLoad = false
    }
  }
  document.addEventListener('mousemove', getMousePos)
  //document.addEventListener('touchmove', getMousePos)

  let clock: any = new THREE.Clock()

  let rotateDelta = {x: 0, y: 0}

  function rotateInertia() {
    rotateDelta.x = mousePos.x1 - mousePos.x2
    rotateDelta.y = mousePos.y1 - mousePos.y2
    
    cube0.rotation.y += rotateDelta.x / 4000
    cube0.rotation.x += rotateDelta.y / 4000
    cube1.rotation.y -= rotateDelta.x / 6666
    cube1.rotation.x -= rotateDelta.y / 6666
    cube2.rotation.y += rotateDelta.x / 16666
    cube2.rotation.x += rotateDelta.y / 16666
    cube3.rotation.y -= rotateDelta.x / 33333
    cube3.rotation.x -= rotateDelta.y / 33333
  }

  function render() {
    if(mousePos.x != mousePos.x1 && mousePos.y != mousePos.y1) {
      rotateInertia()
      mousePos.x2 = mousePos.x1
      mousePos.y2 = mousePos.y1
      mousePos.x1 = mousePos.x
      mousePos.y1 = mousePos.y
    } else {
      rotateInertia()
    }

    requestAnimationFrame(render)
    clock.getElapsedTime()
    renderer.render(scene, camera)
  }
  render()

}

export default Engine