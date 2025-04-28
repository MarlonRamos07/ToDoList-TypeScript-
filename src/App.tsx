import { useState } from 'react'
import './App.css'


interface TodoItem {
  id:string,
  texto:string,
  completed:boolean
}

function App() {

  const [todo, setTodos] = useState<TodoItem[]>([])
  const [newTodo, setNewTodo] = useState<string>("")

  const  adicionarTarefa = () =>{
    if(newTodo !== ""){
      const newId = crypto.randomUUID()
      const newTodoItem: TodoItem = {
      id: newId,
      texto: newTodo, 
      completed: false
    }
    setTodos([...todo, newTodoItem])
    setNewTodo("")
  }
}

const removerTarefa = (id:string) =>{
  const tarefasAtualizadas = todo.filter((todo)=> todo.id !== id)
  setTodos(tarefasAtualizadas)
}

  const marcarCompleto = (id:string) =>{

    const todosAtualizados = todo.map((todo) =>{
      if ( todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })

    setTodos(todosAtualizados)
  }


  return (
   <div className='app'>
    <div className='container'>
      <h1>Lista de Tarefas</h1>
      <div className='input-container'>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>
      <ol>
  {
    todo.map((todo) => (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => marcarCompleto(todo.id)}
        />
        <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.texto}</span>
        <button onClick={() => removerTarefa(todo.id)}>
          Remover
        </button>
      </li>
    ))
  }
</ol>
    </div>
   </div>
  )
}

export default App
