import { create, relate } from '../lib/module'
import './header.scss'

export const Header = create('header', { className: 'header' })

const children = [create('h1', { innerText: 'Hello world, Javascript!' })]

children.forEach((child) => relate(child, Header))
