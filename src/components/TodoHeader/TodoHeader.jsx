// Emmanuel Torres Malena | 2021-1097

import TodoForm from "../TodoForm/TodoForm";

const TodoHeader = (props) => {

    //Destructuracion de props
    const {
        addTask,
        activeFilter,
        handleClearCompleted,
        showAll,
        showActive,
        showCompleted,
    } = props

    return (
        //contenedor para TodoForm
        <div className="py-4 px-5 border-b bg-gray-900 border-gray-700">
            <TodoForm 
                addTask={addTask}
                activeFilter={activeFilter}
                handleClearCompleted={handleClearCompleted}
                showAll={showAll}
                showActive={showActive}
                showCompleted={showCompleted}
            />
        </div>
    )
}

export default TodoHeader;