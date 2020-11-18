import { PerspectiveCamera } from 'three'

const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  2000
)
camera.position.z = 30

export { camera }
