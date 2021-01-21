import { create, relate, style, mutate } from '../../lib/module'
import { update } from '../main'
import { Button } from '../common/button'
import { TodoList } from './todolist'
import { Nothing } from '../common/nothing'
import './todo.scss'

export const Todo = ({ id, title }) => {
  const element = create('li', { id, className: 'todo' })

  const onclick = (e) => {
    e.preventDefault()

    const todos = update(window.__data__todos__.filter((todo) => todo.id !== id))

    const mutateList = mutate.bind(null, '.todolist')
    if (todos.length === 0) mutateList(Nothing())
    else mutateList(TodoList(todos))
  }

  const children = [create('h2', { innerText: title }), style(Button('primary', { innerText: '✕', onclick }), { color: 'red' })]

  children.forEach((child) => relate(child, element))

  return element
}
