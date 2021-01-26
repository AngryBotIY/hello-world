import { interval } from 'rxjs'

const TICK = 1000 / 60

const time$ = interval(TICK)

export { time$ }
