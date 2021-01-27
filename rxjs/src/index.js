import { range } from './lib/helpers'
import { Renderer } from './lib/Renderer'
import { Tile } from './lib/Tile'
import { ctxGrid, ctxGame, CNV } from './lib/canvas'
import { KEY } from './lib/control'
import { time$ } from './lib/time'
import { control$ } from './lib/control'
import { combineLatest } from 'rxjs'

const RENDERER = {
  grid: new Renderer(ctxGrid),
  game: new Renderer(ctxGame)
}

const TILE = { size: 25 }

const TILES = {
  count: {
    x: Math.round(CNV.w / TILE.size),
    y: Math.round(CNV.h / TILE.size)
  },
  get objects() {
    return range(this.count.y).map((vY, iY) =>
      range(this.count.x).map((vX, iX) => new Tile(TILE.size * iX, TILE.size * iY, TILE.size, TILE.size))
    )
  }
}

TILES.objects.forEach((row) =>
  row.forEach(({ x, y, width, height }) =>
    RENDERER.grid.renderOnce((ctx) => {
      ctx.fillStyle = '#2b2b2b'
      ctx.fillRect(x, y, width, height)
    })
  )
)

const SNAKE = {
  x: 0,
  y: 0,
  speed: TILE.size / 5
}

const drawSnake = (x, y, ctx) => ctx.fillRect(x, y, TILE.size, TILE.size)

const moveSnake = (x, y) =>
  RENDERER.game.renderEach((ctx) => {
    SNAKE.x = x
    SNAKE.y = y

    drawSnake(x, y, ctx)
  })

const game$ = combineLatest([time$, control$]).subscribe((values) => {
  const time = values[0]
  const control = values[1]

  switch (control.key) {
    case KEY.Up:
      return moveSnake(SNAKE.x, SNAKE.y - SNAKE.speed)
    case KEY.Right:
      return moveSnake(SNAKE.x + SNAKE.speed, SNAKE.y)
    case KEY.Down:
      return moveSnake(SNAKE.x, SNAKE.y + SNAKE.speed)
    case KEY.Left:
      return moveSnake(SNAKE.x - SNAKE.speed, SNAKE.y)
    default:
      return moveSnake(SNAKE.x + SNAKE.speed, SNAKE.y)
  }
})
