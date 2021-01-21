import { relate } from './lib/module'
import { Header } from './elements/header'
import { Main } from './elements/main'

const App = document.querySelector('#root')

const children = [
  Header,
  Main
]

children.forEach((child) => relate(child, App))