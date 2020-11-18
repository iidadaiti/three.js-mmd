import { WebGLRenderer } from 'three'

const renderer = new WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.domElement.style.display = 'block'

export { renderer }
