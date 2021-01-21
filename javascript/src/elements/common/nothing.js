import { create } from '../../lib/module'
import './nothing.scss'

export const Nothing = (innerText = 'There is nothing!') => create('h2', { className: 'nothing', innerText })