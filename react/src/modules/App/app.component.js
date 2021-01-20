import React, { useState } from 'react'
import { Header } from '../Header/header.component'
import { Main } from '../Main/main.component'
import { Todolist } from '../Todolist/todolist.component'
import { TodoForm } from '../Todolist/todo-form.component'
import { Nothing } from '../Common/nothing.component'

export const App = () => {
  const [todos, setTodos] = useState([])

  const handleAdd = (todo) => setTodos((todos) => [...todos, todo])

  const handleDelete = (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id))

  return (
    <>
      <Header />

      <Main>
        <TodoForm onAdd={handleAdd} />

        {todos.length !== 0 ? <Todolist todos={todos} onDelete={handleDelete} /> : <Nothing />}
      </Main>
    </>
  )
}
