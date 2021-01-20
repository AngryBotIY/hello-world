import React from 'react'
import { Button } from '../Common/button.component'
import './todo.styles'

export const Todo = ({ todo, onDelete }) => {
  const handleDelete = event => onDelete(todo.id)

  return (
    <li className="todo">
      <h2>{todo.title}</h2>

      <Button type="primary" children="✕" style={{ color: 'red' }} onClick={handleDelete} />
    </li>
  )
}
