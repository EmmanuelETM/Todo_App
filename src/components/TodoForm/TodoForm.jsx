// Emmanuel Torres Malena | 2021-1097

import ButtonsContainer from "./TodoFormComponents/ButtonsContainer";
import FilterButtonContainer from "./TodoFormComponents/FilterButtonContainer";
import FilterButton from "./TodoFormComponents/FilterButton";
import AddButton from "./TodoFormComponents/AddButton";

const TodoForm = (props) => {
    const {
      addTask,
      activeFilter,
      handleClearCompleted,
      showAll,
      showActive,
      showCompleted,
    } = props

    return (
        <div className="container mx-auto max-w-lg flex flex-col justify-center items-center mt-2">
          <form className="w-full space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="p-1">
                  <i className="fa-regular fa-keyboard"></i>
                </span>
              </div>

              <input
                  type="text"
                  className="bg-gray-700 focus:bg-gray-600 text-white font-inter pl-12 w-full py-3 rounded-xl outline-none transition-all duration-300 ease-in-out"
                  placeholder="Type Here"
                />
            </div>
        
            <ButtonsContainer>
              <button onClick={() => {}} className="hover:text-red-500 text-gray-400 cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
              </button>

              <FilterButtonContainer>
                <FilterButton />
              </FilterButtonContainer>

              <AddButton />
            </ButtonsContainer>
          </form>
      </div>
    )
}

export default TodoForm;