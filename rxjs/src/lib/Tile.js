import { context } from '../index'

class Tile {
  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.width = size
    this.height = size
  }

  moveX(payload) {
    this.x += payload
    return this.x
  }

  moveY() {
    this.y += payload
    return this.y
  }

  draw() {
    context.fillStyle = '#252525'
    context.strokeRect(this.x, this.y, this.height, this.width)
  }
}

export { Tile }
