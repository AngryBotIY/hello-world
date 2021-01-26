import { ctxGame } from '../index'

class BaseRenderer {
  static render(...fn) {
    fn.forEach((f) => requestAnimationFrame(f))
  }
}

class Renderer {
  constructor(ctx) {
    this.scope = ctx
  }

  renderOnce(fn) {
    fn(this.scope)
  }

  renderEach(fn) {
    const frame = () => fn(this.scope)

    requestAnimationFrame(frame)
  }
}

export { BaseRenderer, Renderer }
