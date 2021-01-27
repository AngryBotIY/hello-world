import { fromEvent, merge, partition } from 'rxjs'
import { filter, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators'

const KEY = { Up: 'ArrowUp', Right: 'ArrowRight', Down: 'ArrowDown', Left: 'ArrowLeft' }

const isArrowKey = ({ key }) => Object.values(KEY).some((name) => key === name)

const isX = ({ key }) => key === KEY.Right || key === KEY.Left

const isOpposite = ({ key: prev }, { key: curr }) => {
  switch (curr) {
    case KEY.Up:
      return prev === KEY.Down
    case KEY.Right:
      return prev === KEY.Left
    case KEY.Down:
      return prev === KEY.Up
    case KEY.Left:
      return prev === KEY.Right
    default:
      return false
  }
}

const [x$, y$] = partition(fromEvent(document, 'keydown').pipe(filter(isArrowKey)), isX)

const control$ = merge(x$, y$).pipe(distinctUntilChanged(isOpposite), distinctUntilKeyChanged('key'))

export { control$, KEY }
