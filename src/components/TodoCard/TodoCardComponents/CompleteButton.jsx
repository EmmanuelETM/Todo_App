// Emmanuel Torres Malena | 2021-1097

//Boton de completar task
const CompleteButton = (props) => {

    //destructurar los props
    const {
        handleSetComplete,
        content,
    } = props

    // destructurar content
    const {
        id,
        status,
    } = content

    //console.log(id, status)

    return (
        <button onClick={() => handleSetComplete(id)} className="underline text-white rounded transition duration-300 ease-in-out">
            {
                status ? (
                    <span className="bg-green-600 p-1 mr-2 rounded-full cursor-pointer">
                        <i className="fa-solid fa-check"></i>
                    </span>
                ) : (
                    <span className="hover:bg-green-600 p-1 mr-2 rounded-full cursor-pointer">
                        <i className="fa-solid fa-check"></i>
                    </span>
                )
            }
        </button>
    )
}

export default CompleteButton;