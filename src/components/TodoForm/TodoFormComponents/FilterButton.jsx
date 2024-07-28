// Emmanuel Torres Malena | 2021-1097


//Boton para aplicar los filtros
const FilterButton = (props) => {

    const {
        action,
        active, 
        filter
    } = props

    //console.log(active)
    
    return (
        <button type="button" onClick={() => action()} className={`hover:text-blue-400 cursor-pointer transition-all duration-300 ease-in-out 
            ` + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-500' : 'text-gray-400')
        }>
            {filter}
        </button>
    )
}

export default FilterButton


