//Emmanuel Torres Malena | 2021-1097


//Contenedor para los botones de filtrado
const FilterButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
}

export default FilterButtonContainer