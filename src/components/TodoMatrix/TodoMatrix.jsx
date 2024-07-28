//Emmanuel Torres Malena | 2021-1097

import TodoCard from "../TodoCard/TodoCard";

const TodoMatrix = (props) => {

    //Destructuracion de los props
    const {
        tasks,
        handleSetComplete, 
        handleSetDelete, 
    } = props

    return (
        //contenedor para los todocard
        <div className="container mx-auto mt-10 pb-10">
            <div className=" gap-6 mx-12 lg:px-32 sm:12px grid  md:grid-cols-3 sm:grid-cols-2">
            {/* se le hace un map al array tasks, para que por cada elemento del array se devuelva un TodoCard */}
            { tasks.map(task => {
                    return (
                        //Se le pasa al TodoCard los props necesarios
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