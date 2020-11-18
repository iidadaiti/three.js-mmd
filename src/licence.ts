import { model, motion } from './mmd'

const licenceElement = document.createElement('div')
licenceElement.style.position = 'fixed'
licenceElement.style.top = '0'
licenceElement.style.left = '0'
licenceElement.style.display = 'flex'
licenceElement.style.flexDirection = 'column'

const licenceFragment = document.createDocumentFragment()

const useModelElement = document.createElement('div')
useModelElement.textContent = `model: ${model.name}`
licenceFragment.appendChild(useModelElement)

const useMotionElement = document.createElement('div')
useMotionElement.textContent = `motion: ${motion.name}`
licenceFragment.appendChild(useMotionElement)

const modelElement = document.createElement('a')
modelElement.textContent = 'お借りしたモデル'
modelElement.href = 'https://genshin.mihoyo.com/ja/news/detail/5885'
modelElement.target = '_blank'
modelElement.rel = 'noopener noreferrer'
licenceFragment.appendChild(modelElement)

const motionElement = document.createElement('a')
motionElement.textContent = 'お借りしたモーション'
motionElement.href = 'https://ch.nicovideo.jp/sitencho/blomaga/ar903320'
motionElement.target = '_blank'
motionElement.rel = 'noopener noreferrer'
licenceFragment.appendChild(motionElement)

licenceElement.appendChild(licenceFragment)
document.body.appendChild(licenceElement)
