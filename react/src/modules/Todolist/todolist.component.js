import React from 'react'
import { Todo } from './todo.component'
import './todolist.styles'

export const Todolist = ({ todos, onDelete }) => (
  <ul className="todolist">
    {todos.map((todo) => (
      <Todo todo={todo} key={todo.id} onDelete={onDelete} />
    ))}
  </ul>
)
