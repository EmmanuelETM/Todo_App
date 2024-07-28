//Emmanuel Torres Malena | 2021-1097

//contenedor para los botones del todocard
const CardButtonContainer = ({ children }) => {
    return (
        <div className="flex justify-between space-x-2 mb-4">
            {children}
        </div>
    )
}

export default CardButtonContainer;