import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './todo-form.styles'

export const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ title, id: nanoid() })
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="input">Title:</label>
      <input id="input" type="text" placeholder="...add some title here!" onChange={(e) => setTitle(e.target.value)} />
    </form>
  )
}
