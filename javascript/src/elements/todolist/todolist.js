import { create, relate } from '../../lib/module'
import { Todo } from './todo'
import './todolist.scss'

export const TodoList = (todos) => {
  const element = create('ul', { className: "todolist" })

  const children = todos.map(todo => Todo(todo))

  children.forEach((child) => relate(child, element))

  return element
}