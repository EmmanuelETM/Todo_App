//Emmanuel Torres Malena | 2021-1097

import FilterButton from "./FilterButton"

//Contenedor para los botones del formulario
const ButtonsContainer = ({ children }) => {
    return (
        <div className="flex justify-between items-center space-x-4 mt-4">
            {children}
        </div>
    )
}

export default ButtonsContainer