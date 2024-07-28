//Emmanuel Torres Malena | 2021-1097

import TodoCard from "../TodoCard/TodoCard";

const TodoMatrix = (props) => {

    const {
        tasks,
        handleSetComplete, 
        handleSetDelete, 
    } = props

    return (
        <div className="container mx-auto mt-10">
            <div className=" gap-6 mx-12 grid grid-cols-3">
            { tasks.map(task => {
                    return (
                        <TodoCard 
                            key={task.id}
                            content={task}
                            handleSetComplete={handleSetComplete}
                            handleSetDelete={handleSetDelete}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoMatrix;