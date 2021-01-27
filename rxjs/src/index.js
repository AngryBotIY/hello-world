import { range } from './lib/helpers'
import { Renderer } from './lib/Renderer'
import { Tile } from './lib/Tile'
import { ctxGrid, ctxGame, CNV } from './lib/canvas'
import { time$ } from './lib/time'
import { control$ } from './lib/control'

const RENDERER = {
  grid: new Renderer(ctxGrid),
  game: new Renderer(ctxGame)
}

const TILE = { size: 50 }

const TILES = {
  count: {
    x: Math.round(CNV.w / TILE.size),
    y: Math.round(CNV.h / TILE.size)
  },
  get objects() {
    return range(this.count.y).map((vY, iY) =>
      range(this.count.x).map(
        (vX, iX) => new Tile(TILE.size * iX, TILE.size * iY, TILE.size, TILE.size)
      )
    )
  }
}

TILES.objects.forEach((row) =>
  row.forEach((tile) =>
    RENDERER.grid.renderOnce((ctx) => {
      ctx.strokeStyle = '#2b2b2b'
      ctx.lineWidth = 1
      ctx.strokeRect(tile.x, tile.y, tile.size, tile.size)
    })
  )
)

const SNAKE = {
  up: 0,
  right: 5,
  down: 0,
  left: 0
}

const moveSnake = (value, ctx) => ctx.fillRect(value * 5, 50, 50, 50)

time$.subscribe((value) => {
  RENDERER.game.renderEach((ctx) => moveSnake(value, ctx))
})

control$.subscribe((value) => console.log('OUT', value))
