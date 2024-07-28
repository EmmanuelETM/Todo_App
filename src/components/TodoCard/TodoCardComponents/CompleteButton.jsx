// Emmanuel Torres Malena | 2021-1097

const CompleteButton = (props) => {

    const {
        handleSetComplete,
        content,
    } = props

    const {
        id,
        status,
    } = content

    //console.log(id, status)

    return (
        <>
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
        </>
    )
}

export default CompleteButton;