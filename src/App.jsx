// Emmanuel Torres Malena | 2021-1097

import { useState, useEffect } from "react"
import TodoHeader from "./components/TodoHeader/TodoHeader"
import TodoMatrix from "./components/TodoMatrix/TodoMatrix"
import TodoCard from "./components/TodoCard/TodoCard"


const App = () => {

  // defincion de estado para los tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Watch Deadpool 3',
      details: 'epico',
      status: false,
    },
    {
      id: 2,
      title: 'Complete the Todo List',
      details: 'epico',
      status: false,
    },
    {
      id: 3,
      title: 'Clean the house',
      details: 'epico',
      status: false,
    },
    {
      id: 4,
      title: 'Read a Book',
      details: 'epico',
      status: false,
    },
    {
      id: 5,
      title: 'Take the dogs for a walk',
      details: 'epico',
      status: false,
    },
    {
      id: 6,
      title: 'Study React',
      details: 'epico',
      status: false,
    },
  ])

  // Definicion de estados para el filtro activo y las tasks filtradas
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState(tasks)


  //Funcion para agregar un task al estado
  const addTask = (title, details) => {
    const lastID = tasks.length > 0 ? tasks[tasks.length - 1].id : 1;
    
    const newTask = {
      id: lastID + 1,
      title,
      details,
      status: false,
    }

    const taskList = [...tasks]
    taskList.push(newTask)
    setTasks(taskList);
  }

  // Funcion que marca como completado un task
  const handleSetComplete = (id) => {
    const updatedList = tasks.map(task => {
      if(task.id === id){
        return {...task, status: !task.status}
      }
      return task
    })

    setTasks(updatedList)
  }

  //Funcion para manejar la eliminacion de un task
  const handleSetDelete = (id) => {
    const updatedList = tasks.filter(task => task.id !== id)
    setTasks(updatedList)
  }

  //Funcion para borrar todos los tasks completados
  const handleClearCompleted = () => {
    const updatedList = tasks.filter(task => !task.status)
    setTasks(updatedList)
  }

  //Funcion para cambia el filtro para que aparezcan todos los tasks
  const showAll = () => {
    setActiveFilter('all')
  }

  //Funcion para cambia el filtro para que aparezcan solamente los tasks activos
  const showActive = () => {
    setActiveFilter('active')
  }

  //Funcion para cambia el filtro para que aparezcan solamente los tasks completados
  const showCompleted = () => {
    setActiveFilter('completed')
  }

  //Use efect para el renderizado condicional segun el filtro activo que tengamos seleccionado
  useEffect(() => {
    if(activeFilter === 'all') {
      setFilteredTasks(tasks)
    }
    else if (activeFilter === 'active') {
      const activeTasks = tasks.filter(task => task.status === false)
      setFilteredTasks(activeTasks)
    }
    else if (activeFilter === 'completed') {
      const completedTasks = tasks.filter(task => task.status === true)
      setFilteredTasks(completedTasks)
    }
  }, [activeFilter, tasks])

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-200">
      <TodoHeader 
        addTask={addTask}
        activeFilter={activeFilter}
        handleClearCompleted={handleClearCompleted}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
      />
      <TodoMatrix 
        tasks={filteredTasks}
        handleSetComplete={handleSetComplete}
        handleSetDelete={handleSetDelete}
      />
    </div>
    
  )
}

export default App
