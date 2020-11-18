import { AmbientLight, Clock, DirectionalLight, PolarGridHelper } from 'three'
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import './licence'
import { model, motion } from './mmd'
import { render, renderer, scene } from './stage'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Window {
    Ammo: () => Promise<Window['Ammo']>
  }
}

window.Ammo().then((AmmoLib) => {
  window.Ammo = AmmoLib

  const clock = new Clock()

  const gridHelper = new PolarGridHelper(30, 10, 8, 64, 0x444444, 0x888888)
  gridHelper.position.y = -10
  scene.add(gridHelper)

  const ambient = new AmbientLight(0x666666)
  scene.add(ambient)

  const directionalLight = new DirectionalLight(0x887766)
  directionalLight.position.set(-1, 1, 1).normalize()
  scene.add(directionalLight)

  document.body.style.margin = '0'
  document.body.appendChild(renderer.domElement)

  const helper = new MMDAnimationHelper({
    afterglow: 2.0
  })

  const loader = new MMDLoader()
  loader.loadWithAnimation(model.path, motion.path, (mmd) => {
    const mesh = mmd.mesh
    mesh.position.y = -10
    scene.add(mesh)

    helper.add(mesh, {
      animation: mmd.animation,
      physics: true
    })

    function animate() {
      requestAnimationFrame(animate)

      helper.update(clock.getDelta())
      render()
    }
    animate()
  })
})
