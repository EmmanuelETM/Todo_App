//Emmanuel Torres Malena | 2021-1097

import Todo from "../TodoCard/TodoCard";

const TodoMatrix = ({ children }) => {
    return (
        <div className="container mx-auto mt-10">
            <div className=" gap-6 mx-12 grid grid-cols-3">
                {children}
            </div>
        </div>
    )
}

export default TodoMatrix;