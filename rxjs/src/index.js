import { fromEvent, interval, combineLatest } from 'rxjs'
import { map, distinctUntilChanged } from 'rxjs/operators'

import { range } from './lib/helpers'
import { Tile } from './lib/Tile'

import { time$ } from './lib/time'

const canvas = document.querySelector('.canvas')
export const context = canvas.getContext('2d')

canvas.width = window.innerWidth / 2
canvas.height = window.innerHeight

const TILE = {
  size: Math.round(canvas.width / 20),
  get width() {
    return this.size
  },
  get height() {
    return this.size
  }
}

const FIELD = {
  width: canvas.width,
  height: canvas.height
}

const TILES_COUNT = {
  x: Math.round(FIELD.width / TILE.size),
  y: Math.round(FIELD.height / TILE.size)
}

const TILES = range(TILES_COUNT.y).map((vY, iY) =>
  range(TILES_COUNT.x).map((vX, iX) => new Tile(TILE.size * iX, TILE.size * iY, TILE.size))
)

TILES.forEach((row) => row.forEach((tile) => tile.draw()))
