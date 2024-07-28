// Emmanuel Torres Malena | 2021-1097

import { useState, useRef } from "react";
import ButtonsContainer from "./TodoFormComponents/ButtonsContainer";
import FilterButtonContainer from "./TodoFormComponents/FilterButtonContainer";
import FilterButton from "./TodoFormComponents/FilterButton";

const TodoForm = (props) => {
  //destructuracion de props
    const {
      addTask,
      activeFilter,
      handleClearCompleted,
      showAll,
      showActive,
      showCompleted,
    } = props

    const textareaRef = useRef(null)

    //preventDefault evita que cuando se envie el formulario, se recargue la pagina
    const handleSubmit = (event) => {
      event.preventDefault();
    }

    //Definir los estados
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    //Funcion que cuando se le da enter en el input tag, pasa el foco hacia el textarea
    const handleInputEnter = (event) => {
      if(event.key.toLowerCase() === 'enter'){
        event.preventDefault()
        textareaRef.current.focus()
      }
    }

    //Funcion para cuando se le da click al Add Button
    const handleAddButtonClick = (event) => {
      if(content !== ''){
        event.preventDefault()
        if(title !== '' && content !== ''){
          addTask(title, content)
          setTitle('')
          setContent('')
        }
      }
    }

    // handle para que cuando se le da enter al textarea, cree un nuevo task
    const handleTask = (event) => {
      if(event.key.toLowerCase() === 'enter'){
          handleAddButtonClick(event)
      }
    }

    return (
        <div className="container mx-auto max-w-lg flex flex-col justify-center items-center mt-2">
          
          {/* Formulario de tasks */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">

              {/* Icono del Input */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="p-1">
                  <i className="fa-solid fa-heading"></i>
                </span>
              </div>

              {/* Input para el Titulo */}
              <input
                  type="text"
                  className="bg-gray-700 focus:bg-gray-600 text-white font-inter pl-12 w-full py-3 rounded-xl outline-none transition-all duration-300 ease-in-out"
                  placeholder="Task Title..."
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  onKeyDown={event => handleInputEnter(event)}
                  required
                />
            </div>

            <div className="relative mt-4">

              {/* Icono del textarea */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3 pointer-events-none">
                <span className="p-1">
                  <i className="fa-regular fa-keyboard"></i>
                </span>
              </div>

              {/* Textarea para descripcion */}
              <textarea
                ref={textareaRef}
                value={content}
                onChange={event => setContent(event.target.value)}
                onKeyDown={event => handleTask(event)}
                className="bg-gray-700 focus:bg-gray-600 text-white font-inter pl-12 w-full py-3 rounded-xl outline-none transition-all duration-300 ease-in-out resize-none h-32"
                placeholder="Task Content..."
                required
              />
            </div>
            
            {/* Contenedor para los botones debajo del textarea */}
            <ButtonsContainer>
              {/* Boton de clear completed */}
              <button type="button" onClick={() => handleClearCompleted()} className="hover:text-red-500 text-gray-400 cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
              </button>

              {/* Contenedor para los filter buttons */}
              <FilterButtonContainer>
                <FilterButton action={showAll} active={activeFilter} filter={'All'} />
                <FilterButton action={showActive} active={activeFilter} filter={'Active'} />
                <FilterButton action={showCompleted} active={activeFilter} filter={'Completed'} />
              </FilterButtonContainer>

              {/* Boton de Add Task */}
              <button onClick={event => handleAddButtonClick(event)} className="bg-blue-800 hover:bg-blue-700 py-1 px-2 rounded transition duration-300 ease-in-out">
                <i className="fa-regular fa-plus pr-2"></i>
                Add Task
              </button>
            </ButtonsContainer>
          </form>
      </div>
    )
}

export default TodoForm;