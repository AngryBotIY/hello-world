import { create, relate, mutate } from '../lib/module'
import { TodoForm } from './todolist/todo-form'
import { Nothing } from './common/nothing'
import './main.scss'

window.__data__todos__ = []

export const update = (todos) => (window.__data__todos__ = todos)

export const Main = create('main', { className: 'main' })

const children = [TodoForm(), Nothing()]

children.forEach((child) => relate(child, Main))
