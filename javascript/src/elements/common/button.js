import { create } from '../../lib/module'
import './button.scss'

const types = ['button-primary', 'button-secondary', 'button-default']

export const Button = (type = 'default', props) => create('button', { className: types.find((t, i) => t.includes(type) && types[i]), ...props })