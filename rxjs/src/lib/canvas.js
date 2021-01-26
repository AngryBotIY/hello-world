const cnvGrid = document.querySelector('.canvas-grid')
const ctxGrid = cnvGrid.getContext('2d')

const cnvGame = document.querySelector('.canvas-game')
const ctxGame = cnvGame.getContext('2d')

const CNV = {
  w: Math.round(window.innerWidth / 2 / 50) * 50,
  h: Math.round(window.innerHeight / 2 / 50) * 50
}

cnvGrid.width = cnvGame.width = CNV.w
cnvGrid.height = cnvGame.height = CNV.h

export { ctxGrid, ctxGame, CNV }
