import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { camera } from './stage/camera'
import { renderer } from './stage/renderer'
import { scene } from './stage/scene'

const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 10
controls.maxDistance = 100

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  const width = window.innerWidth
  const height = window.innerHeight

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function render(): void {
  renderer.render(scene, camera)
}
render()

export { camera, scene, renderer, render }
