import { range } from './lib/helpers'
import { Renderer } from './lib/Renderer'
import { Tile } from './lib/Tile'
import { ctxGrid, ctxGame, CNV } from './lib/canvas'
import { time$ } from './lib/time'

const RENDERER = {
  grid: new Renderer(ctxGrid),
  game: new Renderer(ctxGame)
}

const TILE = {
  size: 50,
  get width() {
    return this.size
  },
  get height() {
    return this.size
  }
}

const TILES = {
  count: {
    x: Math.round(CNV.w / TILE.size),
    y: Math.round(CNV.h / TILE.size)
  },
  objects() {
    return range(this.count.y).map((vY, iY) =>
      range(this.count.x).map((vX, iX) => new Tile(TILE.size * iX, TILE.size * iY, TILE.size, TILE.size))
    )
  }
}

TILES.objects().forEach((row) =>
  row.forEach((tile) =>
    RENDERER.grid.renderOnce((ctx) => {
      ctx.strokeStyle = '#2b2b2b'
      ctx.lineWidth = 1
      ctx.strokeRect(tile.x, tile.y, tile.width, tile.height)
    })
  )
)

const clearFrame = (ctx) => ctx.clearRect(0, 0, CNV.w, CNV.h)

const moveShake = (value, ctx) => ctx.fillRect(value * 5, 50, 50, 50)

time$.subscribe((value) => {
  RENDERER.game.renderEach((ctx) => {
    clearFrame(ctx)
    moveShake.call(null, value, ctx)
  })
})
