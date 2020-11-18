const modelNames = [
  'アンバー',
  'ウェンティ',
  'ガイア',
  'ジン',
  'ディルック',
  'バーバラ',
  'パイモン',
  'ヒルチャール',
  'フィッシュル',
  'リサ',
  '凝光',
  '空',
  '蛍',
  '香菱'
]
const modelName = modelNames[Math.floor(Math.random() * modelNames.length)]
const modelPath = `models/${modelName}/${modelName}.pmx`
const model = { name: modelName, path: modelPath }

const motionList = {
  Classic: [
    'motions/Classic_20160815_修正/11_motion_Classic_ソラ_20160815_修正.vmd',
    'motions/Classic_20160815_修正/12_eye_Classic_ソラ_20160815_修正.vmd',
    'motions/Classic_20160815_修正/13_facial_Classic_ソラ_20160815_修正.vmd'
  ],
  LoveShakeAnon: ['motions/LoveShake_Motion_v1.1/LoveShake_Motion_Anon.vmd'],
  LoveShakeKanon: ['motions/LoveShake_Motion_v1.1/LoveShake_Motion_Kanon.vmd'],
  HotelMoonside: [
    'motions/m_HotelMoonside_20171119/motion_HotelMoonside_20171119.vmd'
  ],
  HotelMoonsideWaRemix: [
    'motions/motion_HM_waRemix_20171119/motion_HotelMoonside_waRemix_20171119.vmd'
  ],
  MovinUp: ['motions/motion_MovinUp_20170821/motion_MovinUp_Body_20170821.vmd'],
  Sugar: ['motions/motion_Sugar_ソラ_20161112/motion_Sugar_ソラ_20161112.vmd']
}

const motionNames = Object.keys(motionList) as Extract<
  keyof typeof motionList,
  string
>[]
const motionName = motionNames[Math.floor(Math.random() * motionNames.length)]
const motionPaths = motionList[motionName]
const motion = { name: motionName, path: motionPaths }

export { model, motion }
