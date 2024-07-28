const FilterButton = () => {
    return (
        <>
            <button onClick={() => {}} className="hover:text-blue-500 text-gray-400 rounded cursor-pointer transition-all duration-300 ease-in-out">
                All
            </button>
            <button onClick={() => {}} className="hover:text-blue-500 text-gray-400 rounded cursor-pointer transition-all duration-300 ease-in-out">
                Active
            </button>
            <button onClick={() => {}} className="hover:text-blue-500 text-gray-400 rounded cursor-pointer transition-all duration-300 ease-in-out">
                Completed
            </button>
        </>
        
    )
}

export default FilterButton

// const FilterButton = ({ action, active, filter }) => {
//     console.log(active)
//     return (
//         <button onClick={() => action()} className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out 
//             ` + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-500' : 'text-gray-400')
//         }>
//             {filter}
//         </button>
//     )
// }

// export default FilterButton;