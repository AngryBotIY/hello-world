import { create, relate, mutate } from '../../lib/module'
import { nanoid } from 'nanoid'
import { update } from '../main'
import { TodoList } from './todolist'
import { Nothing } from '../common/nothing'
import './todo-form.scss'

export const TodoForm = () => {
  const onsubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    const todo = { id: nanoid(), title: data.get('input') }

    const todos = update(window.__data__todos__.concat(todo))

    const mutateList = mutate.bind(null, '.todolist')
    if (todos.length === 0) mutateList(Nothing())
    else mutateList(TodoList(todos))
  }

  const element = create('form', { className: 'todo-form', onsubmit })

  const children = [
    create('label', { htmlFor: 'input', innerText: 'Title:' }),
    create('input', { id: 'input', name: 'input', type: 'text', placeholder: '...add some title here!' })
  ]

  children.forEach((child) => relate(child, element))

  return element
}
