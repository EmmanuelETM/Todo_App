// Emmanuel Torres Malena | 2021-1097

import { useState, useEffect } from "react"
import TodoHeader from "./components/TodoHeader/TodoHeader"
import TodoMatrix from "./components/TodoMatrix/TodoMatrix"
import TodoCard from "./components/TodoCard/TodoCard"


const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Watch the next Marvel movie',
      status: false,
    },
    {
      id: 2,
      title: 'Complete the Todo List asdfl;jasdf asd;fljas;dflj asdl;fj a;sdkfj ;asdkfj;a sdkfj;a skdjf;a sdkfj ;asdkfj;a sdkfj;a sdklfj ;asdfj asd',
      status: false,
    },
    {
      id: 3,
      title: 'Stop M&P',
      status: false,
    },
    {
      id: 4,
      title: 'Get a life dud',
      status: false,
    },
    {
      id: 5,
      title: 'Get a life dud',
      status: false,
    },
    {
      id: 6,
      title: 'Get a life dud',
      status: false,
    },
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState(tasks)


  const addTask = (title) => {
    const lastID = tasks.length > 0 ? tasks[tasks.lenght -1].id : 1;

    const newTask = {
      id: lastID + 1,
      title,
      status: false,
    }

    const taskList = [...tasks]
    taskList.push(newTask)
    setTasks(taskList)
  }

  const handleSetComplete = (id) => {
    const updatedList = tasks.map(task => {
      if(task.id === id){
        return {...task, status: !task.status}
      }
      return task
    })

    setTasks(updatedList)
  }

  const handleSetDelete = (id) => {
    const updatedList = filteredTasks.filter(task => task.id !== id)
    setFilteredTasks(updatedList)
  }

  const handleClearCompleted = () => {
    const updatedList = tasks.filter(task => !task.status)
    setTasks(updatedList)
  }

  const showAll = () => {
    setActiveFilter('all')
  }

  const showActive = () => {
    setActiveFilter('active')
  }

  const showCompleted = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if(activeFilter === 'all') {
      setFilteredTasks(tasks)
    }
    else if (activeFilter === 'active') {
      const activeTasks = tasks.filter(task => task.status === false)
      setFilteredTasks(activeTasks)
    }
    else if (activeFilter === 'completed') {
      const completedTasks = tasks.filter(task => task.completed === true)
      setFilteredTasks(completedTasks)
    }
  }, [activeFilter, tasks])

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-200 sticky top-0 z-50">
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
