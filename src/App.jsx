// Emmanuel Torres Malena | 2021-1097

import TodoHeader from "./components/TodoHeader/TodoHeader"
import TodoMatrix from "./components/TodoMatrix/TodoMatrix"
import TodoCard from "./components/TodoCard/TodoCard"

const App = () => {
  return (
  
    <div className="bg-gray-900 min-h-screen h-full text-gray-200 sticky top-0 z-50">
      <TodoHeader />
      <TodoMatrix>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
      </TodoMatrix>
    </div>
  )
}

export default App
