import { CNV } from './canvas'
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
    this.scope.clearRect(0, 0, CNV.w, CNV.h)

    const frame = () => fn(this.scope)

    requestAnimationFrame(frame)
  }
}

export { BaseRenderer, Renderer }
